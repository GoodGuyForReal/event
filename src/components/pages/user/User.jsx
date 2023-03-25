import React from 'react'
import { UserAuth } from '../../../context/UserAuth'
import { UserOp } from '../../../context/UserOp'
import EventCard from '../home/components/EventCard'
const User = () => {

    const { allEvents } = UserOp()
    const { user } = UserAuth()
    console.log(allEvents);

    const userEvents = allEvents.filter(event => {
        return event.attendance.some(item => item.uid === user.uid)
    })

    console.log(userEvents)
    return (
        <div className='User_Body h-full w-full flex flex-col gap-8 mx-auto max-w-7xl px-0 md:px-10 p-10'>


            <div className='Main'>
                <div className='MainBody flex flex-wrap gap-4'>
                    {userEvents.map((item, id) => (
                        <div key={id}>
                            <EventCard item={item} />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default User