import React, {useState} from 'react'
import "./Appointment.css"
import emailjs from 'emailjs-com';
const Appointment = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   emailjs.sendForm('service_d8obzee', 'template_45l6f7r', event.target, '7yGHzIYav8nkKsJhp')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log("clicked")
    
      const emailBody = `Hi ${name},\n\nYou have an appointment on ${date} at ${time}.\n\nBest regards,\nYour Appointment Scheduler`;
    
      const mailToLink = `mailto:${email}?subject=Appointment Confirmation&body=${encodeURIComponent(emailBody)}`;
    
      window.location.href = mailToLink;
    };
  return (
    <div className='Appointment_Main'>
      <div className='Appointment_Main_Wrap'>
        <h2>Book An Appointmnt</h2>
        <p>Get your Consultation done by our experts</p>
        {/* <form onSubmit={handleSubmit}>
          <div className='Appointment_Inpu_Main'>
            <div className='Appointment_Input_Wrap'>
              <input type="text" className="Appointment_Input" placeholder='Your Name' />
              <input type="number" className="Appointment_Input" placeholder='Phone Number' />
            </div>
            <select className='Appointment_Service'>
              <option>Select Service</option>
              <option>back pain</option>
              <option>leg pain</option>
              <option>stroke</option>
              <option>rhuematism</option>
            </select>
            <input type="text" className="Appointment_Input"  placeholder='Select Service' />
            <div className='Appointment_Input_Wrap'>
              <input type="time" className="Appointment_Input" placeholder='Time' />
              <input type="date" className="Appointment_Input" placeholder='Date' />
            </div>
            <button className='Appointment_Bttn' type="submit">Book Appointment</button>
          </div>
        </form> */}
            <form onSubmit={handleSubmit}>
                                <label>
                                    Name:
                                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                                </label>
                                <label>
                                    Email:
                                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                </label>
                                <label>
                                    Date:
                                    <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
                                </label>
                                <label>
                                    Time:
                                    <input type="time" value={time} onChange={(event) => setTime(event.target.value)} />
                                </label>
                                <button type="submit">Submit</button>
                            </form>
      </div>
    </div>
  )
}

export default Appointment