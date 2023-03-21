import React, { useEffect, useState } from 'react'


import "./Contact.css"
const Contact = () => {
    // console.log(setPosition)

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
                            <div className='Message_Input_Wrap'>
                                <input type="text" className="Message_Input" placeholder='Your Name' />
                                <input type="text" className="Message_Input" placeholder='Email' />
                            </div>
                            <input type="text" className='Message_Subject' placeholder='Subject' />
                            <div className='Appointment_Textarea'>
                                <textarea name="Message" id="" cols="30" rows="10" className='Message_Textarea'>Meassage</textarea>
                            </div>
                            <button className='Appointment_Bttn'>Send Message</button>
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
                        <div>
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