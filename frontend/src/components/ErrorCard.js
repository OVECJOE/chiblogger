import { MdCancel } from 'react-icons/md';
import {v4 as uuid} from 'uuid';
import { useContext, useEffect } from 'react';

import { ProjectContext } from '../contexts/projectContext';

const ErrorCard = () => {
    const { projectData, projectDispatcher } = useContext(ProjectContext);

    useEffect(() => {
        if (projectData.errors.length) {
            setTimeout(() => {
                projectDispatcher({
                    type: 'REMOVE_ERROR'
                });
            }, 8000);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectData.error]);

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
            {projectData.errors.map(value => {
                return (
                    <li key={uuid()}>{value}</li>
                );
            })
            }
        </ul>
    );
};

export default ErrorCard;