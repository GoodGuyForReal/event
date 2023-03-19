import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getRandomPastelColor } from '../../../../useCase/ColorGenerator '

const EventHeaderCard = ({ item }) => {
    const navigate = useNavigate()
    const date = new Date(item.date).toLocaleDateString()
    const color = getRandomPastelColor()

    const handleDetails = () => {
        navigate(`/details/${item.id}`, { state: item.id })
    }


    return (
        <div className='EventHeaderCard min-h-[50vh] h-full w-full p-10 rounded-md' style={{ backgroundColor: color }}>
            <div className='EventHeaderCard_Body h-full w-full flex flex-col justify-between'>

                <div className='CardHeader w-full text-right'>
                    <p className='EventDate text-[14px]'>{item.attendance?.length}</p>
                    <p className='EventDate text-[14px]'>{date}</p>
                </div>

                <div className='CardMain flex flex-col md:flex-row items-end justify-between gap-4'>
                    <div className='CardMainContent flex flex-col gap-5'>
                        <h3 className='EventTitle text-[48px] font-bold'>{item.eventName}</h3>
                        <p className='EventTitle text-[18px] leading-[150%] max-w-3xl'>{item.description}</p>
                    </div>
                    <div>
                        <button onClick={handleDetails} className='py-3 px-16 w-full bg-blue-600 text-white text-[14px] rounded-md'>Details</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default EventHeaderCard