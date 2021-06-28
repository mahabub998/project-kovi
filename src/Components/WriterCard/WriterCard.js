import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './WriterCard.css';

const WriterCard = (props) => {
    const {id,name,email,gender,img} = props.writer;

  
    return (
        <div className="d-flex col-md-4 mt-5">
        <div className=" card-area justify-content-center ms-5">
        <Card className="" style={{ width: '18rem' }}>
        <Card.Img className="img-control" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Link to={`/writerDetails/${id}`} className="btn btn-primary">Here Details</Link>
        </Card.Body>
      </Card>
      </div>
        </div>
    );
};

export default WriterCard;