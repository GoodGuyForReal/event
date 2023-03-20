import React, { useState } from 'react';
import { UserAuth } from '../../../../context/UserAuth';
import TextEditor from '../../../elements/textEditor/TextEditor';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateEvent = () => {
    const { user } = UserAuth();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()

    console.log(startTime);
    console.log(endTime);
    
    const createNewTask = async (e) => {
        e.preventDefault();
        // Add logic to create new event with form data
    };

    return (
        <div className="CreateEvent w-full h-full">
            <div className="CreateEvent_Body h-full w-full flex flex-col gap-8 mx-auto max-w-7xl px-0 md:px-10">
                <form className="flex flex-col w-full gap-10" onSubmit={createNewTask}>

                    <div className="Title w-full">
                        <label className="block w-full text-sm font-medium text-gray-900">Başlık</label>
                        <input
                            type="text"
                            className="bg-transparent w-full border-none outline-0 text-3xl font-bold text-gray-700 rounded-lg resize-none"
                            required
                            placeholder="Untitled"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>


                    <div className='DatePicker flex flex-warp gap-4 items-center'>
                        <div className='StartDate'>
                            <label className="block w-full text-sm font-medium text-gray-900">Başlangıç Tarihi</label>
                            <DatePicker
                                className='border rounded-lg px-3 py-2 mt-1 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                            />
                        </div>
                        <hr className='border-[1px] border-slate-600 w-3 mt-5' />
                        <div className='EndDate'>
                            <label className="block w-full text-sm font-medium text-gray-900">Bitiş Tarihi</label>
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
                            <label className="block w-full text-sm font-medium text-gray-900">Başlangıç Saati</label>
                            <input type="time"
                                className='border rounded-lg px-3 py-2 mt-1 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                                onChange={(time) => setStartTime(time.target.value)}
                            />
                        </div>
                        <hr className='border-[1px] border-slate-600 w-3 mt-5' />
                        <div className='EndTime'>
                            <label className="block w-full text-sm font-medium text-gray-900">Bitiş Saati</label>
                            <input type="time"
                                className='border rounded-lg px-3 py-2 mt-1 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                                onChange={(time) => setEndTime(time.target.value)}
                            />
                        </div>
                    </div>


                    <div className="TextArea">
                        <label className="block w-full text-sm font-medium text-gray-900">Açıklama</label>
                        <TextEditor
                            content={description}
                            setContent={setDescription}
                            readonly={false}
                            toolBarIsVisble={true}
                            height={'50vh'}
                        />
                    </div>


                    <div className="flex flex-wrap gap-5">
                        <input type="submit" className="bg-blue-600 text-white rounded-lg py-3 px-12" value={'Oluştur'} />
                        <input type="button" className="cursor-pointer underline border text-blue-600 rounded-lg py-3 px-12" value={'Ön İzleme'} />
                    </div>


                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
