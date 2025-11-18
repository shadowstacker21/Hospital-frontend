import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MainDasboard from '../Dashboard/MainDasboard';
import Dashboard from '../pages/Dashboard';
import Doctor from '../pages/Doctor';
import CreateDoctor from '../pages/CreateDoctor';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
              <Route path='/' element={<Home/>}></Route>
              <Route path='login' element={<Login/>}/>
            </Route>

            <Route path='dashboard' element={<MainDasboard/>}>
            <Route index element={<Dashboard/>} />
            <Route path='doctor' element={<Doctor/>} />
            <Route path='add/doctor' element={<CreateDoctor/>}/>

            </Route>
        </Routes>
    );
};

export default AppRoutes;