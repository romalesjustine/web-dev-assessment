import './styles/About.css'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'

const aboutSections = [
  {
    className: 'about1',
    image: about1,
    alt: 'Marci Metzger Homes residential sales representative',
    subtitle: 'FOR SELLERS',
    title: 'Top Residential Sales Last 5 Years',
    text: 'We helped nearly 90 clients in 2021 and successfully closed $28.5 million in residential sales. Our team works hard every day to grow, learn, and stay ahead of the market so we can continue delivering strong results for our clients.',
  },
  {
    className: 'about2',
    image: about2,
    alt: 'Marci Metzger Homes property listing',
    title: "Don't Just List it...",
    text: 'Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.',
  },
  {
    className: 'about3',
    image: about3,
    alt: 'Marci Metzger Homes property listing',
    subtitle: 'FOR BUYERS',
    title: "Guide to Buyers",
    text: 'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!',
  },
]

export function About() {
  return (
    <>
      <div className='about-section-outer'>
        {aboutSections.map(({ className, image, alt, subtitle, title, text }, index) => (
          <div className={`about ${className}${index % 2 ? ' about--reverse' : ''}`} key={title}>
            <div className='about-image-section'>
              <img src={image} alt={alt} />
            </div>
            <div className='about-description-section'>
              {subtitle && <p className='about-subtitle'>{subtitle}</p>}
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
