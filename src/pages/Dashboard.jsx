import React from 'react'
import Sidebar from '../components/Sidebar'
import './css/Dashboard.css'
import { User, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };


  return (
    <>
      <Sidebar />
      <div className='selected-content'>
        <div className='dashboard-nav'>
          <h1>Welcome, Ankit Kumar</h1>
          <p>Plan: free</p>
          <p>Created At: 12/10/2024, 10:39:46 PM</p>
        </div>
        <div className="dashboard-email-list">

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
              <tr>
                <th>S No.</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              <tr>
                <td>1</td>
                <td>ankitkumar1878@gmail.com</td>
                <td>Not Send</td>
                <td> <Trash2 /> </td>
              </tr>
            </table>
          </div>
        </div>

      </div>

    </>
  )
}

export default Dashboard