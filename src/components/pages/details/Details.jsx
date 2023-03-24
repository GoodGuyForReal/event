import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UserAuth } from '../../../context/UserAuth'
import { UserOp } from '../../../context/UserOp'
import { JoinEvent } from '../../../repository/JoinEvent'
import { LeaveEvent } from '../../../repository/LeaveEvent'

const Details = () => {
    const { state: id } = useLocation()
    const { setDocRefId, projectData } = UserOp()
    const { user } = UserAuth()
    console.log(id);
    useEffect(() => {
        setDocRefId(id)
    }, [id, setDocRefId])

    const isUserJoined = projectData?.attendance.find(userId => userId.uid === user.uid)
    console.log(isUserJoined);

    const handleJoinEvent = () => {
        if (user) {
            JoinEvent(user, id)
        } else {
            alert('katilmak için lütfen girişi yapın')
        }
    }

    const handleLeaveEvent = () => {
        if (user) {
            LeaveEvent(user, id)
        } else {
            alert('katilmak için lütfen girişi yapın')
        }
    }



    const startDate = new Date(projectData?.startDate?.seconds * 1000).toDateString();
    const endDate = new Date(projectData?.endDate?.seconds * 1000).toDateString();
    console.log(startDate);
    console.log(projectData);

    return (
        <div className='Details w-full p-10'>
            {projectData ? <div className='Details_Body h-full w-full flex flex-col gap-8 mx-auto max-w-7xl px-0 md:px-10'>

                <div>
                    {projectData.imgURL && <img src={projectData.imgURL} alt="" className='object-cover h-[60vh] w-full bg-slate-300' />}
                </div>

                <h3 className='EventTitle text-[58px] font-bold'>{projectData.title}</h3>

                <div className='Details_BodyHeader w-full flex flex-col gap-5'>
                    <p className='EventDate text-[18px]'>Attendance: {projectData.attendance?.length}</p>
                    <p className='EventDate text-[18px]'>Date: {startDate} - {endDate}</p>
                    <p className='EventDate text-[18px]'>Time: {projectData.startTime} - {projectData.endTime}</p>
                </div>

                <div className='EventDescription flex flex-col gap-4'>
                    <h3 className='text-[24px] font-bold'>description</h3>
                    <p className='EventDescriptionBody text-[18px] leading-[160%] max-w-6xl'>{projectData.description}</p>
                </div>

                <div className='flex gap-5 flex-wrap'>
                    {!isUserJoined ?
                        <button onClick={handleJoinEvent} className='py-3 px-16 bg-blue-600 text-white text-[14px] rounded-md'>Join</button>
                        :
                        <button onClick={handleLeaveEvent} className='py-3 px-16 bg-gray-600 text-white text-[14px] rounded-md'>Undo</button>}

                    <button className='py-3 px-16 border text-blue-600 hover:underline text-[14px] font-medium rounded-md'>Go to the website</button>
                </div>

            </div> : <p>Loading...</p>}

        </div>
    )
}

export default Details