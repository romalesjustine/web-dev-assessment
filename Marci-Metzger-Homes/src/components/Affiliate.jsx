import './styles/Affiliate.css'
import affiliate1 from '../assets/affiliate1.png'
import affiliate2 from '../assets/affiliate2.png'
import affiliate3 from '../assets/affiliate3.png'
import affiliate4 from '../assets/affiliate4.png'

const affiliates = [
  { image: affiliate1, alt: 'The Ridge Realty Group' },
  { image: affiliate2, alt: 'Equal Housing Opportunity' },
  { image: affiliate3, alt: 'Realtor' },
  { image: affiliate4, alt: 'Nevada Realtors' },
]

export function Affiliate() {
  return (
    <section className="affiliate-section" aria-labelledby="affiliate-title">
      <div className="affiliate-content">
        <div className="affiliate-logos">
          <div className="affiliate-logo-track">
            <div className="affiliate-logo-group">
              {affiliates.map(({ image, alt }) => (
                <img key={alt} src={image} alt={alt} />
              ))}
            </div>
            <div className="affiliate-logo-group" aria-hidden="true">
              {affiliates.map(({ image, alt }) => (
                <img key={alt} src={image} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
