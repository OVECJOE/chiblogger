import { FaRegEdit } from 'react-icons/fa';

import './styles/Profile.css';

const Profile = () => {
    return (
        <section className='profile-section'>
            <div className='profile-pic'>
                <img src="data:image/jpeg;base64,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" alt="" />
                <FaRegEdit />
            </div>
            <div className='profile-info'>
                <div>
                    <label htmlFor='username'>Username</label>
                    <div className='edit-box'>
                        <input
                            type='text'
                            name='username'
                            placeholder='ovecjoe'
                            // value=''
                            disabled
                        />
                        <FaRegEdit />
                    </div>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <div className='edit-box'>
                        <input
                            type='email'
                            name='email'
                            placeholder='ovecjoe123@gmail.com'
                            // value=''
                            disabled
                        />
                        <FaRegEdit />
                    </div>
                </div>
                <hr />
                <div>
                    <label htmlFor='old-password'>Old Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='ovecjoe123'
                        // value=''
                        required
                        id='old-password'
                    />
                    <label htmlFor='new-password'>New Password</label>
                    <input
                        type='password'
                        name='newPassword'
                        placeholder='Enter New Password'
                        // value=''
                        required
                        id='new-password'
                    />
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input
                        type='password'
                        name='username'
                        placeholder='Confirm New Password'
                        // value=''
                        required
                        id='confirm-password'
                    />
                </div>
            </div>
            <button>Save Changes</button>
        </section>
    );
};

export default Profile;