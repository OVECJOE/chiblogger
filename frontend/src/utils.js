import axios from "axios";

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
        if (err.response.data && err.response.data instanceof Array) {
            errors = err.response.data;
        } else if (err.response.statusText) {
            errors.push(err.response.statusText);
        }
    }
    if (err.message && errors.length === 0)
        errors.push(err.message);

    errDispatcher({
        type: 'SET_ERROR',
        errors: errors
    });
};

export const uploadImage = async (photo, dispatcher, errDispatcher) => {
    const UPLOAD_URL = 'https://api.cloudinary.com/v1_1/ovecjoe/image/upload';
    const data = new FormData();

    data.append('file', photo);
    data.append('upload_preset', 'chiblogger');
    data.append('cloud_name', 'ovecjoe');

    try {
        const imageObj = await axios.post(UPLOAD_URL, data);
        dispatcher({
            type: 'UPDATE_PHOTO',
            photoUrl: imageObj.data.url
        });

        return imageObj.data.url;
    } catch (error) {
        erroneous(error, errDispatcher);
    }


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