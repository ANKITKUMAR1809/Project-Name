import React from 'react'
import { useState } from 'react';
import Sidebar from '../components/Sidebar'
import './css/Dashboard.css'
import { CircleUserRound, Trash2, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState("free")
  const [user, setUser] = useState(false)

  return (
    <>
      <Sidebar />
      <div className='selected-content'>
        <div className='dashboard-nav'>
          <div className='relative cursor-pointer' onMouseOver={() => setUser(true)} onMouseLeave={() => setUser(false)}>
            <NavLink to='/profile'><h1 className='flex items-center gap-2 text-xl font-semibold'><CircleUserRound size={32} />Welcome, Ankit Kumar</h1></NavLink>
            {user ? <div className='rounded-md user-over absolute top-8 py-4  w-[100%] h-[200px] flex flex-col items-center' onMouseLeave={() => setUser(false)}>
                <div><CircleUserRound size={50} color="#ffffff" /></div>
                <div className='my-2'><h1 className='text-white'>Username</h1></div>
                <div className='my-4'><button className='btn'>Logout</button></div>
            </div> : ""}
          </div>
          <p className='font-semibold text-xl' onMouseOver={() => setPlan("Upgrade")} onMouseLeave={() => setPlan("Free")}>Plan: {plan}</p>
          <p className='hidden md:block'>Created At: 12/10/2024, 10:39:46 PM</p>
        </div>
        <div className="dashboard-email-list my-4">

          <div className='email-list'>
            <div className='email-list-heading'>
              <h1 className=''>Email-List -</h1>
              <span className=''>1</span>
            </div>
            <div className='email-list-button'>
              <button >Add Mail</button>
              <button >Send Mails</button>
              <button >Add Mail Details</button>
            </div>
          </div>

          <div className='email-list-table'>
            <table>
              <thead>

                <tr>
                  <th>S No.</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ankitkumar1878@gmail.com</td>
                  <td>Not Send</td>
                  <td> <Trash2 /> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </>
  )
}

export default Dashboard