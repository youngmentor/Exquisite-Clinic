import React from 'react'
import "./Service.css"
const Service = () => {
  return (
    <div className='Service_Main'>
      <div className='Service_Main_Wrap'>
        <h1>our service</h1>
        <h3>We provide exquisite physiotherapy services in the following area:</h3>
        <div className='Service_Div_Main'>
          <div className='Service_Div_Main_Wrap'>
            <div className='ServiceLeft_Div'>
              <h4> 1.  Geriatric Physiotherapy (elderly patients)</h4>
              <img src="/Old People.png" alt="" className='Service_Img' />
            </div>
            <div className='Service_Text_Div'>
              <p>As we grow old, our body systems begin to grow weaker and thus susceptible to various diseases and conditions The elderly population should be given optimal health attention to enable them enjoy their retirement and ‘resting years’ to the fullest. At the geriatric age, different diseases and conditions can be presented with ranging but not limited to;

                osteoarthritis, rheumatoid arthritis,  osteoporosis, Stroke, Parkinson’s disease/Parkinsonism, Neck/Back pain, Diabetic neuralgia, lumbar spondylosis, spondylolisthesis, cerivical spondylosis etc.

                The stress of a megacity like Lagos, would not enable us be their physically to monitor our elderly ones so that is why you should be talking to us. At exquisite physiotherapy clinicl, we would help make sure they get the best form of physiotherapy care without the unnecessary cost of moving around and the headache of keeping uncomfortable appointments..</p>
            </div>
          </div>
          <div className='Service_Div_Main_Wrap'>
            <div className='Service_Text_Div'>
              <p>Our children are the leaders of tomorrow, conditions like;
                Cerebral palsy, erb’s palsy, winged scapula, fracture, musculoskeletal sprains and strains etc.
                Can sometimes be dilapidating for the mother/care giver to maintain. Especially for working mothers, not to worry, we can help ease the stress! We can help you see and treat your baby at home, daycare or creche to help you ease the process of motherhood. Remember, its Exquisite physiotherapy clinic, you’ll be getting the very best as we would carry you along with the entire treatment regimen. It would be just like you were there yourself!
                Also, we assist in conditions like urinary incontinence, uterine prolapse, antenatal exercise design etc. All these while working with our trained physiotherapists to help you recover in record time...</p>
            </div>
            <div className='ServiceLeft_Div'>
              <h4>2. Paediatric and O/G Physiotherapy (Mother and Baby care)</h4>
              <img src="/children.png" alt="" className='Service_Img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service