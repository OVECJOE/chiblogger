import { useNavigate } from 'react-router-dom';
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

const NewArticle = () => {
    const [images, setImages] = useState([]);
    const [autosave, setAutosave] = useState(true);
    const [published, setPublished] = useState(false);
    const { defaultArticle, articleData, articleDispatcher }
        = useContext(PostContext);
    const { articlesDispatcher } = useContext(ArticlesContext);
    const { userData } = useContext(UserContext);
    const { projectDispatcher } = useContext(ProjectContext);
    const editorRef = useRef();

    const navigate = useNavigate();

    const insert_content = (inst) => {
        inst.setContent(articleData.content);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const data = {};

        if (name === 'title') {
            const slugName = value.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');

            data['slugName'] = slugName;
            data['title'] = value;
        } else if (name === 'articleImages') {
            const { files } = e.target;
            setImages(files);
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
        const API_URL = process.env.REACT_APP_API_URL;
        const { title, slugName, content } = articleData;

        if (images.length > 5) {
            erroneous(
                { message: 'Maximum number of images == 5' },
                projectDispatcher
            );
            return;
        }

        if (!(title && slugName && content)) {
            erroneous(
                { message: 'Title, Slug Name, and Content are required!' },
                projectDispatcher
            );
            return;
        }

        for (const i in images) {
            const image = images[i];
            await uploadImage(image, articleDispatcher);
        }

        axios.post(`${API_URL}/articles/new-article`, articleData, {
            withCredentials: true
        })
            .then(res => {
                articlesDispatcher({
                    type: 'ADD_ARTICLE',
                    article: res.data
                });
                articleDispatcher({
                    type: 'CLEAR_ARTICLE_DATA',
                    default: defaultArticle()
                });
                editorRef.current.setContent('');
                setImages([]);
                navigate('/dashboard/articles', {replace: true})
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
                <h1>Create New Article</h1>
                <div className='action-btns'>
                    <button onClick={saveArticle}>Save As Draft</button>
                    <button onClick={() => setPublished(true)}>
                        Save and Publish
                    </button>
                </div>
                <div className='article-title'>
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
                <div className='article-slug'>
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
                <div className='article-image'>
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
                    <p className='tooltip'>
                        These pictures will be displayed at the top of your article
                        below the article's title in form of an image slider; Maximum
                        number of images == 5
                    </p>
                </div>
                <div className='article-premium'>
                    <div className='premium-read'>
                        <label htmlFor='premium-read'>Is this Article a Premium Read?</label>
                        <input
                            type='checkbox'
                            name='premiumRead'
                            id='premium-read'
                            onChange={handleChange}
                            value={articleData.premiumRead}
                        />
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