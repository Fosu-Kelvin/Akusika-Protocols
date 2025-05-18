import "./About.scss";
import img1 from '../images/welcome.jpg'



const About = () => {
  return (
    <main className="about-container">
      <section className="box01">
        <div className="box01-container1">
        <h1>Welcome to Akusika Protocols</h1>
         <img src={img1} alt="" srcset="" />
      
        </div>
      
          <p>
          Expert event protocol and etiquette services for traditional and
          cultural events in Ghana. We provide expert event protocol and
          etiquette services that ensure your traditional and cultural
          celebrations are seamlessly executed with dignity and authenticity,
          honoring every detail in line with rich cultural values. From
          coordinating ceremonial processes to guiding guest interactions, we
          ensure that every aspect of your event reflects respect, order, and
          cultural excellence. At Akusika Protocols, we take pride in preserving
          heritage while delivering memorable experiences rooted in tradition.
        </p>
      </section>
      <section className="box01">
        <div className="box01-container1">
        <h1>What Sets Us Apart</h1>
        <p>
          At Akusika Protocols, we combine cultural intelligence with meticulous
          attention to detail, ensuring every tradition is honored with elegance
          and precision. We don’t just organize events — we elevate them with
          meaning and respect. Our deep understanding of Ghanaian customs allows
          us to tailor each celebration with authenticity, while our
          professional coordination guarantees a smooth and dignified
          experience. Whether it’s a traditional wedding, naming ceremony, or
          cultural festival, we approach every occasion with reverence and
          excellence — because every detail matters when tradition speaks.
        </p>
        </div>
       
      </section>
      <section className="box01">
        <div className="box01-container1">
        <h1>Organization, details, logistics</h1>
        <p>
         Expert event protocol and etiquette services for traditional and cultural events involve meticulous planning, culturally sensitive execution, and detailed logistics to ensure authenticity and respect. These services begin with in-depth consultations to understand the cultural background, rituals, and client expectations, followed by careful coordination with cultural advisors, vendors, and community leaders. Protocol experts manage etiquette such as dress codes, seating hierarchies, ceremonial sequences, and gifting customs, while also ensuring multilingual communication, appropriate venue setup, and dignified hosting. With on-site management and contingency planning, these services help deliver seamless, respectful, and meaningful cultural events that honor tradition and avoid social missteps.

        </p>
        </div>
        
      </section>
    </main>
  );
};

export default About;
