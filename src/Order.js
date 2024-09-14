import { displayCart } from "./Cart";

const main = document.getElementById("content");

const createOrderPage = () => {
    main.replaceChildren();
    const orderSection = document.createElement("section");
    orderSection.id = "orderSection";

    const heading = document.createElement("h1");
    heading.innerHTML = "<span>Order</span> Now";

    const container = document.createElement("div");
    container.className = "container";

    const cart = displayCart();
    const form = createForm();

    container.appendChild(cart);
    container.appendChild(form);

    orderSection.appendChild(heading);
    orderSection.appendChild(container);

    main.appendChild(orderSection);

}

const createForm = () => {
    const form = document.createElement("form");

    const p = document.createElement("p");
    p.innerHTML = 'required fields are marked with <span style="color:red;">*</span>';
    form.appendChild(p);

    /* creating the name input */
    const nameDiv = document.createElement("div");
    const nameLabel = document.createElement("label");
    nameLabel.for = "name";
    nameLabel.innerHTML = 'Your Name <span style="color:red;">*</span>';
    nameDiv.appendChild(nameLabel);
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.placeholder = "Your Name";
    nameInput.autocomplete = "off";
    nameInput.required = "true";
    nameDiv.appendChild(nameInput);
    form.appendChild(nameDiv);

    /* creating email input */
    const emailDiv = document.createElement("div");
    const emailLabel = document.createElement("label");
    emailLabel.for = "email";
    emailLabel.innerText = "Your Email";
    emailDiv.appendChild(emailLabel);
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Your email";
    emailInput.autocomplete = "off";
    emailDiv.appendChild(emailInput);
    form.appendChild(emailDiv);

    /* creating number input */
    const telnumDiv = document.createElement("div");
    const telnumLabel = document.createElement("label");
    telnumLabel.for = "telnum";
    telnumLabel.innerHTML = 'Your Phone Number <span style="color:red;">*</span>';
    telnumDiv.appendChild(telnumLabel);
    const telnumInput = document.createElement("input");
    telnumInput.type = "tel";
    telnumInput.id = "telnum";
    telnumInput.name = "telnum";
    telnumInput.placeholder = "Your Phone Number";
    telnumInput.autocomplete = "off";
    telnumInput.required = "true";
    telnumDiv.appendChild(telnumInput);
    form.appendChild(telnumDiv);

    /* creating address input */
    const addressDiv = document.createElement("div");
    const addressLabel = document.createElement("label");
    addressLabel.for = "address";
    addressLabel.innerHTML = 'Your Address <span style="color:red;">*</span>';
    addressDiv.appendChild(addressLabel);
    const addressInput = document.createElement("input");
    addressInput.type = "text";
    addressInput.id = "address";
    addressInput.name = "address";
    addressInput.placeholder = "Your Address";
    addressInput.autocomplete = "off";
    addressInput.required = "true";
    addressDiv.appendChild(addressInput);
    form.appendChild(addressDiv);

    /* creating submit button */
    const btn = document.createElement("button");
    btn.type = "submit";
    btn.innerText = "Order now";
    form.appendChild(btn);

    form.addEventListener("submit",(e) => {
        e.preventDefault();
        alert("Thanks for ordering :)");
    });

    return form;
}

export default createOrderPage;