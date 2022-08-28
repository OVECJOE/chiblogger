import { FaRegEdit } from 'react-icons/fa';
import { useContext, useState } from 'react';
import axios from 'axios';

import './styles/Profile.css';
import { UserContext } from '../contexts/userContext';
import { ProjectContext } from '../contexts/projectContext';
import { updateProperty, erroneous, uploadImage } from '../utils';

const Profile = () => {
    const defaultPassEdit = () => ({
        state: false,
        newPassword: '',
        confirmPassword: ''
    });

    const { userData, userDispatcher } = useContext(UserContext);
    const { projectDispatcher } = useContext(ProjectContext);

    const [editOff, setEditOff] = useState(true);
    const [passEdit, setPassEdit] = useState(defaultPassEdit());
    const [activeUploadModal, setActiveUploadModal] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState({});

    const toggleEdit = () => setEditOff(prev => !prev);
    const togglePassEdit = () => setPassEdit(prev => ({
        ...prev,
        state: !prev.state
    }));
    const handlePassEdit = (e) => {
        const { name, value } = e.target;

        setPassEdit(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleChange = (e) => {
        updateProperty(e, userDispatcher);
    };
    const submitUpdates = () => {
        const flag = Object.values(passEdit).every(value => value);
        const postData = {
            username: userData.username,
            email: userData.email
        };

        if (flag) {
            if (passEdit.newPassword === passEdit.confirmPassword) {
                postData.password = passEdit.newPassword;
            } else {
                const e = { message: 'Given passwords not equal' };
                erroneous(e, projectDispatcher);
                return;
            }
        }

        axios.post('/api/users/update-admin', postData, {
            headers: {
                "Content-type": 'application/json',
                Authorization: `Bearer ${userData.token}`,
            }
        })
            .then(res => {
                userDispatcher({
                    type: 'STORE_USER',
                    user: res.data
                });
            })
            .catch(err => {
                erroneous(err, projectDispatcher);
            });
        setPassEdit(defaultPassEdit());
        setTimeout(() => {
            projectDispatcher({
                type: 'REMOVE_ERROR'
            });
        }, 4000);
    };
    const changePhoto = (e) => {
        const photo = e.target.files[0];

        setSelectedPhoto(photo);
    };
    const sendPhoto = (e) => {
        e.preventDefault();

        uploadImage(selectedPhoto, userDispatcher, projectDispatcher)
        .then(photo => {
            console.log(photo);
            axios.post('/api/users/upload-photo', { photo }, {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${userData.token}`
                },
            }).then(res => {
                userDispatcher({
                    type: 'STORE_USER',
                    user: res.data
                });
                setActiveUploadModal(false);
            }).catch(err => {
                erroneous(err, projectDispatcher);
            });
        }).catch(err => {
            erroneous(err, projectDispatcher);
        });
    };

    return (
        <section className='profile-section'>
            {activeUploadModal && <form className='select-photo-card'
                onSubmit={sendPhoto}
            >
                <label htmlFor='select-photo'>
                    Select a photo:
                </label>
                <input
                    type='file'
                    accept='image/png, image/jpeg'
                    onChange={changePhoto}
                />
                <button>Upload</button>
            </form>
            }
            <div className='profile-pic'>
                {userData.photo ?
                    <img src={userData.photo}
                        alt={userData.username} /> :
                    <div className='no-photo'>
                        {userData.username &&
                            userData.username[0].toUpperCase()
                        }
                    </div>
                }
                <FaRegEdit onClick={() => setActiveUploadModal(true)} />
            </div>
            <div className='profile-info'>
                <span className='input-edit'>
                    {editOff ? 'View' : 'Edit'} Mode <FaRegEdit
                        onClick={toggleEdit}
                    />
                </span>
                <div>
                    <label htmlFor='username'>Username</label>
                    <div className='edit-box'>
                        <input
                            type='text'
                            name='username'
                            value={userData.username}
                            onChange={handleChange}
                            disabled={editOff}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <div className='edit-box'>
                        <input
                            type='email'
                            name='email'
                            value={userData.email}
                            onChange={handleChange}
                            disabled={editOff}
                        />
                    </div>
                </div>
                <hr />
                <div className='pass-edit'>
                    {!passEdit.state && <div className='disable-pass-edit'>
                        <FaRegEdit onClick={togglePassEdit} />
                    </div>}
                    <label htmlFor='new-password'>New Password</label>
                    <input
                        type='password'
                        name='newPassword'
                        placeholder='Enter New Password'
                        onChange={handlePassEdit}
                        value={passEdit.newPassword}
                        id='new-password'
                    />
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm New Password'
                        onChange={handlePassEdit}
                        value={passEdit.confirmPassword}
                        id='confirm-password'
                    />
                </div>
            </div>
            <button onClick={submitUpdates}>Save Changes</button>
        </section>
    );
};

export default Profile;