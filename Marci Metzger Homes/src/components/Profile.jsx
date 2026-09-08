import marciPicture from '../assets/marci-picture.png'
import './styles/Profile.css'

export function Profile() {
  return (
    <div className="profile">
      <div className='image-section'>
        <img src={marciPicture} alt="" />
      </div>
      <div className='description-section'>
        <p className='description-name'>MARCI METZGER HOMES</p>
        <h1>REALTOR FOR NEARLY 3 DECADES</h1>
        <p className='description-text'>
          With almost 30 years of real estate experience, Marci Metzger brings
          unmatched local knowledge, dedication, and a personal touch to every
          transaction. Whether you're buying or selling. Marci committed to helping
          you achieve your real estate goals in Pahrump and surrounding areas.
        </p>
        <a href="#" className='description-button'>
          Learn More
        </a>
      </div>
    </div>
  )
}