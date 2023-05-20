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
                    </tr>
                </thead>
                <tbody>
                    {
                        myToys.map(myToy => <MyToyRow
                        key={myToy._id}
                        myToy={myToy}
                        ></MyToyRow>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyToy;