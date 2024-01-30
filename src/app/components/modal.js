import React from 'react';
import  { Form } from "./form";

const Modal = ({ isShowing, onClose }) => {
    if (!isShowing) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-bg800 z-20 " >
            {/* Your overlay content goes here */}
            <div>
                <section className="fixed right-0">
                    <div className="modal-close cursor-pointer z-10 p-4">
                        <button type="button" className="text-bg50" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">
                                <svg className="fill-bg100 text-bg100" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </section>
                <section className="max-w-8xl mx-auto pt-12 ">
                    <div className="lg:p-12 p-6 h-full">
                        <div className="font-bebasNeue text-6xl text-bg100  flex flex-row  pb-4 ">
                            Contact
                        </div>
                        <div className="text-bg200 flex flex-row pb-8">
                            <div >
                                <span className="md:block hidden" >We value your feedback, inquiries, and suggestions. Our dedicated support team is ready to provide you with the information and assistance you need. </span>
                                <span>Feel free to reach out to us via the contact form below, and we'll get back to you as soon as possible.</span>
                                <span className="md:block hidden" >Thank you for choosing Blue Prospect – where customer satisfaction is our priority.</span>
                            </div>
                        </div>
                        <Form/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Modal;
