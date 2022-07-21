import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { FaRegHandPointDown } from 'react-icons/fa';

import './styles/NewArticle.css';

const NewArticle = () => {
    const editorRef = useRef();
    const articleData = useState({
        title: '',
        slugName: '',
        articleImages: [],
        content: ''
    });

    return (
        <section className='new-article-container'>
            <div className='article-metadata'>
                <h1>Create New Article</h1>
                <div className='action-btns'>
                    <button>Save</button>
                    <button>Save and Publish</button>
                </div>
                <div className='article-title'>
                    <label htmlFor='title'>Enter a unique article title:</label>
                    <input
                        type='text'
                        name='title'
                        placeholder="Article's Title"
                        id='title'
                        required
                    />
                    <p className='tooltip'>
                        <strong>Note: </strong>Please make title as short as possible;
                        Maximum length is <em>255</em>
                    </p>
                </div>
                <div className='article-slug'>
                    <label htmlFor='slug-name'>
                        Slug Name:
                    </label>
                    <input
                        type='text'
                        name='slug'
                        id='slug-name'
                        placeholder='format: my-new-article (if title is "My New Article")'
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
                        name='articleImage'
                        multiple
                        accept='image/png, image/jpeg'
                        id='article-image'
                    />
                    <p className='tooltip'>
                        These pictures will be displayed at the top of your article
                        below the article's title in form of an image slider.
                    </p>
                </div>
            </div>
            <div className='article-body'>
                <h3>Enter Your Article's Content Below <FaRegHandPointDown /></h3>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    init={{
                        menubar: false,
                    }}
                />
            </div>
        </section>
    );
};

export default NewArticle;