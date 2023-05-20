import React, { useContext } from 'react';
import AuthProvider from './provider/AuthProvider';

const MyToyRow = ({myToy}) => {
    // const {user } = useContext(AuthProvider);
    
        const { _id,toys_name,photo,seller_name,  email,sub_category,price, rating,quantity } = myToy;
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
          
        </tr>
        </div>
    );
};

export default MyToyRow;