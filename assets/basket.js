let table = document.querySelector(".table")
let tabletd = document.querySelectorAll("#btncount")
let basketCount = document.querySelector(".basket-count");
let totalamount=document.querySelector(".totalamountdiv--item")
let aa=  parseInt(totalamount)
arraybtn = []


document.addEventListener("DOMContentLoaded", () => {


    if (!localStorage.getItem("count")) {
        basketCount.textContent = "The product has not been added!"
    }

    else {
        JSON.parse(localStorage.getItem("basket")).forEach((product) => {
            table.innerHTML += `
            <tbody>
            <tr>
            <th scope="row">${product.id}</th>
            <td><img class="basket-img" src="${product.imgURL}" alt=""></td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.price}/${product.count}</td>
            <td id="btncount">${product.count}</td>
            <td id="basket-btn"><button   class="btn btn-success increasebuton">+</button>  <button class="btn decreasebuton btn-danger">-</button></td>
            <td><button class="remove"><i class=" fa-solid fa-trash"></i></button></td>
            </tr>
            </tbody>`
    
            aa.innerHTML+=`<span class="totalamount">${product.price*product.count}</span>`

            if (localStorage.getItem("basketcount")) {
                tabletd.forEach((item) => {
                    item.textContent = localStorage.getItem("basketcount")
                })
            }

            let decreasebuton = document.querySelectorAll(".decreasebuton")
            decreasebuton.forEach((item) => {
                item.addEventListener("click", function () {
                    if (this.parentElement.previousElementSibling.textContent > 1) {
                        let curentCount = --item.parentElement.previousElementSibling.textContent
                        item.parentElement.previousElementSibling.textContent = curentCount
                        localStorage.setItem("basketcount", curentCount)
                    }
                })
            })
            let increasebuton = document.querySelectorAll(".increasebuton")
            increasebuton.forEach((item) => {
                item.addEventListener("click", function () {

                    if (this.parentElement.previousElementSibling.textContent) {
                        let curentCount = ++item.parentElement.previousElementSibling.textContent
                        item.parentElement.previousElementSibling.textContent = curentCount
                        localStorage.setItem("basketcount", curentCount)
                    }

                })
            })
            let removebtn = document.querySelectorAll(".remove")
            // let previousBasket = JSON.parse(localStorage.getItem("basket"));
          
                removebtn.forEach((btn) => {
                    btn.addEventListener("click", function () {
                        if(window.confirm("Eminsiz?")){
                            this.parentElement.parentElement.remove()
                        }

                    })
                })
           
           
        })

    }

})
