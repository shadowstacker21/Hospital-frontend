import {  BookOpenCheck,CirclePlus,LayoutDashboardIcon } from 'lucide-react';
import { MdHealthAndSafety } from "react-icons/md";
import { CgProfile } from 'react-icons/cg';
import { IoListCircleOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';
;



const DashboardSidebar = () => {
    // const {user}=useAuthContext();
    const menus = [
        {to:"/dashboard",icon:LayoutDashboardIcon,label:"Report"},
        {to:"/dashboard/course",icon:BookOpenCheck,label:"Course"},
        {to:"/dashboard/doctor",icon:IoListCircleOutline,label:"Doctor List"},
        {to:"/dashboard/add/doctor",icon:CirclePlus,label:"Add Doctor"},
        {to:"/dashboard/profile",icon:CgProfile,label:"Profile"},
       
    ]
    

  
    return (
        <div className='drawer-side z-10'>
            <label htmlFor="drawer-toggle"
            aria-label='close-sidebar'
            className='drawer-overlay'>

            </label>
            <aside className='menu bg-base-200 w-g4 min-h-full p-4 text-base-content'>
                <div className='flex items-center gap-2 mb-6 px-2'>
                    <MdHealthAndSafety className='w-6 h-6'/>
                    <h1 className='text-xl font-bold'>Hospital Management <br /> System</h1>
                </div>
                <ul className='menu menu-md gap-2'>
                    {menus.map((item,index)=>(
                        <li key={index}>
                            <Link to={item.to} className='flex items-center'>
                            <item.icon className='h-6 w-6' />
                            <span>{item.label}</span>
                            </Link>

                        </li>
                    ))}

                </ul>
                 <div className="mt-auto pt-6 text-xs text-base-content/70">
            @ 2025 Online School Admin

            </div>

            </aside>
            
        </div>
    );
};

export default DashboardSidebar;