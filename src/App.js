/*eslint-disable */
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon12 from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  const [icon1, seticon1] = useState([<FontAwesomeIcon icon={icon12.faCoffee} className='text-info' />, <FontAwesomeIcon icon={icon12.faCoffee} className='text-info' />, <FontAwesomeIcon icon={icon12.faCoffee} className='text-info' />, <FontAwesomeIcon icon={icon12.faMosquito} className='text-info' />, <FontAwesomeIcon icon={icon12.faMosquito} className='text-info' />, <FontAwesomeIcon icon={icon12.faMosquito} className='text-info' />, <FontAwesomeIcon icon={icon12.faStairs} className='text-info' />, <FontAwesomeIcon icon={icon12.faStairs} className='text-info' />, <FontAwesomeIcon icon={icon12.faStairs} className='text-info' />])
  const [icon2, seticon2] = useState([<FontAwesomeIcon icon={icon12.faCoffee} className='text-white' />, <FontAwesomeIcon icon={icon12.faCoffee} className='text-white' />, <FontAwesomeIcon icon={icon12.faCoffee} className='text-white' />, <FontAwesomeIcon icon={icon12.faMosquito} className='text-white' />, <FontAwesomeIcon icon={icon12.faMosquito} className='text-white' />, <FontAwesomeIcon icon={icon12.faMosquito} className='text-white' />, <FontAwesomeIcon icon={icon12.faStairs} className='text-white' />, <FontAwesomeIcon icon={icon12.faStairs} className='text-white' />, <FontAwesomeIcon icon={icon12.faStairs} className='text-white' />])

  // const [icon2, seticon2] = useState([<FontAwesomeIcon />, <FontAwesomeIcon />, <FontAwesomeIcon />, <FontAwesomeIcon />, <FontAwesomeIcon />, <FontAwesomeIcon />, <FontAwesomeIcon />, <FontAwesomeIcon />, <FontAwesomeIcon />])
  const [icon, seticon] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [icon5, seticon5] = useState(["*", "*", "*", "*", "*", "*", "*", "*", "*"])
  const [visibleid, setvisibleid] = useState(0)
  const [dummyar, setdummyar] = useState([])

  const [icon123, seticon123] = useState([
    {
      "name": "coffe",
      id: <FontAwesomeIcon icon={icon12.faCoffee} />
    },
    {
      "name": "coffe",
      id: <FontAwesomeIcon icon={icon12.faCoffee} />
    },
    {
      "name": "coffe",
      id: <FontAwesomeIcon icon={icon12.faCoffee} />
    },
    {
      "name": "faMosquito",
      id: <FontAwesomeIcon icon={icon12.faMosquito} />
    },
    {
      "name": "faMosquito",
      id: <FontAwesomeIcon icon={icon12.faMosquito} />
    },
    {
      "name": "faMosquito",
      id: <FontAwesomeIcon icon={icon12.faMosquito} />
    },
    {
      "name": "faStairs",
      id: <FontAwesomeIcon icon={icon12.faStairs} />
    },
    {
      "name": "faStairs",
      id: <FontAwesomeIcon icon={icon12.faStairs} />
    }, {
      "name": "faStairs",
      id: <FontAwesomeIcon icon={icon12.faStairs} />
    }])



  const arr = (a) => {


    // icon2[a] = icon1[a]
    icon2[a] = icon123[a].id
    console.log(icon1, "icon1");
    console.log(icon2, "icon2");
    setvisibleid(visibleid + 1)

    dummyar.push(icon123[a].name)
    console.log(dummyar, "dummyar");
    if (dummyar.length == 3) {
      if (dummyar[0] == dummyar[1] && dummyar[0] == dummyar[2] && dummyar[1] == dummyar[2]) {
        toast.success("Wow so easy won!");
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }
      else {
        toast.error("Wow so easy!");
        setTimeout(function () {
          window.location.reload();
        }, 2000);

      }
    }


  }


  // const arr1 = (a) => {


  //   icon[a] = icon5[a]
  //   console.log(icon, "icon");
  //   console.log(icon5, "icon5");
  //   setvisibleid(visibleid+1)
  // }



  return (
    <div className="App">



      <div className="container bg-warning">
        <h1 className="">
          welcome to the game world
          <small> you compled {visibleid} attempt</small>
        </h1>


        <div class="row row-cols-3 g-3 gx-3">
          {
            icon2.map((icon_array, index) => (


              <div className="">

                <div className="">
                  <div class="card" onClick={() => { arr(index) }}>

                    <div class="card-body m-5 p-5">

                      <h1 >{icon_array}</h1>

                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>



      </div>
      <ToastContainer /> 


<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>



    </div>

  );
}

export default App;
