import PropTypes from 'prop-types';
import '../../src/App.css';


export default function Navbar({ categories, openMenuHandler, isSmallScreen }) {
 return (
    <nav>
      <div className="logo-wrapper">
         {
            isSmallScreen && (
               <div className="open-menu" onClick={openMenuHandler}>
                  <img src="/images/icon-menu.svg" alt="menu open button"/>
               </div>
            )
         }
         <div className="logo-container">
            <img src="/images/logo.svg" alt="" />
         </div>
      </div>
      {!isSmallScreen && (
         <ul className="nav-list">
            {categories.map((category, index) => {
               return (
                  <li key={index} className="nav-link">{category}</li>
               )
            })}
         </ul>
      )}
      <div className="cart-wrapper">
         <div className="cart">
            <img src="/images/icon-cart.svg" alt="cart" id="cart-icon"/>
            <span className="cart-items">1</span>
         </div>
         <div className="user">
            <img src="/images/image-avatar.png" alt="User Avatar" id="avatar"/>
         </div>
      </div>
    </nav>
 )   
}

Navbar.propTypes = {
   categories: PropTypes.array,
   openMenuHandler: PropTypes.func,
   isSmallScreen: PropTypes.bool,
}