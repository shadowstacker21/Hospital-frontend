import React, { useEffect, useState } from 'react';
import apiClient from '../Services/api-client';

const DoctorList = () => {
    const [doctor,setDoctor]=useState([])
    const[loading,setLoading]=useState(false)
   

    const fetchdoctor=async()=>{
        setLoading(true)
        try{
            const res = await apiClient.get("/doctors")
            setDoctor(res.data)
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
  <table className="table table-xl">
    {/* head */}
    <thead>
      <tr>
        <th>SL.</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Specialization</th>
      </tr>
    </thead>
    <tbody className="[&>tr:nth-child(odd)]:bg-blue-100 [&>tr:nth-child(even)]:bg-white">
     
      {doctor.map((d,index)=>(
        <tr key={index}>
        <th>{index+1}</th>
        <td className='font-bold text-xl'>{d.doctor_name}</td>
        <td>{d.doctor_contact}</td>
        <td>{d.specialization?.toUpperCase()}</td>
      </tr>
      ))}
     
     
    </tbody>
  </table>
</div>
    );
};

export default DoctorList;