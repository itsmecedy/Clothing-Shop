const shop = document.getElementById("shop");

shopItemsData = [
  {
    id: "item1",
    name: "Casual Shirt",
    price: 100,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "./images/img-1.jpg",
  },
  {
    id: "item2",
    name: "Office Shirt",
    price: 150,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "./images/img-2.jpg",
  },
  {
    id: "item3",
    name: "T Shirt",
    price: 200,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "./images/img-3.jpg",
  },
  {
    id: "item4",
    name: "Mens Suit",
    price: 250,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    img: "./images/img-4.jpg",
  },
];
const generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, img, name, description, price } = x;
      return `
      <div class="item">
        <img width="220px" src="${img}" alt="${id}" />
        <div class="details">
          <h3>${name}</h3>
          <p>${description}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id="${id}" class="quantity">0</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};
generateShop();

let increment = (id) => {
  let selectedItem = id;
  console.log(selectedItem.id);
};
let decrement = (id) => {
  console.log(id);
};
let update = () => {};
