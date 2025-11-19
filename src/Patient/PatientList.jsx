import React, { useEffect, useState } from 'react';
import apiClient from '../Services/api-client';

const PatientList = () => {
    const [patient,setPatient]=useState([])
    const[loading,setLoading]=useState(false)
   

    const fetchdoctor=async()=>{
        setLoading(true)
        try{
            const res = await apiClient.get("/patients/")
            setPatient(res.data)
            console.log(res.data);
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
         fetchdoctor()
    },[])


       if(loading){
        return (
            <div className='flex justify-center items-center py-10 min-h-screen'>
                    <span className="loading loading-spinner loading-xl text-secondary"></span>
                 </div>
        )
    }
    return (
        <div className="overflow-x-auto">
    <table className="table table-xs">
        {/* head */}
        <thead>
        <tr>
            <th>SL.</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Contact</th>
        </tr>
        </thead>
        <tbody className="[&>tr:nth-child(odd)]:bg-blue-100 [&>tr:nth-child(even)]:bg-white">
        
        {patient.map((p,index)=>(
            <tr key={index}>
            <th>{index+1}</th>
            <td className='font-bold text-xl'>{p.patient_name}</td>
            <td>{p.patient_gender?.charAt(0).toUpperCase() + p.patient_gender.slice(1)}</td>
            <td>{p.patient_age}</td>
            <td>{p.patient_contact}</td>
            
            
        </tr>
        ))}
        
        
        </tbody>
    </table>
    </div>
    );
};

export default PatientList;