import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div data-aos="fade-up" className='stats w-full max-w-7xl mt-16'>
                <div className=' bg-gray-100 p-5 stats-vertical' >
                    <h1 className='text-3xl font-bold my-3 text-left'>Feedback</h1>



                    <input type="text" placeholder="Email" className="input input-sm my-2 input-bordered  w-full max-w-2xl  mx-4 drop-shadow-md" /><br />


                    <textarea placeholder="Feedback" className="textarea textarea-bordered my-2  textarea-lg w-full py-8 max-w-2xl drop-shadow-md" ></textarea><br />

                    <button className="btn w-full max-w-xs drop-shadow-lg m-5 btn-neutral">Send</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;