import React from "react";

const Slider = (props) => {
  return (
      <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.des}</h6>
        <p className="card-text">
          {props.context}
        </p>
        <p className="card-text">
          {props.context2}
        </p>
        <a href={props.url} className={props.style}>
          {props.linkname}
        </a>
      </div>
    </div>
  );
};

export default Slider;

  

