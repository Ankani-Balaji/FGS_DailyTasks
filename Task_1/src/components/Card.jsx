import React from "react";

const Card = ({ Username, role}) => {
  return (
    <div className="card">
      <div className="violet"></div>
      <div className="profile"></div>
      <div className="data">
        <div className="data-inside">
          <h1 className="name">{Username}</h1>
          <p>{role}</p>
          <div className="stars">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="buttons">
            <button className="btn">About Me</button>
            <button className="btn">Hire Me</button>
          </div>
        </div>
      </div>

      <div className="logos">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
};

export default Card;
