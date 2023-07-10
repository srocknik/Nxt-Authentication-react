// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-container">
      <div className="home-image-heading-container">
        <h1 className="small-home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-image"
        />
      </div>
      <div className="desc-container">
        <h1 className="large-home-heading">Clothes That Get YOU Noticed</h1>
        <p className="home-text">
          Fashion is part of the daily air and it does not quite that it changes
          all the time. Cloths have always been a maker of the era and we are in
          a revolution. Your fashion makes you been seen and heard that way you
          are. So celebrate the season new and exciting fashion in your own way.
        </p>
        <button type="button" className="home-btn">
          Shop Now
        </button>
      </div>
    </div>
  </div>
)

export default Home
