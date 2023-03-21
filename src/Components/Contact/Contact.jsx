import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com';
import "./Contact.css"
const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_d8obzee', 'template_45l6f7r', event.target, '7yGHzIYav8nkKsJhp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    useEffect(() => {
        // MessageForm()
    }, [])

    return (
        <div className='Contact_Main'>
            <h2>Contact Us</h2>
            <div className='Contact_Main_Wrap'>
                <div className='Contact_Message_Wrap'>
                    <h2> Send a Message</h2>
                    <div className='Message_Main_Wrap'>
                        {/* <h2>Book An Appointmnt</h2>
                        <p>Get your Consultation done by our experts</p> */}
                        <div className='Message_Inpu_Main'>
                            <form onSubmit={handleSubmit}>
                                <div className='Message_Input_Wrap'>
                                    <label>Name:</label>
                                    <input type="text" name="from_name" className="Message_Input" />
                                    <label>Email:</label>
                                    <input type="email" name="from_email" className="Message_Input" />
                                </div>

                                <label>Subject:</label>
                                <input type="text" name="subject" className='Message_Subject' />

                                <div className='Appointment_Textarea' >
                                <label>Message:</label>
                                <textarea name="message"  cols="30" rows="10" className='Message_Textarea' /> 
                                </div>

                                <button type="submit" className='Appointment_Bttn'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='Contact_Contact_Wrap'>
                    <h2>Contact Info</h2>
                    <div className='Contact_Wrap'>

                        <div className='PhoneNumber'>
                            <p>Contact: </p>
                            <p>08183332378, 09154677489</p>
                        </div>
                        <div className='Email'>
                            <p>Email: </p>
                            <p>Exquisitephysiotherapy@gmail.com</p>
                        </div>
                        <div className='Address'>
                            <p>Address: </p>
                            <p>No 3,James Igbe Street Off<br /> Orege-Mile2 Ajegunle Apapa LAGOS.</p>
                        </div>
                        <div className='Twitter'>
                            <p>twitter:</p>
                            <p> @exquisitephysio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact