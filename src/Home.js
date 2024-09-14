import createOrderPage from "./Order";

const main = document.getElementById("content");

const createHomePage = () => {
    main.replaceChildren();
    createHeroSection();
    createAboutUsSection();
    createTeamSection();
}


const createHeroSection = () => {
    const heroSection = document.createElement("section");
    heroSection.id = "heroSection";

    /* creating the the heading and text for hero section */
    const container = document.createElement("div");
    container.className = "container";
    /* creating the heading */
    const heading = document.createElement("h1");
    heading.innerHTML = "Get Fresh <span>Food</span><br> in an Easy Way";
    /* creating the text paragraph */
    const text = document.createElement("p");
    text.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, suscipit! Labore excepturi corrupti officiis natus quas amet tempora" ;
    /* creating the call to action button */
    const btn = document.createElement("button");
    btn.innerText = "order now";
    btn.addEventListener("click",() => {
        createOrderPage();
        orderBtn.classList.add("active");
        menuBtn.classList.remove("active");
        homeBtn.classList.remove("active");
    });

    /* appending everything inside the container */
    container.appendChild(heading);
    container.appendChild(text);
    container.appendChild(btn);
    /* appending the image and the container inside the hero section */
    heroSection.appendChild(container);
    /* appending the hero sectio inside the content */
    main.appendChild(heroSection);
}

const createAboutUsSection = () => {
    const aboutSection = document.createElement("section");
    aboutSection.id = "aboutSection";

    /* creating the heading and the text */
    const container = document.createElement("div");
    container.className = "container";
    /* creating the heading */
    const heading = document.createElement("h2");
    heading.innerHTML = "<span>About</span> Us";
    /* creating the second heading */
    const heading2 = document.createElement("h3");
    heading2.innerHTML = "Why choose us ?";
    /* creating the text paragraph */
    const text = document.createElement("p");
    text.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam tempore laboriosam exercitationem tempora, blanditiis libero! Incidunt natus, dolorem, deleniti adipisci commodi repudiandae expedita dolor, atque libero id quasi sed.Qui, cumque!";
    /* appending everything inside the container */
    container.appendChild(heading);
    container.appendChild(heading2);
    container.appendChild(text);
    /* appending the image and the container inside the about us section */
    aboutSection.appendChild(container);
    /* appending the about us sectio inside the content */
    main.appendChild(aboutSection);
}

const createTeamSection = () => {
    const teamSection = document.createElement("section");
    teamSection.id = "teamSection"

    /* creating heading */
    const heading = document.createElement("h2");
    heading.innerHTML = "Our <span>Team</span>";
    /* creating the container */
    const container = document.createElement("div");
    container.className = "container";
    /** creating the chefs divs */

    for (let i=1; i<5; i++) {
        const profile = document.createElement("div");
        profile.className = "profile";
        /*** creating the image */
        const pic = document.createElement("img");
        pic.src = "image/chef"+i+".png";
        pic.alt = "chef "+i+"";
        pic.className = "pic";
        /*** creating the informations */
        const infos = document.createElement("div");
        infos.className = "infos";
        /**** creating the title */
        const name = document.createElement("h3");
        name.innerText = "Chef "+i;
        /**** creating paragraph  */
        const bio = document.createElement("p");
        bio.innerText = "Lorem ibiosum dolor sit amet consectetur, adipisicing elit.";
        /**** creating socials */
        const socials = document.createElement("div");
        socials.className = "socials";
        /***** creating facebook icon */
        const link1 = document.createElement("a");
        link1.href = "#";
        const facebook = document.createElement("i");
        facebook.classList.add("fa","fa-facebook");
        /***** creating instagram icon  */
        const link2 = document.createElement("a");
        link2.href = "#";
        const instagram = document.createElement("i");
        instagram.classList.add("fa","fa-instagram");
        /***** creating twitter icon */
        const link3 = document.createElement("a");
        link3.href = "#";
        const twitter = document.createElement("i");
        twitter.classList.add("fa","fa-twitter");
        /***** creating linkedin icon */
        const link4 = document.createElement("a");
        link4.href = "#";
        const linkedin = document.createElement("i");
        linkedin.classList.add("fa","fa-linkedin");

        link1.appendChild(facebook);
        link2.appendChild(instagram);
        link3.appendChild(twitter);
        link4.appendChild(linkedin);

        socials.appendChild(link1);
        socials.appendChild(link2);
        socials.appendChild(link3);
        socials.appendChild(link4);

        infos.appendChild(name);
        infos.appendChild(bio);
        infos.appendChild(socials);

        profile.appendChild(pic);
        profile.appendChild(infos);

        container.appendChild(profile);
    }


    teamSection.appendChild(heading);
    teamSection.appendChild(container);

    main.appendChild(teamSection);
}

export default createHomePage;