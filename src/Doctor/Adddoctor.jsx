import  { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import apiClient from '../Services/api-client';
import SuccessAlert from '../Alert/SuccessAlert';
// import SuccessAlert from '../components/SuccessAlert';

const Adddoctor = () => {

  const departments = [
    "cardiologist",
    "dermatologist",
    "neurologist",
    "pediatrician",
    "psychiatrist",
    "radiologist",
    "surgeon",
    "general physician"
  ];

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [disable, setDisable] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const addDoctor = async (data) => {
    setDisable(true);
    try {
      await apiClient.post("/doctors/", data);
      console.log(data);
      setMsg("Doctor Added Successfully");

      setTimeout(() => {
        navigate("/dashboard/doctor");
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
          <h1 className='card-title'>Add Doctor</h1>

          <form onSubmit={handleSubmit(addDoctor)} className='space-y-4 mt-4'>

            {/* Doctor Name */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Doctor Name</span>
              </label>

              <input
                type="text"
                placeholder='doctor name'
                className='input input-bordered w-full'
                {...register("doctor_name", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Za-z\s-_]+$/,
                    message: "Only letters are allowed",
                  }
                })}
              />

              {errors.doctor_name && (
                <span className='label-text-alt text-error'>
                  {errors.doctor_name.message}
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
                {...register("doctor_contact", {
                  required: "This field is required"
                })}
              />

              {errors.doctor_contact && (
                <span className='label-text-alt text-error'>
                  {errors.doctor_contact.message}
                </span>
              )}
            </div>

            {/* Specialization */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Specialization</span>
              </label>

              <select
                {...register("specialization", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select a Department</option>
                {departments.map((dep,index) => (
                  <option key={index} value={dep}>{dep?.toUpperCase()}</option>
                ))}
              </select>

              {errors.specialization && (
                <span className='label-text-alt text-error'>
                  Please select a department
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

export default Adddoctor;
