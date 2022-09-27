import { useNavigate, useLocation } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { FaRegHandPointDown } from 'react-icons/fa';

import { PostContext } from '../contexts/postContext';
import { ArticlesContext } from '../contexts/articlesContext';
import { ProjectContext } from '../contexts/projectContext';
import { UserContext } from '../contexts/userContext';
import { uploadImage, erroneous } from '../utils';
import './styles/NewArticle.css';
import axios from 'axios';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import Loader from './misc/Loader';

const NewArticle = () => {
    const [autosave, setAutosave] = useState(true);
    const [published, setPublished] = useState(false);
    const [uploaded, setUploaded] = useState({
        state: false,
        file: { name: '', url: '' }
    });
    const { defaultArticle, articleData, articleDispatcher }
        = useContext(PostContext);
    const { articlesDispatcher } = useContext(ArticlesContext);
    const { userData } = useContext(UserContext);
    const { projectDispatcher } = useContext(ProjectContext);
    const editorRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();

    const insert_content = (inst) => {
        inst.setContent(articleData.content);
    };

    const handleChange = async (e) => {
        const { name, value, type, checked } = e.target;
        const data = {};

        if (name === 'title') {
            const slugName = value.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');

            data['slugName'] = slugName;
            data['title'] = value;
        } else if (name === 'articleImages') {
            articleDispatcher({ type: 'CLEAR_PHOTOS' });

            const files = e.target.files;

            if (files.length > 5) {
                erroneous(
                    { message: 'Maximum number of images == 5' },
                    projectDispatcher
                );
            } else {
                setUploaded(prev => ({ ...prev, state: true }));

                for (const file of files) {
                    uploadImage(file, articleDispatcher, projectDispatcher)
                        .then(url => {
                            setUploaded(prev => ({
                                ...prev,
                                file: {
                                    name: file.name,
                                    url
                                }
                            }));
                        }).catch(err => {
                            erroneous(err, projectDispatcher);
                        });
                }
            }

            return;
        } else {
            data[name] = type === 'checkbox' ? checked : value;
        }

        data['creator'] = userData._id;

        articleDispatcher({
            type: 'UPDATE_PROPERTY',
            article: data
        });
    };

    const handleKeyDown = (e) => {
        const ctrl_SEnabled = () => {
            let charCode = String.fromCharCode(e.which).toLowerCase();
            return (e.ctrlKey || e.metaKey) && charCode === 's';
        };
        const updateData = () => {
            articleDispatcher({
                type: 'UPDATE_PROPERTY',
                key: 'content',
                value: editorRef.current.getContent()
            });
            !autosave && e.preventDefault();
        }

        if (autosave) {
            updateData();
        } else {
            ctrl_SEnabled() && updateData();
        }
    };

    const saveArticle = async () => {
        const { title, slugName, content } = articleData;

        if (!(title && slugName && content)) {
            erroneous(
                { message: 'Title, Slug Name, and Content are required!' },
                projectDispatcher
            );
            return;
        }

        axios.post('/api/articles/create_or_update', articleData, {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userData.token}`

            },
        })
            .then(res => {
                setUploaded({
                    state: false,
                    file: { name: '', url: '' }
                });

                articlesDispatcher({
                    type: 'ADD_ARTICLE',
                    article: res.data
                });

                articleDispatcher({
                    type: 'CLEAR_ARTICLE_DATA',
                    default: defaultArticle()
                });

                editorRef.current.setContent('');
                location.state.edit ?
                    projectDispatcher({
                        type: 'SET_MESSAGE',
                        message: `Changes made to article with ID ${location.state.id} has been saved.`
                    }) : projectDispatcher({
                        type: 'SET_MESSAGE',
                        message: 'New article created successfully.'
                    });
                navigate('/dashboard/articles');
            })
            .catch(err => {
                erroneous(err, projectDispatcher);
            });
    };

    useEffect(() => {
        articleDispatcher({
            type: 'TOGGLE_PUBLISHED',
            published
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [published]);

    useEffect(() => {
        published && saveArticle();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articleData.published]);

    return (
        <section className='new-article-container'>
            <div className='article-metadata'>
                <h1>{location.state?.edit ? 'Edit' : 'Create New'} Article</h1>
                <div className='action-btns'>
                    <button onClick={saveArticle}>Save As Draft</button>
                    <button onClick={() => setPublished(true)}>
                        Save and Publish
                    </button>
                </div>
                <div className='article-title form-item'>
                    <label htmlFor='title'>Enter a unique article title:</label>
                    <input
                        type='text'
                        name='title'
                        placeholder="Article's Title"
                        id='title'
                        onChange={handleChange}
                        value={articleData.title}
                        required
                    />
                    <p className='tooltip'>
                        <strong>Note: </strong>Please make title as short as possible;
                        Maximum length is <strong>255</strong>
                    </p>
                </div>
                <div className='article-slug form-item'>
                    <label htmlFor='slug-name'>
                        Slug Name:
                    </label>
                    <input
                        type='text'
                        name='slugName'
                        id='slug-name'
                        placeholder='format: my-new-article (if title is "My New Article")'
                        onChange={handleChange}
                        value={articleData.slugName}
                        disabled
                    />
                    <p className='tooltip'>
                        <strong>Note: </strong>You cannot edit this, it is created automatically
                    </p>
                </div>
                <div className='article-image form-item'>
                    <label htmlFor='article-image'>
                        Select Pictures Relevant to this Article:
                    </label>
                    <input
                        type='file'
                        name='articleImages'
                        multiple
                        accept='image/png, image/jpeg'
                        id='article-image'
                        onChange={handleChange}
                    />
                    {uploaded.state ?
                        <div
                            style={{
                                display: 'flex',
                                gap: '.5rem',
                                alignItems: 'center',
                                fontSize: '1.2rem',
                                marginTop: '.4rem'
                            }}
                        >
                            {uploaded.file.name ?
                                <>
                                    <BsFillCloudUploadFill />
                                    <p className='tooltip'>
                                        Uploaded {uploaded.file.name} (URL: {uploaded.file.url})
                                    </p>
                                </> :
                                <Loader />
                            }
                        </div> :
                        <p className='tooltip'>
                            These pictures will be displayed at the top of your article
                            below the article's title in form of an image slider; Maximum
                            number of images == 5
                        </p>
                    }
                </div>
                <div className='article-premium'>
                    <div className='premium-read'>
                        <input
                            type='checkbox'
                            name='premiumRead'
                            id='premium'
                            onChange={handleChange}
                            value={articleData.premiumRead}
                        />
                        <label htmlFor='premium'>Is this Article a Premium Read?</label>
                    </div>
                    <p className='tooltip'>
                        A premium read article can only be accessible to premium users.
                        Premium users are users that have supported you through donations.
                    </p>
                </div>
            </div>
            <div className='article-body'>
                <h3>Enter Your Article's Content Below <FaRegHandPointDown /></h3>
                <p className='tooltip'>
                    Autosave {autosave ?
                        'is enabled by default and will ensure that content are saved to your browser temporarily.'
                        : 'has been turned off by you.'} Click <span
                            className='autosave-button'
                            onClick={() => setAutosave(prev => !prev)}>
                        here</span> to turn {autosave ? 'off' : 'on'}.
                </p>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    init={{
                        menubar: false,
                        init_instance_callback: insert_content
                    }}
                    onKeyDown={(e) => handleKeyDown(e, autosave)}
                />
            </div>
        </section>
    );
};

export default NewArticle;