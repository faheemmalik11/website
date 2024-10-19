'use client'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import React from 'react'
import axios from "axios";

type T_loginInputs = {
  email: string
  password: string
}

const Login = () => {


  const schema = yup.object().shape({
    email: yup.string().required().email("Enter Valid Email"),
    password: yup.string().required()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T_loginInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async  (data: T_loginInputs) => {
    const loginResponse = await axios.post('/api/login',data);
    console.log(loginResponse);
  }

  return (
    <div className='mx-96'>
      <div>
        <h1>Sign-In</h1>

        <div className="text-white bg-gray-400 h-96">

        {/* "handleSubmit" will validate your T_loginInputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input placeholder="Enter email" {...register("email")} className="block mb-3 text-black rounded-md h-8 w-60"/>
          {errors.email && <span>{errors.email?.message}</span>}

          {/* include validation with required or other standard HTML validation rules */}
          <input placeholder="Enter password" {...register("password")}  className="block mb-3 text-black rounded-md h-8 w-60"/>
          {/* errors will return when field validation fails  */}
          {errors.password && <span>{errors.password?.message}</span>}

          <button type="submit" className="mt-3 text-black align-middle rounded-md h-8 text-center w-30 ">Submit</button>
        </form>

        </div>
      </div>

    </div>
  )
}

export default Login