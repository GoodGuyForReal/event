import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserAuth } from '../../../../../context/UserAuth';

const NavItems = () => {
    const { user, currentUser } = UserAuth();

    return (
        <div>

            <div className="flex flex-row md:flex-col">
                {currentUser.isAdmin ?

                    <ul className="flex gap-4 items-center  w-full  p-3 text-[#212121]">
                        <li className="hover:text-blue-500 duration-200">
                            <NavLink to={'/'} className="block py-2 pr-4 pl-3 font-medium text-[15px]" aria-current="page">Home</NavLink>
                        </li>
                        <li className="hover:text-blue-500 duration-200">
                            <NavLink to={`/adminpanel/${user.uid}`} className="block py-2 pr-4 pl-3 font-medium text-[15px]">Admin Panel</NavLink>
                        </li>
                        <li className="hover:text-blue-500 duration-200">
                            <NavLink to={`/adminpanel/${user.uid}/createvent`} className="block py-2 pr-4 pl-3 font-medium text-[15px]">Create Event</NavLink>
                        </li>
                    </ul>
                    :
                    <ul className="flex gap-4 items-center  w-full  p-3 text-[#212121]">
                        <li className="hover:text-blue-500 duration-200">
                            <NavLink to={'/'} className="block py-2 pr-4 pl-3 font-medium text-[15px]" aria-current="page">Home</NavLink>
                        </li>
                        <li className="hover:text-blue-500 duration-200">
                            <NavLink to={'/user'} className="block py-2 pr-4 pl-3 font-medium text-[15px]">Account</NavLink>
                        </li>
                    </ul>
                }

            </div>


        </div>
    )
}

export default NavItems