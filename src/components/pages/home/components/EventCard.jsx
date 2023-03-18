import React from 'react'
import { getRandomPastelColor } from '../../../../useCase/ColorGenerator '

const EventCard = ({ item }) => {
    const date = new Date(item.date).toLocaleDateString()
    const color = getRandomPastelColor()

    return (
        <div className='EventCard h-[30vh] w-[30vh] p-4 rounded-md' style={{ backgroundColor: color }}>
            <div className='EventCard_Body h-full w-full flex flex-col justify-between'>

                <div className='CardHeader w-full text-right'>
                    <p className='EventDate text-[14px]'>{item.attendance?.length}</p>
                    <p className='EventDate text-[14px]'>{date}</p>
                </div>

                <div className='CardMain flex flex-col gap-4'>
                    <h3 className='EventTitle text-[20px] font-bold'>{item.eventName}</h3>
                    <button className='py-2 w-full bg-blue-600 text-white text-[14px] rounded-md'>Details</button>
                </div>

            </div>

        </div>
    )
}

export default EventCard