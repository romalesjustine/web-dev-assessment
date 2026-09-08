import './styles/Address.css'
import addressPic from '../assets/address-pic.png'

export function Address() {
  return (
    <section
      className="address-section"
      style={{ backgroundImage: `url(${addressPic})` }}
    >
      <div className="address-content">
        <p className="address-eyebrow">YOUR NEXT ADDRESS</p>
        <h2>Find your dream home.</h2>
        <p className="address-intro">
          Tell us what you&apos;re looking for and we&apos;ll create a tailored
          search for your perfect home in Pahrump and surrounding Southern Nevada communities.
        </p>

        <form className="property-search">
          <label>
            Location
            <select defaultValue="">
              <option value="">Any</option>
              <option>Pahrump</option>
              <option>Las Vegas</option>
            </select>
          </label>

          <label>
            Type
            <select defaultValue="">
              <option value="">Any</option>
              <option>House</option>
              <option>Condo</option>
              <option>Land</option>
            </select>
          </label>

          <label>
            Sort By
            <select defaultValue="">
              <option value="">Any</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </label>

          <label>
            Bedrooms
            <select defaultValue="">
              <option value="">Any Number</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
          </label>

          <label>
            Baths
            <select defaultValue="">
              <option value="">Any Number</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
          </label>

          <label>
            Min Price
            <input type="number" placeholder="Min" />
          </label>

          <label>
            Max Price
            <input type="number" placeholder="Max" />
          </label>

          <button type="submit">SEARCH NOW</button>
        </form>
      </div>
    </section>
  )
}