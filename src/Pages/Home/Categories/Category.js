import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import FurnitureCard from './FurnitureCard';

const Category = () => {

    const [booking,setBooking] = useState(null);
    // console.log(booking?.name);
    const allFurniture = useLoaderData();

    // const { data: allFurniture = [], isLoading } = useQuery({
    //     queryKey: ["category"],
    //     queryFn: () =>
    //       fetch(`http://localhost:5000/furniture/${allFurniture}`).then((res) => res.json()),
    //   });


    return (
        <div >
            <div>
                <h2 className=" text-center text-3xl text-primary font-bold">HOPE YOU FIND <br /> WHAT YOU ARE LOOKING FOR</h2>
            </div>
            <div className='w-3/4 mx-auto grid gap-6  grid-cols-1 my-10 '>
                {
                    allFurniture.map(furniture => <FurnitureCard
                    key={furniture._id}
                    furniture={furniture}
                    setBooking={setBooking}
                    ></FurnitureCard>)
                }
            </div>
{ 
booking    &&      
 <BookingModal
            booking={booking}
            setBooking={setBooking}
            ></BookingModal>
            }
        </div>
    );
};

export default Category;