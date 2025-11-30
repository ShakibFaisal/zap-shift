import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser,updateUserProfile } = UseAuth();
  const  handleRegist = (data) => {
    const profile_img=data.photo[0]
    const formData= new FormData()
    formData.append('image',profile_img)
    const image_Api=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
    registerUser(data.email, data.password)
      .then(() => {
         axios.post(image_Api,formData).then((res)=> {const userProfile={
          displayName: data.name,
          photoURL: res.data.data.url
         }
         updateUserProfile(userProfile).then(()=>toast.success("Registration Successfully")).catch((err)=>{
          toast.error(err.message)
         })
        })
         
        navigate(location?.state || "/");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="my-10 card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(handleRegist)}>
        
        <fieldset className="fieldset ">
          <h3 className="text-center text-2xl">Register</h3>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Image"
            
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">Image is required.</p>
          )}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required.</p>
          )}

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500" role="alert">
              Email is required
            </p>
          )}
           <label className="label">Password</label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              className="input w-full"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/~`]).+$/,
              })}
              placeholder="Password"
            />
             {
                        errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>
                            Password must be 6 characters or longer
                        </p>
                    }
                    {
                        errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
                    }

            {/* Show/Hide Password Button */}
            <button
              type="button"
              className="absolute right-3 top-3 text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="btn btn-neutral mt-4">Register</button>
          <p>Already have an account <Link
                    state={location.state}
                    className='text-blue-400 underline'
                    to="/login">Login</Link></p>
        </fieldset>
         
      </form>
    </div>
  );
};

export default Registration;
