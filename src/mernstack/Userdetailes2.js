/*eslint-disable*/
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
import "../App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api_link from './link';



function Userdetailes2() {


    const [pie_data, set_pie_data] = useState()
    const [line_data, set_line_data] = useState()
   



    useEffect(() => {

        try {
            axios.get(`${api_link}/chart_pie_line_data`)
                .then((Response) =>

                (set_pie_data(Response.data[0]),
                    set_line_data(Response.data[1])
                    // console.log(Response.data, "pie data an dline data")
                )

                );
        }
        catch (error) {
            console.log("data not fetch from backend " + error);
        }


    }, [])

    // ==========================================================================================================================

    const pie = {
        title: {
            text: 'gender'
        },
        series: [{
            type: 'pie',
            data: [
                { name: pie_data ? pie_data[0]._id : null, sliced: true, selected: true, y: pie_data ? pie_data[0].count : null },
                { name: pie_data ? pie_data[1]._id : null, y: pie_data ? pie_data[1].count : null }
            ]
        }]
    };

    // ==========================================================================================================================

    const line = {
        title: {
            text: 'DOB OF EMPLOYEES'
        },
        xAxis: {
            categories: line_data ? line_data.map((item) => item.first_name) : null
        },
        series: [{
            type: 'line',
            name: 'Observation',
            data: line_data ? line_data.map((item) => item.date_of_birth) : null
        }]
    };


    // ==========================================================================================================================



    return (
        <div className='container'>


            <div className="row row-cols-1 row-cols-sm-2 d-flex" style={{marginTop:"15%"}} >
                <div className="col">

                    <HighchartsReact
                        highcharts={Highcharts}
                        options={pie}
                    />
                </div>

                <div className="col">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={line}
                    />
                </div>

            </div>

        </div>
    )
}

export default Userdetailes2
