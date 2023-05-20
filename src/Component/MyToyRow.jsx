import React from 'react';

const MyToyRow = ({myToy}) => {
    
        const { _id,toys_name,photo,seller_name,  seller_email,sub_category,price, rating,quantity } = myToy;
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
            <td>{seller_email}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
          
        </tr>
        </div>
    );
};

export default MyToyRow;