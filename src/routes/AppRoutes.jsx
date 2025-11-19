import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MainDasboard from '../Dashboard/MainDasboard';
import Dashboard from '../pages/Dashboard';
import Doctor from '../pages/Doctor';
import CreateDoctor from '../pages/CreateDoctor';
import Patient from '../pages/Patient';
import AddPatient from '../pages/AddPatient';
import AppointmentList from '../pages/AppointmentList';

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
            <Route path='patient' element={<Patient/>} />
            <Route path='add/patient' element={<AddPatient/>}/>
            <Route path='appointment' element={<AppointmentList/>}/>

            </Route>
        </Routes>
    );
};

export default AppRoutes;