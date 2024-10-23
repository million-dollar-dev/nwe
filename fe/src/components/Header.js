import React, {useState} from 'react';
import { SiNotist } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import ResponsiveMenu from "./ResponsiveMenu";

const Header = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <nav>
            <div className='container flex justify-around items-center py-8'>
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <SiNotist className='text-primary'/>
                    <p className='text-primary'>NWE</p>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6'>
                        <li>
                            <a
                                href='#'
                                className='inline-block py-1 px-3 hover:text-primary'
                            >Home</a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='inline-block py-1 px-3 hover:text-primary font-semibold'
                            >Home</a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='inline-block py-1 px-3 hover:text-primary font-semibold'
                            >Home</a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='inline-block py-1 px-3 hover:text-primary font-semibold'
                            >Home</a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <button
                        className='text-2xl hover:bg-primary hover:text-white rounded-full p-2'
                    ><FaSearch/></button>
                    <button
                        className='font-bold hover:bg-primary text-primary hover:text-white rounded-full border-2 border-primary px-6 py-2 ml-2 duration-200 hidden md:block'
                    >Login</button>
                </div>

                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    <IoMenu className='text-4xl'/>
                </div>
            </div>
        </nav>

        <ResponsiveMenu open={open}/>
    </>
  );
};

export default Header;