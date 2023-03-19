import React from 'react'
import EventCard from './components/EventCard'
import EventHeaderCard from './components/EventHeaderCard'
import { UserOp } from '../../../context/UserOp'

const HomePage = () => {
    const { allEvents } = UserOp()
    const headerEvent = allEvents.slice(0, 1)
    const contentEvent = allEvents.slice(1)

    return (
        <div className='HomePage mt-16'>
            <div className='HomePageBody flex gap-16 flex-col mx-auto max-w-7xl px-5 md:px-10'>

                <div className='Header'>
                    <div className='HeaderBody w-full'>
                        {headerEvent.map((item, id) => (
                            <div key={id}>
                                <EventHeaderCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='Main'>
                    <div className='MainBody flex flex-wrap gap-4'>
                        {contentEvent.map((item, id) => (
                            <div key={id}>
                                <EventCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage