import React, { useState } from 'react';
import { UserAuth } from '../../../../context/UserAuth';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { newEventHandler } from '../../../../repository/CreateEvent';

const CreateEvent = () => {
    const { user } = UserAuth();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [imgURL, setimgURL] = useState('')

    console.log(startTime);
    console.log(endTime);
    console.log(startDate);
    console.log(endTime);

    const eventObj = {
        title: title,
        description: description,
        startDate: startDate,
        imgURL: imgURL,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime
    }

    const createNewTask = (e) => {
        e.preventDefault();
        newEventHandler(user, eventObj)
        alert('Event published')
    };

    return (
        <div className="CreateEvent w-full h-full py-10">
            <div className="CreateEvent_Body h-full w-full flex flex-col gap-8 mx-auto max-w-7xl px-0 md:px-10">
                <h1 className='EventTitle text-[24px] font-bold'>Create Event</h1>
                <form className="flex flex-col w-full gap-10" onSubmit={createNewTask}>

                    <div className="Title w-full">
                        <label className="block w-full text-sm font-medium text-gray-900">Title</label>
                        <input
                            type="text"
                            className="bg-transparent w-full border-none outline-0 text-[48px] font-bold text-black rounded-lg resize-none"
                            required
                            placeholder="Untitled"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className='DatePicker flex flex-warp gap-4 items-center'>
                        <div className='StartDate'>
                            <label className="block w-full text-sm font-medium text-gray-900">Start Date</label>
                            <DatePicker
                                className='border rounded-lg px-3 py-2 mt-1 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                required={true}
                            />
                        </div>
                        <hr className='border-[1px] border-slate-600 w-3 mt-5' />
                        <div className='EndDate'>
                            <label className="block w-full text-sm font-medium text-gray-900">End Date</label>
                            <DatePicker
                                className='border rounded-lg px-3 py-2 mt-1 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={startDate}
                            />
                        </div>
                    </div>

                    <div className='Time flex flex-warp gap-4 items-center'>

                        <div className='StartTime'>
                            <label className="block w-full text-sm font-medium text-gray-900">Start Time</label>
                            <input type="time"
                                className='border rounded-lg px-3 py-2 mt-1 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                                onChange={(time) => setStartTime(time.target.value)}
                                required
                            />
                        </div>

                        <hr className='border-[1px] border-slate-600 w-3 mt-5' />

                        <div className='EndTime'>
                            <label className="block w-full text-sm font-medium text-gray-900">End Time</label>
                            <input type="time"
                                className='border rounded-lg px-3 py-2 mt-1 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                                onChange={(time) => setEndTime(time.target.value)}
                                defaultValue={startTime}
                                required
                            />
                        </div>

                    </div>

                    <div className='ImgInput'>
                        <label className="block w-full text-sm font-medium text-gray-900">Img URL</label>
                        <input type="url"
                            onChange={(e) => setimgURL(e.target.value)}
                            className='border rounded-lg px-3 py-2 mt-1 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                            placeholder='Enter a img URL'
                        />
                    </div>

                    <div className="TextArea">
                        <label className="block w-full text-sm font-medium text-gray-900">Description</label>
                        <textarea onChange={(e) => setDescription(e.target.value)} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Event description..." />
                    </div>

                    <div className="flex flex-wrap gap-5">
                        <input type="submit" className="bg-blue-600 cursor-pointer text-white rounded-lg py-3 px-12" value={'Publish'} />
                        <input type="button" className="cursor-pointer underline border text-blue-600 rounded-lg py-3 px-12" value={'Preview'} />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
