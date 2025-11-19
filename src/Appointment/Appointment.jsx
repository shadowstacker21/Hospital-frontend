import React, { useEffect, useState } from 'react';
import apiClient from '../Services/api-client';

const Appointment = () => {
       const [appointment,setAppointment]=useState([])
    const[loading,setLoading]=useState(false)
   

    const fetchdoctor=async()=>{
        setLoading(true)
        try{
            const res = await apiClient.get("/appointments/")
            setAppointment(res.data)
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
        <th>Patient Id</th>
        <th>Doctor Id</th>
        <th>Status</th>
        <th>Appointment Date</th>
      </tr>
    </thead>
    <tbody className="[&>tr:nth-child(odd)]:bg-blue-100 [&>tr:nth-child(even)]:bg-white">
     
      {appointment.map((a,index)=>(
        <tr key={index}>
        <td>{index+1}</td>
        <td>{a.patient}</td>
        <td>{a.doctor}</td>
        <td>{a.appointment_status?.charAt(0).toUpperCase() + a.appointment_status.slice(1)}</td>
        <td className=''>{new Date(a.appointment_date).toLocaleDateString("en-US", {
                weekday: "long",    
                year: "numeric",    
                month: "long",      
                day: "numeric"      
            })}</td>
      </tr>
      ))}
     
     
    </tbody>
  </table>
</div>
    );
};

export default Appointment;