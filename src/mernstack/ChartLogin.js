import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api_link from './link';


function ChartLogin() {

    const [data, setdata] = useState([])
    const [mes, setmes] = useState(false)
   
    const Navigate = useNavigate()



    useEffect(() => {

        try {
            axios.get(`${api_link}/login_details`)
                .then((response) => {
                    console.log("data is arraived", response.data)


                    setdata(response.data)

                    const uname = response.data.map((item) =>
                        item.first_name
                    )
                    const pass = response.data.map((item) =>
                        item.last_name
                    )

                    // console.log();
                })

        }
        catch (error) {
            console.log("api did not fetch error" + error);
        }



    }, [])



    const validate = values => {
        const errors = {};

        if (!values.username) {
            errors.username = 'Name is required';
        }

        if (!values.password) {
            errors.password = 'password is required';
        }


        return errors;
    };


    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validate,
        onSubmit: async (values) => {

            let user_id1

            data.filter((item, index) => {
                if (item.first_name == values.username) {
                    user_id1 = index
                }
            })

            if (values.username == data[user_id1].first_name && values.password == data[user_id1].password) {
                setmes(false)
                Navigate("/User_table")
            }

            else {
                setmes(true)
                toast.error("enter correct username and password", {
                    autoClose: 1000,
                })
            }

        },
    });



    return (

        <div className='d-flex justify-content-center' style={{ marginTop: "150px" }}>
            <div class="col-lg-3 col-sm-7 col-md-5">
                <div class="card">
                    <div class="card-body">

                        <form onSubmit={formik.handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label text-uppercase">user name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="email / first name"
                                    name="username"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>

                            {formik.touched.username && formik.errors.username ? (<div className='text-danger text-end'>{formik.errors.username}</div>) : null}

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label text-uppercase">pass word</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="password "
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>

                            {formik.touched.password && formik.errors.password ? (<div className='text-danger text-end'>{formik.errors.password}</div>) : null}

                            {mes && !formik.errors.password && !formik.errors.username ? (<div className='text-danger text-center'>enter correct passwor && username</div>) : null}

                            <div class="mb-3 d-flex justify-content-center mt-4">


                                <button className='btn btn-success rounded-0 text-uppercase'>submit</button>
                            </div>

                        </form>
                        <p className='fs-6 text-center'>you don't have account
                            <span className='px-2'>
                                <Link to="/Register">Register</Link>
                            </span>
                            here</p>

                    </div>
                </div>
            </div>


            <ToastContainer />
        </div>
    )
}

export default ChartLogin
