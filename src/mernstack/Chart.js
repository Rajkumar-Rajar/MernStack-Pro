import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
import "../App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userdetailes2 from './Userdetailes2';
import Userdetailes1 from './Userdetailes1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import api_link from './link';


function Chart() {


    const [data_show, set_data_show] = useState("chart")

    const [lock, set_lock] = useState(true)

    const [theame1, set_theame1] = useState({
        indication: true,
        color: "white"
    })




    // ==========================================================================================================================


    const handle_locked = (e) => {


        if (e == "chart" && lock) {
            set_data_show("chart")
        }
        else if (e == "user_data" && lock) {
            set_data_show('user_data')
        }
        else {
            toast.error("off the lock", {
                autoClose: 1000,
            });

        }

    }


    const theame = () => {
        set_theame1(prevState => ({ ...prevState, indication: !prevState.indication, color: prevState.color == "black" ? prevState.color = "white" : prevState.color = "black" }));
    }

    return (
        <div className='container' style={{ backgroundColor: theame1.color }}>


            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div class="container-fluid">
                    <div class="col dropdown">
                        <button class="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            CHOOSE THEM
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#" onClick={() => { handle_locked("chart") }}>CHART</a></li>

                            <li><a class="dropdown-item" href="#" onClick={() => { handle_locked("user_data") }}>USER PROFILE</a></li>
                        </ul>
                    </div>


                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <div className="d-flex align-items-center">

                                <Switch
                                    unCheckedChildren='unlock'
                                    checkedChildren="lock"
                                    defaultChecked

                                    onClick={() => { set_lock(!lock) }}
                                />

                            </div>

                            <div className="ms-5 d-flex align-items-center">

                                {theame1.indication ?
                                    <FontAwesomeIcon className='fs-3' onClick={() => { theame() }} icon={icon.faSun} /> :
                                    <FontAwesomeIcon onClick={() => { theame() }} className='fs-3' icon={icon.faMoon} />}

                            </div>

                           
                                <Link to="/User_table">
                                    <button className="btn btn-outline-warning px-5 ms-5 text-uppercase">
                                        back
                                    </button>
                                </Link>
                          

                        </div>
                    </div>
                </div>
            </nav>




        



            {/* =======================================================chart---data=================================== */}


            <div className="mt-5">
                {
                    data_show == "chart" ? <Userdetailes2 /> : <Userdetailes1 />
                }
            </div>



            <ToastContainer />

        </div>
    )
}

export default Chart
