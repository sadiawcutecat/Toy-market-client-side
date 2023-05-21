import React, { useContext } from 'react';
import AuthProvider from './provider/AuthProvider';

const MyToyRow = ({myToy, handleDelete, handleupdate}) => {
    // const {user } = useContext(AuthProvider);
    
        const { _id,toys_name,photo,seller_name,  email,sub_category,price, rating,quantity,status } = myToy;
        console.log(myToy);
    return (
        <div>
           
            <tr>
            
         
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {toys_name}
            </td>
            <td>{seller_name}</td>
            <td>{email}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
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
          
        </tr>
        </div>
    );
};

export default MyToyRow;