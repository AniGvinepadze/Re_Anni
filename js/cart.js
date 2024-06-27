let cartIcon = document.querySelector(".cart-icon");
let closeBtn = document.querySelector(".close-Btn");

cartIcon.addEventListener("click", () => {
  document.querySelector(".popup").classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("show");
});

fetch("../solodata.json")
  .then((response) => response.json())
  .then((products) => {
    console.log(products);

    const card = document.querySelector(".SoloProduct-Container");

    products.forEach((product) => {
      const quantityContainer = document.createElement("div");

      quantityContainer.className = "quantity-Containers";

      const minusBtn = document.createElement("button");
      minusBtn.textContent = "-";
      minusBtn.addEventListener("click", () => {
        minusQuantity(product.id);
      });
      quantityContainer.appendChild(minusBtn);
      const Input = document.createElement("input");
      Input.type = "number";
      Input.id = `quantity-${product.id}`;
      Input.value = 1;
      Input.min = 1;
      quantityContainer.appendChild(Input);

      const plusBtn = document.createElement("button");
      plusBtn.textContent = "+";

      plusBtn.addEventListener("click", () => plusQuantity(product.id));

      quantityContainer.appendChild(plusBtn);
      card.appendChild(quantityContainer);

      const addCartBtn = document.createElement("button");
      addCartBtn.textContent = "Add To Cart";

      addCartBtn.addEventListener("click", () => {
        const quantity = parseInt(
          document.getElementById(`quantity-${product.id}`).value
        );
        addToCart({ ...product, quantity });
      });
      card.appendChild(addCartBtn);
    });
  })
  .catch((error) => console.error("Error:", error));

function plusQuantity(myId) {
  const quantityInput = document.querySelector(`#quantity-${myId}`);
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function minusQuantity(myId) {
  const quantityInput = document.querySelector(`#quantity-${myId}`);
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProductIndex = cart.findIndex((p) => p.id === product.id);

  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartPopup();
}

function totalPrice(cart) {
  return cart.reduce((sum, p) => sum + Number(p.price) * Number(p.quantity), 2);
}

function totalQuantity(cart) {
  return cart.reduce((sum, p) => sum + Number(p.quantity), 0);
}

function updateCartPopup() {
  let cart = JSON.parse(localStorage.getItem("cart") || []);
  let total = totalPrice(cart);
  let items = totalQuantity(cart);

  const popup = document.querySelector(".popup");
  popup.textContent = "";

  cart.forEach((product, index) => {
    const itemElement = document.createElement("div");
    itemElement.textContent = `${product.name} - $${product.price} Quantity: ${product.quantity}`;
    itemElement.className = "item";

    const button = document.createElement("button");
    button.textContent = "remove";
    button.addEventListener("click", function () {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartPopup();
    });
    popup.appendChild(itemElement);
    popup.appendChild(button)
  });
  const totalEelement = document.createElement("div")
  totalEelement.textContent = `Total items: ${items}`
  popup.appendChild(totalEelement)

  const totalPrice = document.createElement("div")
  totalPrice.textContent = `Total Price : $${total}`
  popup.appendChild(totalPrice)
}
