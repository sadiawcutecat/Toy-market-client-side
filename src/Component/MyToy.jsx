import React, { useContext, useEffect, useState } from 'react';
import useTitle from './useTitle';
import { AuthContext } from './provider/AuthProvider';
import MyToyRow from './MyToyRow';


const MyToy = () => {
    useTitle('MyToy')
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/api/myToys?email=${user?.email}`);
            if (response.ok) {
                const data = await response.json();
                setMyToys(data);
            } else {
                // Error occurred while fetching data
                console.error('Error fetching data!');
            }
        };

        fetchData();
    }, []);
    
    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://b7-a11-toy-marketplace-server.vercel.app/api/myToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }

    const handleupdate = id => {
        fetch(`https://b7-a11-toy-marketplace-server.vercel.app/api/myToys/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'update' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    const updated = myToys.find(myToy => myToy._id === id);
                    updated.status = 'confirm'
                    const newToys = [updated, ...remaining];
                    setMyToys(newToys);
                }
            })
    }
 console.log(myToys);

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>Toy Photo</th>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Seller Email</th>
                        <th>Sub_category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToys?.map(myToy => <MyToyRow
                        key={myToy._id}
                        myToy={myToy}
                        handleDelete={handleDelete}
                        handleupdate={handleupdate}
                        ></MyToyRow>)
                    }
                    {/* {
                        myToys?.map(myToy => <tr>
            
         
                            <td>
                                <div className="avatar">
                                    <div className="rounded w-24 h-24">
                                    <img src={myToy.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                {myToy.toys_name}
                            </td>
                            <td>{myToy.seller_name}</td>
                            <td>{myToy.email}</td>
                            <td>{myToy.sub_category}</td>
                            <td>${myToy.price}</td>
                            <td>{myToy.rating}</td>
                            <td>{myToy.quantity}</td>
                            <th>
                                <button onClick={() => handleDelete(_id)} className="btn btn-accent text-white">
                                    Delete
                                </button>
                            </th>
                            <th>
                                {
                                    status === 'update' ? <span className="font-bold text-success">Updated</span> :
                                        <button onClick={() => handleupdate(_id)} className="btn btn-outline btn-accent">Update</button>
                                         } 
                            </th>
                          
                        </tr>)
                    } */}

                </tbody>

            </table>
        </div>
    );
};

export default MyToy;