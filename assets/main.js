let productsWrapper = document.querySelector(".products-wrapper");
let count = document.querySelector(".count")
let products = [{
  id: 1,
  name: "Crime and Punishment",
  writter: "Fyodor Dostoevsky",
  price: 15,
  imgURL: "https://m.media-amazon.com/images/I/81EcXiV-9WL._AC_UF1000,1000_QL80_.jpg",
  description: '1Lorem ipsum dolor sit amet consectetur.'
},
{
  id: 2,
  name: "Martin Eden",
  writter: "Cek London",
  price: 20,
  imgURL: "https://www.readandcobooks.co.uk/wp-content/uploads/martin-eden-london-9781528712187-cover.jpg",
  description: '2Lorem ipsum dolor sit amet consectetursit amet consectetur..'
},
{
  id: 3,
  name: "Da Vinci Code",
  writter: "Dan Brown",
  price: 16,
  imgURL: "https://cdn2.penguin.com.au/covers/original/9780552159715.jpg",
  description: '3Lorem ipsum dolor sit amet consectetur.sit amet consectetur.'
},
{
  id: 4,
  name: "Crime and Punishment",
  writter: "Wulf Dorn",
  price: 10,
  imgURL: "https://m.media-amazon.com/images/I/51kmu4bR41L.jpg",
  description: '4Lorem ipsum dolor sit amet consectetur.'
}
]
let button = []


document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("count")) {
    count.textContent = localStorage.getItem("count");
  }
  else{
    count.textContent = 0;
   }
  if (!localStorage.getItem("basket")) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
  products.forEach((product) => {
    productsWrapper.innerHTML += `<div class="col-3">
    <div class="card" data-id="${product.id}" style="width: 18rem;">
        <img src="${product.imgURL}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title"><span>Name:</span> <span>${product.name}</span></h5>
          <p class="card-text"><span>Writter:</span> <span>${product.writter}</span> </p>
          <p class="card-text"><span>Price:</span> <span>${product.price}</span> <span>$</span></p>
          <p class="card-text"><span>Description:</span> <span>${product.description}</span></p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
</div>`
  })
  Array.from(productsWrapper.children).forEach((item) => {
    button.push(item.children[0].children[1].children[4]);
  })
  button.forEach((btn) => {
    btn.addEventListener("click", function () {
      let previousBasket = JSON.parse(localStorage.getItem("basket"));
      let id = this.parentElement.parentElement.getAttribute("data-id");
      let name = this.parentElement.children[0].children[1].textContent;
      let existing = previousBasket.find((item) => item.id == id);

      if (existing) {
        existing.count++;
      }
      else {
        const obj = {
          id: id,
          name: name,
          writter: this.parentElement.children[1].children[1].textContent,
          price: this.parentElement.children[2].children[1].textContent,
          imgURL: this.parentElement.previousElementSibling.src,
          description: this.previousElementSibling.textContent,
          count: 1
        };
        previousBasket.push(obj);
      }

      localStorage.setItem("basket", JSON.stringify(previousBasket));
   
        

    let currentCount = Number(++count.textContent)
    count.textContent = currentCount;
    localStorage.setItem("count",currentCount);






      Swal.fire({
        position: 'bottom-right',
        icon: 'success',
        title: `${name} added to basket successfully!`,
        showConfirmButton: false,
        timer: 1500
      })



    })
  })
})
