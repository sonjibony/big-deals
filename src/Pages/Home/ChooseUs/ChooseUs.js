import React from 'react';

const ChooseUs = () => {
    return (
        <div className="hero my-24">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-erick-mufasa-1350789.jpg&fm=jpg&h=400&w=550&fit=crop&_gl=1*9dlxp3*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2OTQxMDQ3NS4yMy4xLjE2Njk0MTA0OTIuMC4wLjA." className=" rounded-lg shadow-2xl" alt='' />
    <div className='lg:w-1/2'>
      <h1 className="text-5xl font-bold mb-8 text-primary">Why Choose Us?</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 lg:mr-14' >
        <div >
            <img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/512/2922/2922815.png" alt="" />
          <h3 className="text-lg font-bold">Easy to buy</h3>
          <p className='text-justify'>Its very easy to buy your products here. You can buy secondhand products at low cost here.</p>  
        </div>
        <div>
        <img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/512/4106/4106383.png" alt="" />
          <h3 className="text-lg font-bold">Easy to sell</h3>
          <p className='text-justify'>You can sell your unused or old furniture here with very few simple steps.</p>  
        </div>
        <div>
        <img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png" alt="" />

          <h3 className="text-lg font-bold">Fast & Free shipping</h3>
          <p className='text-justify'>Yes you read it right. BigDeal is the only website in town who give fast and free shipping.</p>  
        </div>
        <div>
        <img className='w-[40px]' src="https://cdn-icons-png.flaticon.com/512/5167/5167002.png" alt="" />

          <h3 className="text-lg font-bold">24/7 Active</h3>
          <p className='text-justify'> You can visit the website or book or even buy product ar any time.</p>  
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default ChooseUs;