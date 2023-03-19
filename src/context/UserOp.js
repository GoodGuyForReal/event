import { createContext, useContext, useEffect, useState } from "react";
import { eventData } from "../mock/MockEvent";
import { db } from "../Firebase";
import { getAllEvents } from "../repository/GetAllEvents";


const ProjectContext = createContext();

export function ProjectContextProvider({ children }) {
    const [allEvents, setAllEvents] = useState([])
    const [docRefId, setDocRefId] = useState('')
    const [projectData, setProjectData] = useState()

    useEffect(() => {
        getAllEvents(db, setAllEvents)
    }, [])

    console.log(allEvents);


    useEffect(() => {
        const pickedEvent = eventData.find(event => event.id === docRefId)
        console.log(pickedEvent);
        if (pickedEvent) {
            setProjectData(pickedEvent);
        }
    }, [docRefId])

    console.log(projectData);

    return (
        <ProjectContext.Provider value={{ allEvents, projectData, docRefId, setDocRefId }}>
            {children}
        </ProjectContext.Provider>
    )
}

export function UserOp() {
    return useContext(ProjectContext);
}