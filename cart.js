let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "Apples",
    price: 60,
    imageUrl: "./images/products/apples.png",
    inCart: 0,
  },
  {
    name: "Bananas",
    price: 31,
    imageUrl: "./images/products/banana.png",
    inCart: 0,
  },
  {
    name: "Beetroot",
    price: 50,
    imageUrl: "./images/products/beetroot.png",
    inCart: 0,
  },
  {
    name: "Blueberry",
    price: 80,
    imageUrl: "./images/products/berry.png",
    inCart: 0,
  },
  {
    name: "Brinjal",
    price: 83,
    imageUrl: "./images/products/brinjal.png",
    inCart: 0,
  },
  {
    name: "Capsicum",
    price: 30,
    imageUrl: "./images/products/capsicum.png",
    inCart: 0,
  },
  {
    name: "Carrot",
    price: 20,
    imageUrl: "./images/products/carrot.png",
    inCart: 0,
  },
  {
    name: "Chilly",
    price: 10,
    imageUrl: "./images/products/chilly.png",
    inCart: 0,
  },
  {
    name: "Corn",
    price: 34,
    imageUrl: "./images/products/corn.png",
    inCart: 0,
  },
  {
    name: "Cucumber",
    price: 40,
    imageUrl: "./images/products/cucumber.png",
    inCart: 0,
  },
  {
    name: "Fig",
    price: 57,
    imageUrl: "./images/products/fig.png",
    inCart: 0,
  },
  {
    name: "Grape",
    price: 35,
    imageUrl: "./images/products/grape.png",
    inCart: 0,
  },
  {
    name: "Guava",
    price: 50,
    imageUrl: "./images/products/guava.png",
    inCart: 0,
  },
  {
    name: "Kiwi",
    price: 80,
    imageUrl: "./images/products/kiwi.png",
    inCart: 0,
  },
  {
    name: "Orange",
    price: 20,
    imageUrl: "./images/products/orange.png",
    inCart: 0,
  },
  {
    name: "Papaya",
    price: 50,
    imageUrl: "./images/products/papaya.png",
    inCart: 0,
  },
  {
    name: "Peach",
    price: 28,
    imageUrl: "./images/products/peach.png",
    inCart: 0,
  },
  {
    name: "Pineapple",
    price: 50,
    imageUrl: "./images/products/pineapple.png",
    inCart: 0,
  },
  {
    name: "Red Chilly",
    price: 10,
    imageUrl: "./images/products/red chilly.png",
    inCart: 0,
  },
  {
    name: "Strawberry",
    price: 70,
    imageUrl: "./images/products/strawberry.png",
    inCart: 0,
  },
  {
    name: "Tomato",
    price: 40,
    imageUrl: "./images/products/tomato.png",
    inCart: 0,
  },
];

// Step 1: Add event listener to the button
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    setItems(products[i]);
    totalCost(products[i]);
  });
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product,
      };
    }
    cartItems[product.name].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product,
    };
  }
  // console.log(cartItems);
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  window.location.reload();
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  // console.log(cartItems);
  var productContainer = document.getElementsByClassName("cart-products")[0];
  let CartTotal = document.querySelector(".cart-total-price");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class="row cartRow"> 
      <div class="col-md-4 col-sm-3 mr-5">
          <img src="${item.imageUrl}" alt="" srcset="">
        </div>
        <div class="col-md-8 mid-col col-sm-9">
          <h3 class="productTitle">${item.name}</h3>
        <span class="quantity">${item.inCart}</span>
        <span class="multiply">X</span>
        <span class="price">Rs <span class="price-amt">${item.price}</span></span>
        `;
    });

    CartTotal.innerHTML += `
    ${cartCost}
    `;
  }
}
let clearCartItems = document.querySelector(".clearCart");
clearCartItems.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

displayCart();

// Step 1: Select the button for an event
// var addToCartBttons = document.getElementsByClassName("add-cart");
// for (let i = 0; i < addToCartBttons.length; i++) {
//   var button = addToCartBttons[i];
//   button.addEventListener("click", addToCartClicked);
// }

// Step 2: Get the item title, price, and image
// function addToCartClicked(event) {
//   var button = event.target;
//   console.log(button);
//   var shopItem = button.parentElement.parentElement.children[0];
//   var title = shopItem.children[3].innerText;
//   var price = shopItem.children[5].innerText.slice(3, 5);
//   var image = shopItem.children[2].src;
//   addItemToCart(title, price, image);
//   updateCartTotal();
// }

// Step 3: Display the row
// function addItemToCart(title, price, image) {
//   var cartRow = document.createElement("div");
//   cartRow.classList.add("row");
//   var cartItems = document.getElementsByClassName("cart-products")[0];
//   var cartItemsPresent = cartItems.getElementsByClassName("productTitle");

//   for (let i = 0; i < cartItemsPresent.length; i++) {
//     if (cartItemsPresent[i].innerText == title) {
//       alert("Already added");
//       return;
//     }
//   }

//   var cartRowContents = `
//   <div class="col-md-4">
//     <img src="${image}" alt="" srcset="">
//   </div>
//   <div class="col-md-6 mid-col">
//     <h3 class="productTitle">${title}</h3>
//     <span class="quantity">1</span>
//   <span class="multiply">X</span>
//   <span class="price">Rs <span class="price-amt">${price}</span></span>
//   </div>
//   <div class="col-md-2"><i class="fa-solid fa-xmark"></i></div>
//   `;
//   cartRow.innerHTML = cartRowContents;
//   cartItems.append(cartRow);
//   cartRow
//     .getElementsByClassName("fa-xmark")[0]
//     .addEventListener("click", removeCartRow);
// }

// Step 4: Select the remove icon
// var removeCartItemButton = document.getElementsByClassName("fa-xmark");

// for (let i = 0; i < removeCartItemButton.length; i++) {
//   var button = removeCartItemButton[i];
//   button.addEventListener("click", removeCartRow);
// }

// Step 5: Remove cart row
// function removeCartRow(event) {
//   var buttonClicked = event.target;
//   buttonClicked.parentElement.parentElement.remove();
//   updateCartTotal();
// }

// Step 7: Select the input value
// function quantityInput() {
//   var quantityInputs = document.getElementsByClassName("quantity-input");
//   for (let i = 0; i < quantityInputs.length; i++) {
//     var input = quantityInputs[i];
//     input.addEventListener("change", quantityChanged);
//   }
// }

// Step 8: If quantity changed then update total value
// function quantityChanged(event) {
//   var input = event.target;
//   if (isNaN(input.value) || input.value < 1) {
//     input.value = 1;
//   }

//   setQuantity(input.value);
//   updateCartTotal();
// }

// function setQuantity(value) {
//   console.log("inside set quantity");
//   console.log(value);
//   localStorage.setItem("quantity", value);
// }

// Step 6: Update cart Total
// function updateCartTotal() {
//   var cartItemContainer = document.getElementsByClassName("cart-modal")[0];
//   var cartRows = cartItemContainer.getElementsByClassName("row");
// console.log(cartRows);
// var total = 0;
// for (let i = 0; i < cartRows.length; i++) {
//   var cartRow = cartRows[i];
//   var priceElement = cartRow.getElementsByClassName("price-amt")[0];
//   var quantityElement = cartRow.getElementsByClassName("quantity")[0];
//   var price = parseInt(priceElement.innerText);
//   var quantity = parseInt(quantityElement.innerText);
//   total = total + price * quantity;
// }

// console.log(total);
// var cartTotalPrice = (document.getElementsByClassName(
//     "cart-total-price"
//   )[0].innerText = total);
// }

// quantityInput();
