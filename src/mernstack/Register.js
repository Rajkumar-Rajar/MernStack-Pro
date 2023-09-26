import React, { useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import api_link from './link';



function Register() {

    const Navigate = useNavigate()


    const validate = values => {
        const errors = {};

        if (!values.first_name) {
            errors.first_name = 'f-name is required';
        }

        if (!values.last_name) {
            errors.last_name = 'l-name is required';
        }
        if (!values.email) {
            errors.email = 'email is required';
        }

        if (!values.phone_number) {
            errors.phone_number = 'phone number is required';
        }
        if (!values.password) {
            errors.password = 'password is required';
        }

        if (!values.date_of_birth) {
            errors.date_of_birth = 'date of birth is required';
        }
        if (!values.gender) {
            errors.gender = 'gender is required';
        }

        return errors;
    };


    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            "email": "",
            "phone_number": "",
            "password": "",
            "date_of_birth": "",
            "gender": ""
        },

        validate,
        onSubmit: values => {

            // alert("hi")
            // alert(values.first_name+values.last_name+values.email+values.phone_number+values.password+values.date_of_birth+values.gender)

            try {

                const userData = {
                    "first_name": values.first_name,
                    "last_name": values.last_name,
                    "email": values.email,
                    "phone_number": values.phone_number,
                    "password": values.password,
                    "date_of_birth": values.date_of_birth,
                    "gender": values.gender

                };

                axios.post(`${api_link}/post_user_data`, userData)
                    .then(response => {
                        console.log(response.data);

                        toast.success(response.data, {
                            autoClose: 1000,

                            onClose: () =>
                                Navigate("/User_table"),
                            // window.location.reload()

                        });

                    })
                    .catch(error => {
                        console.log(error);

                        // toast.error(error, {
                        //     autoClose: 1000,
                        // });
                    });

            }
            catch (error) {

                console.log("user data not fetched to api " + error);

            }
        },
    });




    return (


        <div className="container">


            <div className="d-flex justify-content-end" style={{ marginTop: "50px" }}>

                <Link to="/User_table">
                    <button className="btn btn-outline-success px-5  text-uppercase" >
                        back
                    </button>
                </Link>


            </div>

            <div className="d-flex justify-content-center align-self-center" style={{ marginTop: "20px" }}>

                <div className="card col-10 col-sm-7 col-md-5 col-lg-3">

                    <div className="card-body">
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div className="col">
                                <div class="row">
                                    <div class="col">
                                        <label htmlFor="" className='text-uppercase  my-2 '>First name</label>
                                        <input type="text" className="form-control col-3 justify-content-center" placeholder="First name" aria-label="First name"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            name='first_name'
                                        />

                                        {formik.touched.first_name && formik.errors.first_name ? (<div className='text-danger text-end'>{formik.errors.first_name}</div>)
                                            :
                                            <div className='text-light text-end'>--------</div>
                                        }

                                    </div>

                                    <div class="col">
                                        <label htmlFor="" className='text-uppercase  my-2'>Last name</label>
                                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            name='last_name'
                                        />
                                        {formik.touched.last_name && formik.errors.last_name ? (<div className='text-danger text-end'>{formik.errors.last_name}</div>)
                                            :
                                            (<div className='text-light text-end'>-----------</div>)
                                        }

                                    </div>
                                </div>

                                <div class="col">
                                    <label htmlFor="" className='text-uppercase  my-2'>email</label>
                                    <input type="text" class="form-control" placeholder="email" aria-label="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name='email'
                                    />
                                    {formik.touched.email && formik.errors.email ? (<div className='text-danger text-end'>{formik.errors.email}</div>) : <div className='text-light text-end'>-------------</div>}
                                </div>
                                <div class="col">
                                    <label htmlFor="" className='text-uppercase  my-2'>Phone number</label>
                                    <input type="number" class="form-control" placeholder="number" aria-label="number"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name='phone_number'
                                    />
                                    {formik.touched.phone_number && formik.errors.phone_number ? (<div className='text-danger text-end'>{formik.errors.phone_number}</div>) : <div className='text-light text-end'>---------------------</div>}
                                </div>


                                <div class="col">
                                    <label htmlFor="" className='text-uppercase my-2'>password</label>
                                    <input type="text" class="form-control" aria-label="number" placeholder='password'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name='password'
                                    />
                                    {formik.touched.password && formik.errors.password ? (<div className='text-danger text-end'>{formik.errors.password}</div>) : <div className='text-light text-end'>---------------------</div>}
                                </div>

                                <div class="col">
                                    <label htmlFor="" className='text-uppercase  my-2'>gender</label>
                                    <div className='d-flex justify-content-between'>
                                        <div className="">
                                            <input type="radio" value="Male" name="gender"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            /> Male
                                        </div>

                                        <div className="">
                                            <input type="radio" value="Female" name="gender"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            /> Female

                                        </div>

                                        <div className="">
                                            <input type="radio" value="Other" name="gender"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            /> Other
                                        </div>

                                    </div>
                                    {formik.touched.gender && formik.errors.gender ? (<div className='text-danger text-end'>{formik.errors.gender}</div>) : <div className='text-light text-end'>-------------------------</div>}
                                </div>

                                <div class="col">
                                    <label htmlFor="" className='text-uppercase  my-2' >Date of birth</label>
                                    <input type="date" class="form-control" aria-label="number"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name='date_of_birth'
                                    />
                                    {formik.touched.date_of_birth && formik.errors.date_of_birth ? (<div className='text-danger text-end'>{formik.errors.date_of_birth}</div>) : <div className='text-light text-end'>---------------------</div>}
                                </div>


                                <div class="col d-flex justify-content-center mt-3">
                                    <button className='btn btn-outline-success'> submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />

            </div>





        </div>
    )
}

export default Register
