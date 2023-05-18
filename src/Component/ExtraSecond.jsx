import React from 'react';

const ExtraSecond = () => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/customerComment')
            .then(res => res.json())
            .then(data => {
                // setChefData(data.Comments);
                console.log(data.Comments);
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default ExtraSecond;