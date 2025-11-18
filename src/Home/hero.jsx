import React from 'react';
import image from "../assets/hos.jpg"
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
            <div
            className="hero h-[90vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="text-center bg-white/40 backdrop-blur-md p-6 rounded-2xl max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                   Smarter Care Begins Here
                </h1>

                <p className="text-gray-700 mb-6">
                    A complete solution to manage patients, doctors, appointments, and hospital operations.
                </p>

                <Link to="/register">
                    <button className="btn btn-primary">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;