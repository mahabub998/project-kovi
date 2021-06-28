import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import FakeData from "../../FakeData/FakeData.json";

const WriterDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    setDetails(FakeData);
  }, []);
  const writerDetails = details.find((dt) => dt.id == id);
  console.log(writerDetails);

  return (
    <div className="container mt-5 ">
    <div className="row">
    <div className="col-md-6">
    <h6>{writerDetails?.name}</h6> 
  <p>{writerDetails?.description}</p>   
    </div>
    <div className="col-md-6">
    <img src={writerDetails?.img} alt=""></img>
    </div>
    </div>
    </div>
  );
};

export default WriterDetails;
