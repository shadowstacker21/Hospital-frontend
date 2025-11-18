import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl">Hospital Management System</a>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
        <li><a>About <i class="fa fa-user-times" aria-hidden="true"></i></a></li>
        <li>
            <a href="#">Help</a>
        </li>
        <li>
            <a href="#">Contact Us</a>
        </li>
        <li>
            <Link to='/login'>Sign in</Link>
        </li>
        <li>
            <a href="#">Sign Up</a>
        </li>
        </ul>
    </div>
    </div>
    );
};

export default Navbar;