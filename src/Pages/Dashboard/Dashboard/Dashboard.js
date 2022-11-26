import React from 'react';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  gap-4 mt-[100px] my-auto'>
          {/* <div>
            <img src="https://images.pexels.com/photos/6280134/pexels-photo-6280134.jpeg?cs=srgb&dl=pexels-kmws-6280134.jpg&fm=jpg&h=400&w=550&fit=crop&_gl=1*1dpqmyf*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2OTQxMjg2Mi4yNC4xLjE2Njk0MTMwNDguMC4wLjA." alt="" />
            </div>  */}
          <div>
           <h3 className="text-5xl font-bold text-primary"> WELCOME TO THE DASHBOARD</h3>
           <h3 className='text-xl my-6'> Select the option you want to visit. You can see the details there.</h3>
           <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden mb-5">See Options</label>

            </div> 
          <div className='lg:mr-11'>
            <img className='w-full'  src="https://images.pexels.com/photos/6280134/pexels-photo-6280134.jpeg?cs=srgb&dl=pexels-kmws-6280134.jpg&fm=jpg&h=400&w=550&fit=crop&_gl=1*1dpqmyf*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2OTQxMjg2Mi4yNC4xLjE2Njk0MTMwNDguMC4wLjA." alt="" />
            </div> 
        </div>
    );
};

export default Dashboard;