import createHomePage from "./Home"
import createMenuPage from "./Menu";
import createOrderPage from "./Order"

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const orderBtn = document.getElementById("orderBtn");

const LoadContent = () => {
    createHomePage();
    homeBtn.addEventListener("click",()=>{
        createHomePage();
        homeBtn.classList.add("active");
        menuBtn.classList.remove("active");
        orderBtn.classList.remove("active");
    });
    menuBtn.addEventListener("click",()=>{
        createMenuPage();
        menuBtn.classList.add("active");
        homeBtn.classList.remove("active");
        orderBtn.classList.remove("active");
    });
    orderBtn.addEventListener("click",()=>{
        createOrderPage();
        orderBtn.classList.add("active");
        menuBtn.classList.remove("active");
        homeBtn.classList.remove("active");
    });
}

export default LoadContent;