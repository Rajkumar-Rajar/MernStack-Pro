// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function Sample_get() {


    
//     const [data, setdata] = useState([])

//     const [fname1, setfname1] = useState()
//     const [lname1, setlname1] = useState()
//     const [email1, setemail1] = useState()
//     const [phone_number1, setphone_number1] = useState()

//     const [password1, setpassword1] = useState()
//     const [date_of_birth1, setdate_of_birth1] = useState()
//     const [gender1, setgender1] = useState()

//     const [id, setid] = useState()




//     useEffect(() => {

//         axios.get('http://localhost:3000/get_user_data')
//             .then(response => {
//                 setdata(response.data);
//                 console.log(response.data, "ppppppppppppppppp");
//             })
//             .catch(error => {
//                 console.log(error);

//             });
//     }, [])



// // ==========================================================================================================================

//     const showput = (userId, index) => {


//         // console.log("firstname-----", data[index].first_name, "lastname-----", data[index].last_name_name, "email-------", data[index].email, "number---------", data[index].number);

//         setfname1(data[index].first_name)
//         setlname1(data[index].last_name)
//         setemail1(data[index].email)
//         setphone_number1(data[index].phone_number)

//         setdate_of_birth1(data[index].date_of_birth)
//         setgender1(data[index].gender)
//         setpassword1(data[index].password)

//         setid(userId)

//     }

//     const updateuser = () => {

//         console.log("hi-----------------------------------------------");

//         try {
//             const putuser = {
//                 first_name: fname1,
//                 last_name: lname1,
//                 email: email1,
//                 phone_number: phone_number1,
//                 password:password1,
//                 gender:gender1,
//                 date_of_birth:date_of_birth1

//             };

//             axios.put(`http://localhost:3000/put_user_data/${id}`, putuser)
//                 .then(response => {

//                     console.log(response.data);
//                     toast.success(response.data,{
//                         autoClose: 1000,
//                         onClose: () => window.location.reload()
//                     });
//                 })

//         }
//         catch (error) {
//             toast.error(error,{
//                 autoClose: 1000,
                
//             });
//             console.log("the put method show this err" + error);

//         }

//     }


//     // ==========================================================================================================================

//     const deleteUser = (userId) => {

//         axios.delete(`http://localhost:3000/delete_user_data/${userId}`)
//             .then(response => {

//                 console.log(response.data);
//                 toast.success(response.data,{
//                     autoClose:1000,
//                     onClose: () => window.location.reload()
//                 })
//             })
//             .catch(error => {
//                 console.error(error);
//                 toast.error(error,{
//                     autoClose: 1000,
//                 });
//             });
//     };


//   return (
//     <div className='container'>

//             <div class="float-end mt-1">
//                 <Link to="/Register"><button className='btn btn-outline-info text-uppercase'>Register</button></Link>
//             </div>

//             <table class="table table-hover">
//                 <thead>
//                     <tr className='text-uppercase'>
//                         <th scope="col ">s no</th>
//                         <th scope="col">First name</th>
//                         <th scope="col">Last name</th>
//                         <th scope="col">eamil</th>
//                         <th scope="col">phone number</th>
//                         <th scope="col">password</th>
//                         <th scope="col">date of birth</th>
//                         <th scope="col">gender</th>
//                         <th scope="col">operations</th>

//                     </tr>
//                 </thead>
//                 <tbody>

//                     {data.map((item, index) =>
//                         <tr key={index}>
//                             <td>{index + 1}</td>
//                             <td>{item.first_name}</td>
//                             <td>{item.last_name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone_number}</td>
//                             <td>{item.password}</td>
//                             <td>{item.date_of_birth}</td>
//                             <td>{item.gender}</td>
//                             <td>

//                                 <button type="button" onClick={() => { showput(item._id, index) }} class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button>

//                             </td>
//                             <td>
//                                 <button class="btn btn-outline-primary" onClick={() => { deleteUser(item._id) }}>delete</button>
//                             </td>
//                         </tr>


//                     )}


//                     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                         <div class="modal-dialog modal-dialog-centered">
//                             <div class="modal-content">
//                                 <div class="modal-header">
//                                     <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//                                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                 </div>
//                                 <div class="modal-body">


//                                     <div className="col">
//                                         <div class="row">
//                                             <label htmlFor="" className='col-sm-5 text-uppercase '>first name </label>
//                                             <input type="text" class="col form-control me-4" value={fname1} onChange={(e) => { setfname1(e.target.value) }} placeholder="first name" aria-label="email" />
//                                         </div>

//                                         <div class="row">
//                                             <label htmlFor="" className='col-sm-5 text-uppercase'>last name</label>
//                                             <input type="text" class="col form-control me-4" value={lname1} onChange={(e) => { setlname1(e.target.value) }} placeholder="last name" aria-label="email" />
//                                         </div>
//                                         <div class="row">
//                                             <label htmlFor="" className='col-sm-5 text-uppercase'>email</label>
//                                             <input type="text" class="col form-control me-4" value={email1} onChange={(e) => { setemail1(e.target.value) }} placeholder="email" aria-label="email" />
//                                         </div>
//                                         <div class="row">
//                                             <label htmlFor="" className='col-sm-5 text-uppercase'>phone number</label>
//                                             <input type="text" class="col form-control me-4" value={phone_number1} onChange={(e) => { setphone_number1(e.target.value) }} placeholder="number" aria-label="email" />
//                                         </div>


//                                         <div class="row">
//                                             <label htmlFor="" className='col-sm-5 text-uppercase'>password</label>
//                                             <input type="text" class="col form-control me-4" value={password1} onChange={(e) => { setpassword1(e.target.value) }} placeholder="number" aria-label="email" />
//                                         </div>
//                                         <div class="row">
//                                             <label htmlFor="" className='col-sm-5 text-uppercase'>gender</label>
//                                             <input type="text" class="col form-control me-4" value={gender1} onChange={(e) => { setgender1(e.target.value) }} placeholder="number" aria-label="email" />
//                                         </div>
//                                         <div class="row">
//                                             <label htmlFor="" className='col-sm-5 text-uppercase'>dob</label>
//                                             <input type="text" class="col form-control me-4" value={date_of_birth1} onChange={(e) => {setdate_of_birth1(e.target.value) }} placeholder="number" aria-label="email" />
//                                         </div>


//                                     </div>

//                                 </div>
//                                 <div class="modal-footer">
//                                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                     <button type="button" class="btn btn-primary" onClick={() => { updateuser() }}>Save changes</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                 </tbody>
//             </table>

            
//             <Link to="/ChartLogin"><button className=''>login chart</button></Link>
           
//             <ToastContainer />
//         </div>
//   )
// }

// export default Sample_get
