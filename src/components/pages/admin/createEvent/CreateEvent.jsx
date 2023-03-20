
import React, { useState } from 'react'
import { UserAuth } from '../../../../context/UserAuth'
import TextEditor from '../../../elements/textEditor/TextEditor'

const CreateEvent = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState(Date)
    const [description, setDescription] = useState('')
    const { user } = UserAuth()

    //console.log(file);

    const createNewTask = async (e) => {
        e.preventDefault()

    }

    return (
        <div className='CreateEvent w-full h-full'>
            <div className='CreateEvent_Body h-full w-full flex flex-col gap-8 mx-auto max-w-7xl px-0 md:px-10'>
                <form className='flex flex-col w-full gap-16' onSubmit={createNewTask}>

                    <div className='w-full'>
                        <label className="block w-full text-[12px] font-medium text-gray-900">Başlik</label>
                        <input type="text" className='bg-transparent w-full border-none outline-0 text-[32px] focus:ring-0 font-bold text-gray-700 rounded-lg resize-none' required placeholder='Untitled' onChange={(e) => setTitle(e.target.value)} />
                    </div>


                    <div className='TextArea'>
                        <label className="block w-full text-[12px] font-medium text-gray-900">Açıklama</label>
                        <TextEditor
                            content={description}
                            setContent={setDescription}
                            readonly={false}
                            toolBarIsVisble={true}
                            height={'50vh'}
                        />
                    </div>

                    <div className='flex flex-wrap gap-5'>
                        <input type="submit" className="bg-blue-600 text-white rounded-lg py-3 px-12" value={'Oluştur'} />
                        <input type="button" className="cursor-pointer underline border text-blue-600 rounded-lg py-3 px-12" value={'Ön İzleme'} />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CreateEvent