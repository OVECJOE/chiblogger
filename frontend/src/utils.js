import axios from "axios";

const UPLOAD_URL = 'https://api.cloudinary.com/v1_1/chiblogger/image/upload';
export const updateProperty = (event, dispatch) => {
    const { name, value } = event.target;

    dispatch({
        type: 'UPDATE_PROPERTY',
        key: name,
        value
    });
};

export const erroneous = (err, errDispatcher) => {
    let errors;

    if (err && err.response) {
        if (err.response.data) {
            errors = err.response.data.errors || err.response.data.error;
        } else {
            errors = { message: err.message };
        }
        errDispatcher({
            type: 'SET_ERROR',
            error: errors
        });
    }
};

export const uploadImage = (photo, userDispatcher) => {
    const data = new FormData();

    data.append('file', photo);
    data.append('upload_preset', 'chiblogger');
    data.append('cloud_name', 'chiblogger');

    axios.post(UPLOAD_URL, data).then(res => {
        userDispatcher({
            type: 'UPDATE_PHOTO',
            photoUrl: res.data.url
        });
    }).catch(err => {
        erroneous(err, userDispatcher);
    });
};