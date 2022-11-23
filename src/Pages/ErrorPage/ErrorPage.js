import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg?w=740&t=st=1669226673~exp=1669227273~hmac=e97defb01d3718cfdb6357445a890cd17919ac7fed838bd1efa3f3e5a7ebf904" alt='' className="w-full lg:w-1/2 rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">Something Went Wrong!</h1>
      <p className="py-6 text-xl">Sorry could not found what you were looking for : ( <br />
      Wanna go home?
      </p>
      <Link to='/'>
      
      <button className="btn btn-secondary text-white">HOME</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ErrorPage;