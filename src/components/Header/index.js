// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-bg-container">
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-logo-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="header-logout-img"
      />
      <ul className="large-device-container">
        <li className="header-text">Home</li>
        <li className="header-text">Products</li>
        <li className="header-text">Cart</li>
        <button type="button" className="logout-btn">
          Logout
        </button>
      </ul>
    </div>
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-bar-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-bar-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
        alt="nav cart"
        className="nav-bar-image"
      />
    </div>
  </div>
)

export default Header
