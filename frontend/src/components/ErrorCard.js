import { MdCancel } from 'react-icons/md';
import {v4 as uuid} from 'uuid';
import { useContext } from 'react';

import { ProjectContext } from '../contexts/projectContext';

const ErrorCard = () => {
    const { projectData, projectDispatcher } = useContext(ProjectContext);

    return (
        <ul className='error-list'>
            <div className='cancel-btn'
                onClick={() => {
                    projectDispatcher({
                        type: 'REMOVE_ERROR'
                    });
                }}
            >
                <MdCancel />
            </div>
            {Object.values(projectData.error).filter(value => value)
                .map(value => <li key={uuid()}>{value}</li>)
            }
        </ul>
    );
};

export default ErrorCard;