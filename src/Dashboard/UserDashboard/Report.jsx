import React, { useEffect, useState } from 'react';
import apiClient from '../../Services/api-client';
import ErrorAlert from '../../Alert/ErrorAlert';
import SuccessAlert from '../../Alert/SuccessAlert';

const Report = () => {
    const [report,setReport]=useState([])
    const [loading,setLoading]=useState(false)
    const [err,setErr]=useState("")
    const [msg,setMsg]=useState("")
     

    const fetchReport=async()=>{
        setLoading(true)
        try{
            const res = await apiClient.get("/reports")
            setReport(res.data)
            setMsg("Loading Successfully")
            console.log(res.data);
        }catch(error){
            console.log(error);
            setErr(err)
        }
        finally{
            setLoading(false)
        }

    }

    useEffect(()=>{
        fetchReport()
        
    },[])

        useEffect(()=>{
      if(err||msg){
        const timer=setTimeout(()=>{
          setErr("")||setMsg("")
        },3000)
        return ()=>clearTimeout(timer)
      }
    })

      if(loading){
        return (
            <div className='flex justify-center items-center py-10 min-h-screen'>
                    <span className="loading loading-spinner loading-xl text-secondary"></span>
                 </div>
        )
    }

    return (
 <div className="overflow-x-auto">
      {err&&(
          <ErrorAlert error={err}/>
        )}
        {msg&&(
          <SuccessAlert success={msg}/>
        )}
  <table className="table table-xs">
    <thead >
      <tr>
        <th></th>
        <th>Patient Name</th>
        <th>Patient Age</th>
        <th>Patient Gender</th>
        <th>Doctor Name</th>
        <th>Specialization</th>
        <th>Treatment Cost</th>
        <th>Appointment Date</th>
        <th>Treatment Date</th>
      </tr>
    </thead>
    <tbody className="[&>tr:nth-child(odd)]:bg-blue-100 [&>tr:nth-child(even)]:bg-white">
        {report.map((r,index)=>(

            <tr key={index}>
            <td className='font-bold text-xs'>{index+1}</td>
            <th>{r.patient_name}</th>
            <td>{r.patient_age}</td>
            <td>{r.patient_gender}</td>
            <td className='font-bold'>{r.doctor_name}</td>
            <td className='font-bold'>{r.doctor_specialization}</td>
            <td>{r.treatment_cost}</td>
            <td>
            {new Date(r.appointment_date).toLocaleDateString("en-US", {
                weekday: "long",    
                year: "numeric",    
                month: "long",      
                day: "numeric"      
            })}
        </td>
            <td>{r.treatment_date}</td>
        </tr>

        ))}
    
    </tbody>
   
  </table>
</div>
    );
};

export default Report;