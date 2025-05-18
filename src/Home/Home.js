import './Home.scss'
import img03 from '../images/img01.jpg';
import img02 from '../images/img02.jpg';
import img01 from '../images/img03.png';
import img04 from '../images/service01.png';
import { useEffect, useState } from 'react';
import ImageScroller from '../imageScroller/ImageScroller';
import { Link } from 'react-router-dom';


const Home = () => {
  const images = [img01, img02, img03];
  const [bgImge,setBgImg] = useState(null)

  useEffect(()=>{
    const randomImg = images[Math.floor(Math.random()*images.length)];
    setBgImg(randomImg)

  },[images])


  return (

    
    <main className='home'>
        <section 
             className='cover-image'
             style={{
      
              backgroundImage: `url(${bgImge})`,
            }}
        >
          
          <div className="banner_contents">
        <h1 className="banner_title">
          Expert event protocol and ettiquete services 
        </h1>
       
        <h1 className="banner_description">"We value attention to detail,exceptional service and cultural sensitivity"</h1>
        <div className='banner_buttons'>
          <Link to={'/contact'}><button className='banner_button'>Get in touch</button></Link>
          </div>
      </div>
      
      <div className="banner--fadeBottom" />
     
      
        </section>

      <section className='home-content2'>
        <div className='home-content2-box'>
        <h2 className='home-content2-title' > <span>Welcome  to</span> Akusika Protocols.
        </h2>
        <p className='home-content2-description'> We provide expert event protocol and etiquette services that ensure your traditional and cultural celebrations are seamlessly executed with dignity and authenticity, honoring every detail in line with rich cultural values <a href="">Learn more</a>...
        </p>
        </div>
        <div className='home-content2-box'>
          <h2 className='home-content2-title'><span>What Sets</span> Us Apart</h2>
          <p className='home-content2-description'>At Akusika Protocols, we combine cultural intelligence with meticulous attention to detail, ensuring every tradition is honored with elegance and precision. We don’t just organize events — we elevate them with meaning and respect <a href="">Learn more</a>...</p>
        </div>
       
      </section>

      <section className="home-content3" >
            <h2 className='home-content3-title'>Services</h2>
           
            <div className='service-container'>
             
              <img className='service-image' src={img04} alt="services"  />
              
            
            <div className='box'>
              <h3>Traditonal wedding and ceremony</h3>
              <p>We specialize in honoring the beauty and cultural significance of traditional weddings and ceremonies by providing expert guidance on proper protocol and etiquette. From pre-wedding rites to the main celebration, we ensure that each detail aligns with customs, respects family values, and reflects the heritage of the couple. Our service helps couples and families navigate ceremonial expectations with confidence and grace, creating a seamless and meaningful celebration.</p>
            </div>
            
            <div className='box'>
              <h3>Cultural festivals and celebrations</h3>
              <p>We provide expert planning and etiquette guidance for cultural festivals and traditional celebrations, ensuring each event honors its roots and resonates with authenticity. Whether it's a community gathering, religious festivity, or seasonal celebration, we help preserve the customs, rituals, and values that make each occasion unique. Our goal is to create respectful, joyful, and well-organized events that bring people together in celebration of their shared heritage</p>
            </div>
            
            <div className='box'>
              <h3>Corporate events</h3>
              <p>We offer comprehensive protocol and etiquette services for corporate events, ensuring every occasion reflects professionalism, brand values, and attention to detail. From conferences and product launches to networking receptions and executive dinners, we manage the flow, decorum, and cultural sensitivity required for successful business gatherings. Our service enhances your company’s image while fostering a respectful and engaging environment for clients, partners, and employees alike.</p>
            </div>
            
            <div className='box'>
              <h3>Funeral ceremonies</h3>
              <p>We provide thoughtful guidance on protocol and etiquette for funeral ceremonies, helping families navigate these solemn occasions with dignity and respect. Our service supports the coordination of traditional and cultural rites, ensuring that every aspect—from arrival to final tribute—honors the life of the departed and comforts the grieving. With sensitivity and discretion, we create a structured and respectful environment that allows families to focus on remembrance and healing.</p>
            </div>
            
            <div className='box'>
              <h3>Event ettiquete consulting</h3>
              <p>Our Event Etiquette Consulting service offers expert advice on proper conduct, cultural expectations, and social protocols for a wide range of events. Whether you're hosting a formal gala, private celebration, or public function, we help ensure your event runs smoothly and respectfully, with attention to detail in dress codes, guest interactions, speech delivery, and ceremonial customs. We empower hosts and participants to engage with confidence, grace, and cultural awareness.</p>
            </div>
            
            <div className='box'>
              <h3>Staff training</h3>
              <p>Our Staff Training programs are designed to equip event personnel with the skills, etiquette, and professionalism required to deliver exceptional service. From hospitality and guest management to protocol adherence and cultural sensitivity, we train your team to represent your brand with confidence and courtesy. Whether for corporate functions, traditional ceremonies, or high-profile gatherings, our training ensures your staff perform seamlessly and uphold the highest standards of conduct.</p>
            </div>
            
            <div className='box'>
              <h3>Protocol guidance</h3>
              <p>We offer expert protocol guidance to ensure that your events adhere to the appropriate formalities, traditions, and cultural expectations. Whether hosting dignitaries, managing ceremonial procedures, or coordinating high-level functions, our service provides detailed direction on seating arrangements, order of proceedings, official courtesies, and more. With our support, your event will maintain the highest standards of respect, precision, and professionalism.</p>
            </div>
            
            </div>
      </section>

      <section className="home-content4">
        <div className='home-content4-box1' >
          <h3>Event Gallery</h3>
         <Link to={'/contact'}> <button>Book a Consultaion</button></Link>
        </div>
        
        <ImageScroller/>
      </section>
      
    </main>
  )
}

export default Home