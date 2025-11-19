import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import apiClient from '../Services/api-client';
import SuccessAlert from '../Alert/SuccessAlert';

const EnrollPatient = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const [disable, setDisable] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const addPatient = async (data) => {
    setDisable(true);
    try {
      await apiClient.post("/patients/", data);
      console.log(data);
      setMsg("Patient Added Successfully");

      setTimeout(() => {
        navigate("/dashboard/patient");
      }, 3000);
    } catch (err) {
      console.log(err);
    } finally {
      setDisable(false);
    }
  };

  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => setMsg(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [msg]);

    return (
       <div className='flex min-h-screen items-center justify-center px-4 py-12 bg-base-200'>
      <div className='card w-full max-w-md bg-base-100 shadow-xl'>
        <div className='card-body'>
          {/* {msg && <SuccessAlert success={msg} />} */}
          {msg&& <SuccessAlert success={msg}/>}
          <h1 className='card-title'>Add Patient</h1>

          <form onSubmit={handleSubmit(addPatient)} className='space-y-4 mt-4'>

            {/* Doctor Name */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Patient Name</span>
              </label>

              <input
                type="text"
                placeholder='patient name'
                className='input input-bordered w-full'
                {...register("patient_name", {
                  required: "This field is required",
                  
                })}
              />

              {errors.patient_name && (
                <span className='label-text-alt text-error'>
                  {errors.patient_name.message}
                </span>
              )}
            </div>

             <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Age</span>
              </label>

              <input
                type="number"
                placeholder='20'
                className='input input-bordered w-full'
                {...register("patient_age", {
                  required: "This field is required"
                })}
              />

              {errors.patient_age && (
                <span className='label-text-alt text-error'>
                  {errors.patient_age.message}
                </span>
              )}
            </div>

            {/* Contact */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Contact</span>
              </label>

              <input
                type="text"
                placeholder='Contact Number'
                className='input input-bordered w-full'
                {...register("patient_contact", {
                  required: "This field is required"
                })}
              />

              {errors.patient_contact && (
                <span className='label-text-alt text-error'>
                  {errors.patient_contact.message}
                </span>
              )}
            </div>

            {/* Specialization */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Gender</span>
              </label>

              <select
                {...register("patient_gender", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
               
                  
               
              </select>

              {errors.patient_gender && (
                <span className='label-text-alt text-error'>
                  Please select Gender
                </span>
              )}
            </div>

            <button
              disabled={disable}
              type='submit'
              className='btn btn-primary w-full'
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
    );
};

export default EnrollPatient;