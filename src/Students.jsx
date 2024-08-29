import React, { useState } from 'react';



function StudentCount()
{
    const [regular,setRegular] = useState(8)
    const [remedial,setRemedical] = useState(13)
    const [club,setClub] = useState(0)
    return(
        <>
      <div className="row text-center ps-5 mx-5 align-items-center">
          <div className="col-4 px-5 py-2">
              <div className="card text-white">
                <div className="row  rounded bg-danger">
                <i className='fa-solid fa-user-large fs-1 col text-start p-4'></i>
                <p className='text-end col fs-4 p-4'>{regular}</p>
                <p className='text-end fs-5 px-4'>Regular Students</p>
              </div>
              </div>
     
          </div>
          <div className="col-4 px-5 py-2">
              <div className="card text-white">
                <div className="row  rounded " id="cardbg">
                <i className='fa-solid fa-solid fa-user-tie fs-1 col text-start p-4'></i>
                <p className='text-end col fs-4 p-4 '>{remedial}</p>
                <p className='text-end fs-5 px-4'>Remedial Students</p>
              </div>
              </div>
     
          </div>
          <div className="col-4 px-5 py-2">
              <div className="card text-white">
                <div className="row  rounded bg-success">
                <i className='fa-solid fa-people-group fs-1 col text-start p-4'></i>
                <p className='text-end col fs-4 p-4'>{club}</p>
                <p className='text-end fs-5 px-4'>In Paid Clubs</p>
              </div>
              </div>
     
          </div>

        </div>
        </>
    );
}
export default StudentCount