let header = `
    <!-- Header Section -->
              <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
          <i class="fa-solid fa-bars"></i>
        </label>
        <label class="logo"><a href="index.html">Ecommerce</a></label>
        <ul>
          <li><a class="active" href="index.html">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="addToCart.html" id="cartValue"><i class="fa-solid fa-cart-shopping"> 0 </i></a></li>
        </ul>
     
    <!-- Header Section End -->`;

    let headerElem = document.querySelector(".headerElem");

    headerElem.insertAdjacentHTML("afterbegin",header);

    