import { addDishToCart,getCartLength,displayCart,updateCartContainer } from "./Cart";

const main = document.getElementById("content");
const container = document.createElement("div");
container.className = "container";

const createMenuPage = () => {
    main.replaceChildren();
    createSideCart();
    createMenuSection();
    handleNotificationDisplay();
}

const createMenuSection = () => {
    const menuSection = document.createElement("section");
    menuSection.id = "menuSection";

    const title = document.createElement("h1");
    title.innerHTML = "Our <span>Menu</span>";

    const cartBtn = createShoppingCart();

    createDishBox("Burger","burger.jpg",40);
    createDishBox("Pizza","pizza.jpg",60);
    createDishBox("Sandwich","sandwich.jpg",42.5);
    createDishBox("Hot Dog","hot_dog.jpg",12);
    createDishBox("Lasagna","lasagna.jpg",25);
    createDishBox("Pasta","pasta.jpg",46.5);
    createDishBox("Biryani","biryani.jpg",38.);
    createDishBox("Juice","juice.jpg",10);
    createDishBox("Chocolate Drink","chocolate_drink.jpg",12);
    createDishBox("Ice Cream","ice_cream.jpg",7);
    createDishBox("Chocolate","chocolate.jpg",5);
    createDishBox("Cupcake","cupcake.jpg",4.5);


    menuSection.appendChild(title);
    menuSection.appendChild(cartBtn);
    menuSection.appendChild(container);

    main.appendChild(menuSection);
}

export function updateNotification() {
    const length = getCartLength();
    const notification = document.getElementById("notification");
    notification.innerText = length ;

    handleNotificationDisplay();
}

const handleNotificationDisplay = () => {
    const notification = document.getElementById("notification");
    if (notification.innerText == "0") {
        notification.style.display = "none";
    }else {
        notification.style.display = "inline-block";
    }
}

const createShoppingCart = () => {
    const length = getCartLength();

    const cartBtn = document.createElement("div");
    cartBtn.id = "cartBtn";
    const notification = document.createElement("span");
    notification.id = "notification";
    notification.innerText = length ;
    cartBtn.appendChild(notification);
    const cartIcon = document.createElement("img");
    cartIcon.src = "image/shopping-cart.svg";
    cartIcon.addEventListener("click", () => {
        overlay.classList.add("active");
        cartSection.classList.add("active");
    })
    cartBtn.appendChild(cartIcon);

    return cartBtn;
}

const toggleFillStar = (event) => {
    const clickedStar = event.target;
    let allStars = clickedStar.parentNode.children;
    allStars = [...allStars]
    const index = allStars.indexOf(clickedStar);
    
    for(let i=0; i<= index; i++) {
        allStars[i].classList.remove("fa-star-o");
        allStars[i].classList.add("fa-star");
    }
    for(let i=4; i> index; i--) {
        allStars[i].classList.remove("fa-star");
        allStars[i].classList.add("fa-star-o");
    }
}

const createDishBox = (dishName,dishPic,dishPrice) => {
    const box = document.createElement("div");
    box.className = "box";
    /* creating like icon */
    const icon = document.createElement("i");
    icon.classList.add("fa","fa-heart");
    const likeBtn = document.createElement("button");
    likeBtn.className = "likeBtn";
    likeBtn.appendChild(icon);
    likeBtn.addEventListener("click",() => {
        likeBtn.classList.toggle("liked");
    });
    /* creating image */
    const imageContainer = document.createElement("div");
    imageContainer.className = "imageContainer";
    const image = document.createElement("img");
    image.src = "image/"+dishPic;
    image.alt = dishName;
    imageContainer.appendChild(image);
    /* creating name */
    const name = document.createElement("h3");
    name.innerText = dishName;
    /* creating bio */
    const bio = document.createElement("p");
    bio.innerText = "Lorem ibiosum dolor sit amet consectetur, adipisicing elit.";
    /* creating price */
    const price = document.createElement("span");
    price.innerText = "$"+ dishPrice;
    /* creating rating */
    const review = document.createElement("div");
    review.className = "review";
    for (let i=0; i<5; i++) {
        const star = document.createElement("i");
        star.classList.add("fa","fa-star-o");
        star.addEventListener("click",(e) => toggleFillStar(e));
        review.appendChild(star);
    }
    /* creating add to cart button */
    const btn = document.createElement("button");
    btn.className = "addBtn";
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", () => {
        addDishToCart(dishName,dishPrice);
        updateCartContainer();
        updateNotification();
    });
    /* appending everything */
    box.appendChild(likeBtn);
    box.appendChild(imageContainer);
    box.appendChild(name);
    box.appendChild(bio);
    box.appendChild(price);
    box.appendChild(review);
    box.appendChild(btn);

    container.appendChild(box);
}


const createSideCart = () => {
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.addEventListener("click",() => {
        overlay.classList.remove("active");
        cartSection.classList.remove("active");
    })

    const cartSection = document.createElement("section");
    cartSection.id = "cartSection";

    const closeBtn = document.createElement("i");
    closeBtn.classList.add("fa","fa-close");
    closeBtn.id = "closeBtn";
    closeBtn.addEventListener("click",() => {
        overlay.classList.remove("active");
        cartSection.classList.remove("active");
    });

   const cartContainer = displayCart();

   cartSection.appendChild(closeBtn);
   cartSection.appendChild(cartContainer);
  
   main.appendChild(overlay);
   main.appendChild(cartSection);
}


export default createMenuPage;