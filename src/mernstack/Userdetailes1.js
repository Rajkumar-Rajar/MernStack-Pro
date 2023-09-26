import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
import "../App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import api_link from './link';

function Userdetailes1() {



    const [full_data, setfull_data] = useState()
    const [file, setFile] = useState();
    const [index, set_index] = useState(0)

    const [imageUrl, setImageUrl] = useState([]);

    const [name, set_name] = useState();

    const [user_charOR_img, setuser_charOR_img] = useState(true);

    const [model_img, setmodel_img] = useState();



    useEffect(() => {

        try {
            axios.get(`${api_link}/chart_pie_line_data`)
                .then((Response) => {

                    setfull_data(Response.data[2])
                    // console.log(Response.data, "pie data an dline data")
                }

                );
        }
        catch (error) {
            console.log("data not fetch from backend " + error);
        }

    }, [])

    const fetchImage = async (index_id) => {
        const id_obj = await full_data[index_id]._id
        // console.log(id_obj,"nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
        try {
            const response = await axios.get(`${api_link}/get-image-data/${id_obj}`);
            setImageUrl(response.data);

            // console.log(response.data, "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");


        } catch (error) {
            console.error("Error fetching the image!", error);
        }
    };



    // ==========================================================================================================================
    const onUpload = async () => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('id_object', full_data[index]._id);
        formData.append('first_name', full_data[index].first_name);


        try {

            const response = await axios.post(`${api_link}/upload`, formData)

                .then((response) => (
                    console.log(response.data),

                    toast.success("image upload", {
                        autoClose: 1000,
                    })
                ))

        } catch (error) {
            console.error("There was an error uploading the file.", error);
        }
    };

    // ==========================================================================================================================
    const pie = {
        title: {
            text: 'user data'
        },
        series: [{
            type: 'pie',
            data: [
                { name: "doc", y: 1 },
                { name: "pdf", y: 1 },
                { name: "img", y: 1 },

            ]
        }]
    };
    // ==========================================================================================================================


    return (
        <div className='container'>


            <div className="text-center">
                <div class="dropdown ">
                    <button class="btn btn-outline-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        SELECT NAME
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {
                            full_data && full_data.map((item, index) =>
                                <li>
                                    <a class="dropdown-item" href="#" onClick={() => { set_index(index); fetchImage(index); set_name(item.first_name) }}>{item.first_name}</a>
                                </li>
                            )
                        }


                    </ul>
                </div>
            </div>

            {name &&
                <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center" style={{ marginTop: "5%" }} >

                    <div className="d-flex align-items-center">
                        <div className="col" >
                            <img
                                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBwet_i_wWUcYyRuPUIMMZR73sI__EOA27QzAMS-JXiDGOOKeL3l_qDhRGGzYmgdugwU&usqp=CAU'}
                                alt=""
                                style={{ width: "100%" }}
                                className='m-2'
                            />
                        </div>
                        <div class="card-body">
                            <div className="col">
                                <div className="row">
                                    <label htmlFor="" className='col text-uppercase fw-bold'>first name </label>

                                    <div className='col fw-semibold'>{full_data ? full_data[index].first_name : null}</div>

                                </div>

                                <div className="row">
                                    <label htmlFor="" className='col text-uppercase fw-bold'>last name</label>
                                    <div className='col fw-semibold'>{full_data ? full_data[index].last_name : null}</div>
                                </div>

                                <div className="row">
                                    <label htmlFor="" className='col text-uppercase fw-bold'>email</label>
                                    <div className='col fw-semibold'>{full_data ? full_data[index].email : null}</div>
                                </div>

                                <div className="row">
                                    <label htmlFor="" className='col text-uppercase fw-bold'>phone number</label>
                                    <div className='col fw-semibold'>{full_data ? full_data[index].phone_number : null}</div>
                                </div>

                                <div className="row">
                                    <label htmlFor="" className='col text-uppercase fw-bold'>password</label>
                                    <div className='col fw-semibold'>{full_data ? full_data[index].password : null}</div>
                                </div>

                                <div className="row">
                                    <label htmlFor="" className='col text-uppercase fw-bold'>gender</label>
                                    <div className='col fw-semibold'>{full_data ? full_data[index].gender : null}</div>
                                </div>

                                <div className="row">
                                    <label htmlFor="" className='col text-uppercase fw-bold'>dob</label>
                                    <div className='col fw-semibold'>{full_data ? full_data[index].date_of_birth : null}</div>
                                </div>

                            </div>
                        </div>
                    </div>






                    <div class="card">

                        <div class="card-body m-5">
                            <div className="">
                                <input type="file" name="" id="" onChange={(e) => { setFile(e.target.files[0]) }} />
                                <button className='btn btn-outline-info' onClick={() => { onUpload() }}>submit</button>
                            </div>


                            <hr />

                            <div className="">
                                <button className='btn btn-outline-info float-end' onClick={() => { setuser_charOR_img(!user_charOR_img) }}>c</button>
                                {!user_charOR_img &&
                                    <div className='d-flex justify-content-center align-items-center' >
                                        {
                                            imageUrl[0] ?

                                                imageUrl.map((item, index) =>
                                                    <div className="d-flex align-items-center" style={{ height: "400px" }}>

                                                        <div className="card border border-info ms-2">
                                                            <img src={item.img} alt="Uploaded or Retrieved" onClick={() => { setmodel_img(item.img) }} data-bs-toggle="modal" data-bs-target="#staticBackd" style={{ height: "50px", width: "60px" }} />
                                                        </div>

                                                    </div>
                                                )

                                                : <h1 className='d-flex align-items-center' style={{ height: "400px" }}>
                                                    upload files...
                                                </h1>
                                        }
                                    </div>
                                }

                                {user_charOR_img &&
                                    <div className="" >

                                        <div className="col"  >
                                            <HighchartsReact
                                                highcharts={Highcharts}
                                                options={pie}
                                            />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>


                </div>
            }




            {/* ====================================================================================================================== */}


            <div class="modal fade" id="staticBackd" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-uppercase" id="exampleModalLabel">image selected</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <img src={model_img ? model_img : null} alt="Uploaded or Retrieved" data-bs-toggle="modal" data-bs-target="#staticBackd" style={{ height: "250px", width: "260px" }} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>





            {/* ====================================================================================================================== */}



        </div>
    )
}

export default Userdetailes1
