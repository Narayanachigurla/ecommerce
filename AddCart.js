import React from 'react'
import './style.css'

const AddCart = () => {
  return (
    <>
      <nav className="headerElem">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fa-solid fa-bars"></i>
        </label>
        <label className="logo">
          <a href="index.html">Ecommerce</a>
        </label>
        <ul>
          <li><a className="active" href="index.html">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Login</a></li>
          <li>
            <a href="/addToCart.html" id="cartValue">
              <i className="fa-solid fa-cart-shopping"> {cartItems.length} </i>
            </a>
          </li>
        </ul>
      </nav>
      <section className="addToCartElement">
        <div className="container">
          <section>
            <div id="productCartContainer">
              {cartItems.map((item, index) => (
                <div className="cards" key={index} id="cardValue">
                  <article className="information2 [ card2 ]">
                    <div className="cart-category">
                      <span className="category">{item.category}</span>
                    </div>
                    <div className="imageContainer cart-img-container">
                      <img className="productImage" src={item.image} alt={item.name} />
                    </div>
                    <h2 className="productName cart-product-name">{item.name}</h2>
                    <p className="productPrice">{item.price}</p>
                    <div className="stockElement cart-incri-box">
                      <button className="cartIncriment">+</button>
                      <p className="productQuantity">1</p>
                      <button className="cartDecrement">-</button>
                    </div>
                    <a href="#" className="btn btn-warning bold-btn remove-to-cart-button cart-page-btn">
                      <i className="fa-solid fa-trash"></i> Remove
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </section>
          <section>
            <div id="productCartTotalElem">
              <div id="productcartTotalElement">
                <p>Selected Offer Summary</p>
                <div id="productOrderTotal">
                  <div className="sub-total-box">
                    <p>Subtotal : </p>
                    <div id="productSubTotal">{subtotal}</div>
                  </div>
                  <div className="sub-total-box">
                    <p>Tax : </p>
                    <p id="productTax">{tax}</p>
                  </div>
                  <hr />
                  <div className="sub-total-box">
                    <p>Total : </p>
                    <p id="productFinalTotal">{finalTotal}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
    
  )
}

export default AddCart