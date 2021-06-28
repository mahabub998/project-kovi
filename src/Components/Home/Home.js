import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData/FakeData.json';
import WriterCard from '../../Components/WriterCard/WriterCard';


const Home = () => {
    const [writers,setWriters] = useState([]);
    useEffect( () => {
        setWriters(FakeData)
       
    },[])
    return (
        <div className="row-container ">
         <div className="row">
            {
                writers.map(writer => <WriterCard  writer={writer}></WriterCard>)
            }
            </div>
        </div>
    );
};

export default Home;