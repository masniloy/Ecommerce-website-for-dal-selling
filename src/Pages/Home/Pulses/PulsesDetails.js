import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthPro/AuthPro';

const PulsesDetails = () => {
    const { user } = useContext(AuthContext)
    const puls = useLoaderData()
    const { _id, productName, Detail, image2, price, image } = puls;

    const hendleCart = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const price = puls.price;
        const productName = puls.productName;
        const quantity = form.quantity.value;
        const phone = form.phone.value;
        const email = user?.email;
        const image = puls.image;


        const Cart = {
            name, price, productName, quantity, phone, email, image
        }


        fetch('https://ecommerce-website-for-dal-selling-server.vercel.app/CartProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Cart)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Add Cart Succesfully !')
                    form.reset();

                }
            })
            .catch(err => console.log(err));

    }

    return (
        <div className=" lg:stats  ">

            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col">
                    <form onSubmit={hendleCart}>
                        <img src={image2} className="max-w-full rounded-lg shadow-2xl" />

                        <h1 className="text-5xl font-bold mt-5">{productName}</h1>
                        <p className="py-6">{Detail}</p>
                        <p className="py-6 font-bold ">Price(kg): {price} tk</p>

                        <div className="mx-3.5">
                            <select name="quantity" className="select select-bordered w-96 max-w-xs bg-gray-100  " required>
                                <option disabled selected>Quantity(kg)</option>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>40</option>
                                <option>50</option>
                                <option>60</option>
                                <option>70</option>
                                <option>80</option>
                                <option>90</option>
                                <option>100</option>
                            </select>
                        </div><br />

                        <div className="">
                            <input name="phone" type="phone" placeholder="Phone" className="input input-bordered w-96 max-w-xs  bg-gray-100  " required />

                        </div>
                        <div className='mt-3'>
                            <span className="label-text  ">Add to the cart & confirm your order. </span><br />
                            <button className="btn w-full max-w-xs drop-shadow-lg mb-10 btn-neutral ">Add to Catr</button>
                        </div>

                    </form>
                </div>

            </div>


        </div >
    );
};

export default PulsesDetails;