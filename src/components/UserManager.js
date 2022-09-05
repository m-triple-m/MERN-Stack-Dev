import React from 'react'
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const UserManager = () => {

    const [userList, setUserList] = useState([]);

    // for holding user data to update
    const [userFormData, setUserFormData] = useState(null);
    
    // to show or hide update form
    const [showForm, setShowForm] = useState(false);

    // this will fetch user data from backend
    const getDataFromBackend = async () => {
        const response = await fetch('http://localhost:5000/user/getall');
        const data = await response.json();
        console.log(data);
        setUserList(data);
    }

    const deleteUser = async (id) => { 
        console.log(id);
        const response = await fetch('http://localhost:5000/user/delete/'+id, {method : 'DELETE'})
        if(response.status === 200){
            console.log('user deleted');
            toast.success('User Deleted 😎');
            getDataFromBackend();
        }
     }

     const updateUser = (userdata) => {
        setShowForm(true);
        setUserFormData(userdata);
     }

    // Effect Hook
    // this will tell react what to do when component opens
    useEffect(() => {
      getDataFromBackend();
    }, []);

    const displayUsers = () => {
        return <table className='table bg-white'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map( (user) => (
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <button className='btn btn-outline-danger' onClick={ () => { deleteUser(user._id) } }>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                            <td>
                                <button className='btn btn-outline-primary' onClick={() => {updateUser(user)}}>
                                    <i className="fas fa-pen"></i>
                                </button>
                            </td>
                        </tr>
                    ) )
                }
            </tbody>
        </table>
    }

  return (
    <div className='container-fluid'>
        <h1 className='text-center'>User Manager</h1>
        <div className="row">
            <div className="col-md">
                {displayUsers()}
            </div>
            {
                showForm ? 
                <div className="col-md">
                    
                </div>
                :
                ""
            }
        </div>
    </div>
  )
}

export default UserManager;