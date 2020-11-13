import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const Home = () => {
  return (
    <div className="containerHome mt-4">
      <Link
        to="/courtTabs"
        className="btn btn-outline-dark bg-light rounded border-0"
      >
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={img1} />
        </Card>
      </Link>

      <Link
        to="/moyenTabs"
        className="btn btn-outline-dark bg-light rounded border-0"
      >
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={img2} />
        </Card>
      </Link>

      <Link
        to="/longTabs"
        className="btn btn-outline-dark bg-light rounded border-0"
      >
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={img3} />
        </Card>
      </Link>

        <Link
          to="/mouvementsTabs"
          className="btn btn-outline-light bg-dark mt-4 mb-4 rounded border-0 btn-lg btn-block"
        >
          My PR
        </Link>

        <Link
          to="/test"
          className="btn btn-outline-light bg-dark mt-4 mb-4 rounded border-0 btn-lg btn-block"
        >
          Test
        </Link>
        <Link
          to="/profile"
          className="btn btn-outline-light bg-dark mt-4 mb-4 rounded border-0 btn-lg btn-block"
        >
          Test
        </Link>
    </div>
  );
};

export default Home;
