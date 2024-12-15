import { useState } from 'react'
import React from 'react'
import Sidebar from '../components/Sidebar'
import { Trash2, Pencil } from 'lucide-react'
import './css/SendEmailConfiguration.css'
const SendEmailConfiguration = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Details submitted');
        closeModal();
    };

    return (
        <>
            <Sidebar />
            <div className='selected-content'>
                <div>
                    <button className='btn' onClick={openModal}>Add Details</button>
                </div>
                <div className='email-list-table'>
                    <table>
                        <tr>
                            <th>S No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Sent</th>
                            <th>Mail Type</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ankit</td>
                            <td>ankitkumar1878@gmail.com</td>
                            <td className=' '>Sent</td>
                            <td>0</td>
                            <td>gmail</td>
                            <td className='flex gap-2'> <Pencil className='cursor-pointer' size={18} /> <Trash2 className='cursor-pointer' /> </td>
                        </tr>
                    </table>
                </div>
                {isModalOpen && (
                    <div className='modal-overlay'>
                        <div className='modal-content'>
                            <h2>Add Sender Credentials</h2>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Enter Name:</label>
                                    <input type='text' name='name' placeholder='Name' required />
                                </div>
                                <div>
                                    <label>Enter Email:</label>
                                    <input type='email' name='email' placeholder='Email' required />
                                </div>
                                <div>
                                    <label>Enter Password:</label>
                                    <input type='password' name='password' placeholder='Password' required />
                                </div>
                                <div>
                                    <label>Select Mail Type:</label>
                                    <select name='mailType' required>
                                        <option value='gmail'>Gmail</option>
                                        <option value='outlook'>Outlook</option>
                                        <option value='hostinger'>Hostinger</option>
                                    </select>
                                </div>
                                <div className='modal-actions'>
                                    <button type='button' className='btn close-btn' onClick={closeModal}>Close</button>
                                    <button type='submit' className='btn submit-btn'>Add Details</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default SendEmailConfiguration