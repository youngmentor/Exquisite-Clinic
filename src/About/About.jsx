import React from 'react'
import "./About.css"
const About = () => {
    return (
        <div className='About_Main'>
            <h2>About Us</h2>
            <div className='About_Main_Wrap'>
                <p>Exquisite Physiotherapy Clinic specialists help restore movement and function to people limited by disease or injury.
                    Physiotherapist diagnose and treat a variety of medical conditions affecting the brain, spinal cord, nerves and the musculoskeletal system. They provide treatment and rehabilitation options that reflect the unique needs, abilities and objectives of each patient.
                    Restoring function simply means helping you regain the best options for your quality of life, retain as much muscle ability as possible, help you re-train mental pathways, and generally reach your best possible capability given your specific needs.</p>

              <div className='About_List'>
              <h4>WE ACHIEVE OUR GOALS THROUGH.</h4>
                <ul className='List'>
                    <li>HOSPITAL BASED TREATMENT</li>
                    <li>HOME CARE SERVICE</li>
                    <li>TELEPHYSIOTHERAPY</li>
                </ul>
              </div>
            </div>
        </div>
    )
}

export default About