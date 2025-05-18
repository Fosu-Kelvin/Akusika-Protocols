
import './ImageScroller.scss'; 
import img1 from '../images/IMG_3510.jpg'
import img2 from '../images/IMG_3511.jpg'
import img3 from '../images/IMG_3512.jpg'
import img4 from '../images/IMG_3521.jpg'
import img5 from '../images/IMG_3522.jpg'
import img6 from '../images/IMG_3523.jpg'
import img7 from '../images/IMG_3524.jpg'
import img8 from '../images/IMG_3526.jpg'
import img9 from '../images/IMG_3527.jpg'
import img10 from '../images/IMG_3529.jpg'


const images = [
  {src:img1,label:"festival"},
  {src:img2,label:"occasion"},
  {src:img3,label:"funerals"},
  {src:img4,label:"Meeting"},
  {src:img5,label:"corporate event"},
  {src:img6,label:"wedding"},
  {src:img7,label:"Dinner night"},
  {src:img8,label:"Party"},
  {src:img9,label:"Ushering"},
  {src:img10,label:"Reunion"},
  
 

];


  

const ImageScroller = () => {
  return (
    <div className="image-scroller">
      
      {images.map((item, index) => (
        <div className='img-box'>
        <img key={index} src={item.src} alt={`Slide ${index}`} />
        
          <h4>
            {item.label}
        </h4>
     
        
        </div>
      ))}
    </div>
  );
};

export default ImageScroller;
