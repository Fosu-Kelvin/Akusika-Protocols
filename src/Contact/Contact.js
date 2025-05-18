import './Contact.scss'
import logo from '../images/LOGO1.png'
import  Form from '../form/form'


const Contact = () => {
  return (
    <main className='contact-container'>
      <section className='contact-box1'>
        <img className='logo-contact-icon' src={logo} alt="logo icon" srcset="" />
        <h1>Let’s Get this party started.</h1>
        <p className='box-p1'>Expert event protocol and ettiquete services for traditional and Cultural events in Ghana.</p>
        <p className='box-p2'>For event inquiries, please fill out the form below and one of our team members will get back to you within 48 hours.</p>
      </section>
      <section>
        <Form/>
      </section>
    </main>
  )
}

export default Contact