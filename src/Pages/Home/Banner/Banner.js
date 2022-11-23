import React from 'react';

const Banner = () => {
    return (
<div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://img.freepik.com/free-vector/consumer-society-abstract-concept_335657-3111.jpg?w=740&t=st=1669222767~exp=1669223367~hmac=295bd5cc611a7a2500463b75f49e3f96ee93ac2d7dd36f0976b34423261938fc" alt='' className=" w-full lg:max-w-lg rounded-lg " />
    <div>
        <h5 className='text-xl font-bold'>WELCOME TO OUR</h5>
      <h1 className="text-5xl font-bold">FURNITURE <br /><span className='text-primary font-semibold'>GALLERY</span></h1>
      <p className="py-6 text-lg">If you are looking for a platform to buy second-hand products or to sell your used products this is the right place for you. Use our platform as your need.</p>
    </div>
  </div>
</div>
    );
};

export default Banner;