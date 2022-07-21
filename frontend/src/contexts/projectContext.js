import { createContext, useReducer } from "react";

import projectReducer from '../reducers/projectReducer';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
    const [projectData, projectDispatcher] = useReducer(projectReducer,
        JSON.parse(localStorage.getItem('userData')) || {
            msgPopup: false,
            error: {},
        }
    );

    return (
        <ProjectContext.Provider value={{projectData, projectDispatcher}}>
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectContextProvider;