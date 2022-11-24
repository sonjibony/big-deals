import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({booking, setBooking}) => {
    const {name,resalePrice, categoryNo,img} = booking;
    const {user} = useContext(AuthContext);



//implementing booking
const handleBooking= event =>{
event.preventDefault();
const form = event.target;
const name = form.name.value;
const email = form.email.value;
const product = form.product.value;
const price = form.price.value;
const phone = form.phone.value;
const address = form.address.value;

const booking ={
    name,
    email,
    product,
    price,
    phone,
    address,
    categoryNo,
    img
}

fetch('http://localhost:5000/bookings',{
    method: 'POST',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(booking)
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if(data.acknowledged){
      toast.success('Booking Confirmed');
      setBooking(null);

    }
    else{
      toast.error(data.message);

    }
    
})


// console.log(booking);

}

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle btn-secondary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-10">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            
            
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input w-full input-bordered "
              disabled
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="Email Address"
              className="input w-full input-bordered "
              disabled
            />
            <input
              name="product"
              type="text"
              defaultValue={name}
              placeholder="Product Name"
              className="input w-full input-bordered "
              disabled
            />
            <input
              name="price"
              type="text"
              defaultValue= {resalePrice}
              placeholder="Email Address"
              className="input w-full input-bordered "
              disabled
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered "
              required
            />
            <input
              name="address"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
              required
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
