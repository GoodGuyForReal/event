import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../../context/UserAuth";
import { auth } from "../../../../Firebase";
import NavItems from "../publicNavbar/components/NavItems";



const PriviteNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { LogOut } = UserAuth();
    const navigate = useNavigate();

    const HandleSignOut = async () => {
        try {
            LogOut(auth)
            navigate('/')
        } catch (error) {

        }
    };


    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="flex items-center justify-between flex-wrap bg-transparent px-6 py-3 border-b">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <Link
                    to='/'
                >
                    <div className="relative bg-gradient-to-tr from-blue-700 to-blue-900 w-[7vh] h-[7vh] rounded-lg shadow-lg">
                        <div className="absolute h-full w-full top-[25%] left-[25%]">
                            {/* <SiteLogoIcon height={"25"} /> */}
                        </div>
                    </div>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex duration-500 items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:bg-slate-800"
                    onClick={toggleMenu}
                >
                    <svg
                        className="fill-current"
                        width='20'
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                        />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'
                    }`}
            >
                <div className="text-sm lg:flex-grow">
                    <NavItems />
                </div>
                <div className='flex gap-5'>
                    <button
                        onClick={HandleSignOut}
                        className="md:text-[14px] font-medium inline-block text-sm px-8 py-3 leading-none border rounded-lg text-white bg-blue-600 mt-4 lg:mt-0 shadow-lg"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default PriviteNav