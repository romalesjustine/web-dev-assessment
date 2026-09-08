import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import "./styles/Service.css";


const SERVICES = [
  {
    image: service1,
    title: "Real estate done right",
    body: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
  },
  {
    image: service2,
    title: "Commercial & residential",
    body: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
  },
  {
    image: service3,
    title: "Rely on expertise",
    body: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
  },
];

export default function Service({
  eyebrow = "OUR SERVICES",
  title = "Local expertise, every direction.",
  services = SERVICES,
}) {
  return (
    <section className="service">
      <p className="service-eyebrow">{eyebrow}</p>
      <h2 className="service-title">{title}</h2>

      <div className="service-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">
              <img src={service.image} alt="" />
            </div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-body">{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}