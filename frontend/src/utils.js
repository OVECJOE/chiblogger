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
    let errors = [];

    if (err && err.response) {
        if (err.response.data) {
            errors = err.response.data;
        } else if (err.response.statusText) {
            errors.push(err.response.statusText);
        }
    }
    if (err.message && !errors.length)
        errors.push(err.message);

    errDispatcher({
        type: 'SET_ERROR',
        errors: errors
    });
};

export const uploadImage = async (photo, dispatcher) => {
    const data = new FormData();

    data.append('file', photo);
    data.append('upload_preset', 'chiblogger');
    data.append('cloud_name', 'chiblogger');

    axios.post(UPLOAD_URL, data).then(res => {
        dispatcher({
            type: 'UPDATE_PHOTO',
            photoUrl: res.data.url
        });
    }).catch(err => {
        erroneous(err, dispatcher);
    });
};

export const computeDate = (dateString) => {
    const dateCreated = new Date(dateString);
    const presentDate = new Date();

    let result = presentDate.getFullYear() - dateCreated.getFullYear();

    if (!result) {
        result = presentDate.getMonth() - dateCreated.getMonth();
        if (!result) {
            result = presentDate.getDay() - dateCreated.getDay();
            if (!result) {
                result = presentDate.getHours() - dateCreated.getHours();
                if (!result) {
                    result = presentDate.getMinutes() - dateCreated.getMinutes();
                    if (!result) {
                        result = presentDate.getSeconds() - dateCreated.getSeconds();
                        return `${result} seconds ago`;
                    }
                    return `${result} minutes ago`;
                }
                return `${result} hours ago`;
            }
            return `${result} days ago`;
        }
        return `${result} months ago`;
    }
    return `${result} years ago`;
};