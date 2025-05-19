import './Footer.scss'
import logo from '../images/LOGO01.png'
import { Link } from 'react-router-dom'

const Footer = () => {
const today = new Date()
const date = today.getFullYear()





  return (
    <footer>
     <div className='footer-container'>
      <div className='footer-box01-container'>
      <div className='footer-box01'>
      <Link to={'/'}><img className='logo-icon-bottom' src={logo} alt="logo" /></Link>
      <h4><Link to={'/'}>Akusika <br/>Protocol </Link></h4>
     
    </div>
    <p>"We value attention to detail,exceptional service and cultural sensitivity"</p>
    </div>
     <div className='footer-box03'>
      <h4>Quick Links</h4>
      <ol>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/service'}>Service</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ol>
     </div>
     <div className='social-footer'>
      <h4>Social Media</h4>
      <p><a href="https://www.instagram.com/akusikaprotocols/">Instagram</a></p>
     </div>
     <div className='footer-box04'>
      <h4>Address</h4>
      <p>Accra,Dome</p>
      <p>abigailakuosae@gmail.com</p>
      <p>+233 59 623 1129</p>
      
     </div>
      </div>
      <div className='copy-right-box'>
      <p >@{date} Akusika Protocols.All right reserved</p>
      <p><a href="#">back to top</a></p>
      </div>
      </footer>
  )
}

export default Footer