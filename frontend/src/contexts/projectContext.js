import { createContext, useEffect, useReducer } from "react";

import projectReducer from '../reducers/projectReducer';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    const [projectData, projectDispatcher] = useReducer(projectReducer,
        JSON.parse(localStorage.getItem('projectData')) || {
            msgPopup: false,
            errors: [],
            autosave: true,
            view: false,
            data: null,
            message: ''
        }
    );

    useEffect(() => {
        localStorage.setItem(
            'projectData',
            JSON.stringify(projectData)
        );
    }, [projectData]);

    return (
        <ProjectContext.Provider value={{projectData, projectDispatcher}}>
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectContextProvider;