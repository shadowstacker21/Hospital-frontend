import {CirclePlus, } from 'lucide-react';
import { MdHealthAndSafety } from "react-icons/md";
import { CgProfile } from 'react-icons/cg';
import { IoListCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { GoReport } from 'react-icons/go';
;



const DashboardSidebar = () => {

    const menus = [
        {to:"/dashboard",icon:GoReport,label:"Report"},
        {to:"/dashboard/doctor",icon:IoListCircleOutline,label:"Doctor List"},
        {to:"/dashboard/patient",icon:IoListCircleOutline,label:"Patient List"},
        {to:"/dashboard/appointment",icon:IoListCircleOutline,label:"Appointment List"},
        {to:"/dashboard/doctor",icon:IoListCircleOutline,label:"Treatment List"},
        {to:"/dashboard/add/doctor",icon:CirclePlus,label:"Add Doctor"},
        {to:"/dashboard/add/patient",icon:CirclePlus,label:"Add Patient"},
        {to:"/dashboard/add/doctor",icon:CirclePlus,label:"Booking Appointment"},
        {to:"/dashboard/add/doctor",icon:CirclePlus,label:"Treament Plan"},
        {to:"/dashboard/profile",icon:CgProfile,label:"Profile"},
        {to:"",icon:FiLogOut,label:"Log Out"},
       
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