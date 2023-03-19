import React from 'react'
import { UserAuth } from '../../../context/UserAuth';
import PriviteNav from './priviteNavbar/PriviteNavbar';
import PublicNavbar from './publicNavbar/PublicNavbar';


const Navbar = () => {
    const { user } = UserAuth();



    return (
        <div>
            {!user ?
                <PublicNavbar />
                :
                <PriviteNav />
            }
        </div>
    )
}

export default Navbar