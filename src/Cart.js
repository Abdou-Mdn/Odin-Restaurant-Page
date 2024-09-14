import createMenuPage from "./Menu";
import { updateNotification } from "./Menu";
import createOrderPage from "./Order";

let cart = [];

const isDishOnCart = (name) => {
    let dishOnCart = false;
    
    for(let i=0; i< cart.length;i++){
        if (cart[i].name == name) {
            indexOfDish = true;
            break;
        }
    }

    return dishOnCart;
}

export function addDishToCart(name,price) {
    const dishOnCart = isDishOnCart(name);

    if (dishOnCart == false) {
        const dish = {
            name: name,
            nos: 1,
            price: price
        };
        cart.push(dish);    
    }
}

export function clearCart() {
    cart = [];
}

export function getCartLength() {
    return cart.length;
}

const updateServingAndPrice = (index,totalPrice,totalServings) => {
    const price = document.getElementById(`price-${index}`);   
    price.innerText = `$${cart[index].nos * cart[index].price}`;

    const serving = document.getElementById(`serving-${index}`);
    serving.innerText = cart[index].nos;

    const total = document.getElementById("total");
    total.innerHTML = `Total: <span class="price">$${totalPrice}</span><span class="serving">${totalServings}</span>`;
}

export function updateCartContainer(){
    const cartSection = document.getElementById("cartSection");
    const orderSection = document.getElementById("orderSection");
    const oldCartContainer = document.getElementById("cartContainer");
    const newCartContainer = displayCart();

    if (orderSection == null) {
        cartSection.replaceChild(newCartContainer,oldCartContainer);
        updateNotification();
    } else {
        const container = orderSection.getElementsByClassName("container")[0];
        container.replaceChild(newCartContainer,oldCartContainer);
    }
    
}


export function displayCart() {
    const container = document.createElement("div");
    container.id = "cartContainer";

    const heading = document.createElement("h2");
    heading.innerText = "My Food Cart";
    container.appendChild(heading);

    if (cart.length) {
        const list = document.createElement("ul");

        const titles = document.createElement("li");
        titles.id = "titles";
        titles.innerHTML = '<span>Dish</span><span class="price">Price</span><span class="serving">Number of Servings</span>';
        list.appendChild(titles);

        let totalPrice = 0;
        let totalServings = 0;
        cart.forEach((dish) => {
            totalPrice += dish.price ;
            totalServings += dish.nos;
            const order = document.createElement("li");
            order.className = "order"
    
            const name = document.createElement("span");
            name.innerText = dish.name;
            order.appendChild(name);
    
            const price = document.createElement("span");
            price.className = "price";
            price.id = `price-${cart.indexOf(dish)}`;
            price.innerText = `$${dish.price * dish.nos}`;
            order.appendChild(price);
    
            const serving = document.createElement("div");
            serving.className = "serving";
    
            const minus = document.createElement("i");
            minus.classList.add("fa","fa-minus");
            minus.addEventListener("click",() => {
                if(dish.nos > 1) {
                    dish.nos--;
                    totalServings--
                    totalPrice -= dish.price;
                    updateServingAndPrice(cart.indexOf(dish),totalPrice,totalServings);
                }
                
            });
            serving.appendChild(minus);
    
            const number = document.createElement("span");
            number.id = `serving-${cart.indexOf(dish)}`;
            number.innerText = dish.nos ;
            serving.appendChild(number);
    
            const plus = document.createElement("i");
            plus.classList.add("fa","fa-plus");
            plus.addEventListener("click",() => {
                dish.nos++;
                totalServings++
                totalPrice += dish.price;
                updateServingAndPrice(cart.indexOf(dish),totalPrice,totalServings);
            });
            serving.appendChild(plus);
            order.appendChild(serving);

            const deleteBtn = document.createElement("i");
            deleteBtn.classList.add("fa","fa-trash");
            deleteBtn.addEventListener("click",() => {
                totalServings -= dish.nos;
                totalPrice -= (dish.price * dish.nos);
                cart.splice(cart.indexOf(dish),1);
                updateCartContainer();
            })
            order.appendChild(deleteBtn);
            list.appendChild(order);
        });
    
        const total = document.createElement("li");
        total.id = "total";
        total.innerHTML = `Total: <span class="price">$${totalPrice}</span><span class="serving">${totalServings}</span>`;
        list.appendChild(total);
        container.appendChild(list);

        const emptyBtn = document.createElement("button");
        emptyBtn.id = "emptyBtn";
        emptyBtn.innerText = "Empty Cart";
        emptyBtn.addEventListener("click",() => {
            clearCart();
            updateCartContainer();
        });
     
        const checkBtn = document.createElement("button");
        checkBtn.id = "checkBtn";
        checkBtn.innerText = "Check Out";
        checkBtn.addEventListener("click", () => {
             createOrderPage();
             orderBtn.classList.add("active");
             menuBtn.classList.remove("active");
             homeBtn.classList.remove("active");
        })
     
        const buttons = document.createElement("div");
        buttons.className = "buttons";
        buttons.appendChild(emptyBtn);
        buttons.appendChild(checkBtn);

        container.appendChild(buttons);
    } else {
        const link = document.createElement("a");
        link.id = "link";
        link.innerText = "Our Menu";
        link.addEventListener("click", (e) => {
            e.preventDefault();
            createMenuPage();
            menuBtn.classList.add("active");
            homeBtn.classList.remove("active");
            orderBtn.classList.remove("active");
        })

        const p = document.createElement("p");
        p.innerText = "Your cart is empty! please check ";
        p.appendChild(link);
        container.appendChild(p);
    }
    return container;
}