import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UserOp } from '../../../context/UserOp'

const Details = () => {
    const { state: id } = useLocation()
    const { setDocRefId, projectData } = UserOp()
    console.log(id);
    useEffect(() => {
        setDocRefId(id)
    }, [id, setDocRefId])

    const date = projectData?.date ? new Date(projectData.date).toLocaleDateString() : '';

    return (
        <div className='Details h-[50vh] w-full p-10'>
            {projectData ? <div className='Details_Body h-full w-full flex flex-col gap-8 mx-auto max-w-7xl px-0 md:px-10'>

                <div>
                    <img src="" alt="" />
                </div>

                <h3 className='EventTitle text-[58px] font-bold'>{projectData.eventName}</h3>

                <div className='Details_BodyHeader w-full flex flex-col gap-5'>
                    <p className='EventDate text-[18px]'>Katılan Kişi Sayısı: {projectData.attendance?.length}</p>
                    <p className='EventDate text-[18px]'>Tarih: {date}</p>
                    <p className='EventDate text-[18px]'>Saat: 12:00 PM - 2:00 PM</p>
                </div>

                <div className='EventDescription flex flex-col gap-4'>
                    <h3 className='text-[24px] font-bold'>Açıklama</h3>
                    <p className='EventDescriptionBody text-[18px] leading-[160%] max-w-6xl'>{projectData.description}</p>
                </div>

                <div className='flex gap-5 flex-wrap'>
                    <button className='py-3 px-16 bg-blue-600 text-white text-[14px] rounded-md'>Katıl</button>
                    <button className='py-3 px-16 border text-blue-600 hover:underline text-[14px] font-medium rounded-md'>Web sitesine Git</button>
                </div>

            </div> : <p>Yukleniyor...</p>}

        </div>
    )
}

export default Details