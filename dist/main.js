(()=>{"use strict";const e=document.getElementById("content"),t=document.createElement("div");t.className="container";function n(){const e=r();document.getElementById("notification").innerText=e,a()}const a=()=>{const e=document.getElementById("notification");"0"==e.innerText?e.style.display="none":e.style.display="inline-block"},c=()=>{const e=r(),t=document.createElement("div");t.id="cartBtn";const n=document.createElement("span");n.id="notification",n.innerText=e,t.appendChild(n);const a=document.createElement("img");return a.src="image/shopping-cart.svg",a.addEventListener("click",(()=>{overlay.classList.add("active"),cartSection.classList.add("active")})),t.appendChild(a),t},d=e=>{const t=e.target;let n=t.parentNode.children;n=[...n];const a=n.indexOf(t);for(let e=0;e<=a;e++)n[e].classList.remove("fa-star-o"),n[e].classList.add("fa-star");for(let e=4;e>a;e--)n[e].classList.remove("fa-star"),n[e].classList.add("fa-star-o")},i=(e,a,c)=>{const i=document.createElement("div");i.className="box";const s=document.createElement("i");s.classList.add("fa","fa-heart");const r=document.createElement("button");r.className="likeBtn",r.appendChild(s),r.addEventListener("click",(()=>{r.classList.toggle("liked")}));const m=document.createElement("div");m.className="imageContainer";const u=document.createElement("img");u.src="image/"+a,u.alt=e,m.appendChild(u);const h=document.createElement("h3");h.innerText=e;const E=document.createElement("p");E.innerText="Lorem ibiosum dolor sit amet consectetur, adipisicing elit.";const C=document.createElement("span");C.innerText="$"+c;const v=document.createElement("div");v.className="review";for(let e=0;e<5;e++){const e=document.createElement("i");e.classList.add("fa","fa-star-o"),e.addEventListener("click",(e=>d(e))),v.appendChild(e)}const f=document.createElement("button");f.className="addBtn",f.innerText="Add to Cart",f.addEventListener("click",(()=>{!function(e,t){const n=l(e);if(-1==n){const n={name:e,nos:1,price:t};o.push(n)}else o[n].nos++}(e,c),p(),n()})),i.appendChild(r),i.appendChild(m),i.appendChild(h),i.appendChild(E),i.appendChild(C),i.appendChild(v),i.appendChild(f),t.appendChild(i)},s=()=>{e.replaceChildren(),(()=>{const t=document.createElement("div");t.id="overlay",t.addEventListener("click",(()=>{t.classList.remove("active"),n.classList.remove("active")}));const n=document.createElement("section");n.id="cartSection";const a=document.createElement("i");a.classList.add("fa","fa-close"),a.id="closeBtn",a.addEventListener("click",(()=>{t.classList.remove("active"),n.classList.remove("active")}));const c=u();n.appendChild(a),n.appendChild(c),e.appendChild(t),e.appendChild(n)})(),(()=>{const n=document.createElement("section");n.id="menuSection";const a=document.createElement("h1");a.innerHTML="Our <span>Menu</span>";const d=c();i("Burger","burger.jpg",40),i("Pizza","pizza.jpg",60),i("Sandwich","sandwich.jpg",42.5),i("Hot Dog","hot_dog.jpg",12),i("Lasagna","lasagna.jpg",25),i("Pasta","pasta.jpg",46.5),i("Biryani","biryani.jpg",38),i("Juice","juice.jpg",10),i("Chocolate Drink","chocolate_drink.jpg",12),i("Ice Cream","ice_cream.jpg",7),i("Chocolate","chocolate.jpg",5),i("Cupcake","cupcake.jpg",4.5),n.appendChild(a),n.appendChild(d),n.appendChild(t),e.appendChild(n)})(),a()};let o=[];const l=e=>{let t=-1;for(let n=0;n<o.length;n++)if(o[n].name==e){t=n;break}return t};function r(){return o.length}const m=(e,t,n)=>{document.getElementById(`price-${e}`).innerText="$"+o[e].nos*o[e].price,document.getElementById(`serving-${e}`).innerText=o[e].nos,document.getElementById("total").innerHTML=`Total: <span class="price">$${t}</span><span class="serving">${n}</span>`};function p(){const e=document.getElementById("cartSection"),t=document.getElementById("orderSection"),a=document.getElementById("cartContainer"),c=u();null==t?(e.replaceChild(c,a),n()):t.getElementsByClassName("container")[0].replaceChild(c,a)}function u(){const e=document.createElement("div");e.id="cartContainer";const t=document.createElement("h2");if(t.innerText="My Food Cart",e.appendChild(t),o.length){const t=document.createElement("ul"),n=document.createElement("li");n.id="titles",n.innerHTML='<span>Dish</span><span class="price">Price</span><span class="serving">Number of Servings</span>',t.appendChild(n);let a=0,c=0;o.forEach((e=>{a+=e.price,c+=e.nos;const n=document.createElement("li");n.className="order";const d=document.createElement("span");d.innerText=e.name,n.appendChild(d);const i=document.createElement("span");i.className="price",i.id=`price-${o.indexOf(e)}`,i.innerText="$"+e.price*e.nos,n.appendChild(i);const s=document.createElement("div");s.className="serving";const l=document.createElement("i");l.classList.add("fa","fa-minus"),l.addEventListener("click",(()=>{e.nos>1&&(e.nos--,c--,a-=e.price,m(o.indexOf(e),a,c))})),s.appendChild(l);const r=document.createElement("span");r.id=`serving-${o.indexOf(e)}`,r.innerText=e.nos,s.appendChild(r);const u=document.createElement("i");u.classList.add("fa","fa-plus"),u.addEventListener("click",(()=>{e.nos++,c++,a+=e.price,m(o.indexOf(e),a,c)})),s.appendChild(u),n.appendChild(s);const h=document.createElement("i");h.classList.add("fa","fa-trash"),h.addEventListener("click",(()=>{o.splice(o.indexOf(e),1),p()})),n.appendChild(h),t.appendChild(n)}));const d=document.createElement("li");d.id="total",d.innerHTML=`Total: <span class="price">$${a}</span><span class="serving">${c}</span>`,t.appendChild(d),e.appendChild(t);const i=document.createElement("button");i.id="emptyBtn",i.innerText="Empty Cart",i.addEventListener("click",(()=>{o=[],p()}));const s=document.createElement("button");s.id="checkBtn",s.innerText="Check Out",s.addEventListener("click",(()=>{E(),orderBtn.classList.add("active"),menuBtn.classList.remove("active"),homeBtn.classList.remove("active")}));const l=document.createElement("div");l.className="buttons",l.appendChild(i),l.appendChild(s),e.appendChild(l)}else{const t=document.createElement("a");t.id="link",t.innerText="Our Menu",t.addEventListener("click",(e=>{e.preventDefault(),s(),menuBtn.classList.add("active"),homeBtn.classList.remove("active"),orderBtn.classList.remove("active")}));const n=document.createElement("p");n.innerText="Your cart is empty! please check ",n.appendChild(t),e.appendChild(n)}return e}const h=document.getElementById("content"),E=()=>{h.replaceChildren();const e=document.createElement("section");e.id="orderSection";const t=document.createElement("h1");t.innerHTML="<span>Order</span> Now";const n=document.createElement("div");n.className="container";const a=u(),c=(()=>{const e=document.createElement("form"),t=document.createElement("p");t.innerHTML='required fields are marked with <span style="color:red;">*</span>',e.appendChild(t);const n=document.createElement("div"),a=document.createElement("label");a.for="name",a.innerHTML='Your Name <span style="color:red;">*</span>',n.appendChild(a);const c=document.createElement("input");c.type="text",c.id="name",c.name="name",c.placeholder="Your Name",c.autocomplete="off",c.required="true",n.appendChild(c),e.appendChild(n);const d=document.createElement("div"),i=document.createElement("label");i.for="email",i.innerText="Your Email",d.appendChild(i);const s=document.createElement("input");s.type="email",s.id="email",s.name="email",s.placeholder="Your email",s.autocomplete="off",d.appendChild(s),e.appendChild(d);const o=document.createElement("div"),l=document.createElement("label");l.for="telnum",l.innerHTML='Your Phone Number <span style="color:red;">*</span>',o.appendChild(l);const r=document.createElement("input");r.type="tel",r.id="telnum",r.name="telnum",r.placeholder="Your Phone Number",r.autocomplete="off",r.required="true",o.appendChild(r),e.appendChild(o);const m=document.createElement("div"),p=document.createElement("label");p.for="address",p.innerHTML='Your Address <span style="color:red;">*</span>',m.appendChild(p);const u=document.createElement("input");u.type="text",u.id="address",u.name="address",u.placeholder="Your Address",u.autocomplete="off",u.required="true",m.appendChild(u),e.appendChild(m);const h=document.createElement("button");return h.type="submit",h.innerText="Order now",e.appendChild(h),e.addEventListener("submit",(e=>{e.preventDefault(),alert("Thanks for ordering :)")})),e})();n.appendChild(a),n.appendChild(c),e.appendChild(t),e.appendChild(n),h.appendChild(e)},C=document.getElementById("content"),v=()=>{C.replaceChildren(),(()=>{const e=document.createElement("section");e.id="heroSection";const t=document.createElement("div");t.className="container";const n=document.createElement("h1");n.innerHTML="Get Fresh <span>Food</span><br> in an Easy Way";const a=document.createElement("p");a.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, suscipit! Labore excepturi corrupti officiis natus quas amet tempora";const c=document.createElement("button");c.innerText="order now",c.addEventListener("click",(()=>{E(),orderBtn.classList.add("active"),menuBtn.classList.remove("active"),homeBtn.classList.remove("active")})),t.appendChild(n),t.appendChild(a),t.appendChild(c),e.appendChild(t),C.appendChild(e)})(),(()=>{const e=document.createElement("section");e.id="aboutSection";const t=document.createElement("div");t.className="container";const n=document.createElement("h2");n.innerHTML="<span>About</span> Us";const a=document.createElement("h3");a.innerHTML="Why choose us ?";const c=document.createElement("p");c.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam tempore laboriosam exercitationem tempora, blanditiis libero! Incidunt natus, dolorem, deleniti adipisci commodi repudiandae expedita dolor, atque libero id quasi sed.Qui, cumque!",t.appendChild(n),t.appendChild(a),t.appendChild(c),e.appendChild(t),C.appendChild(e)})(),(()=>{const e=document.createElement("section");e.id="teamSection";const t=document.createElement("h2");t.innerHTML="Our <span>Team</span>";const n=document.createElement("div");n.className="container";for(let e=1;e<5;e++){const t=document.createElement("div");t.className="profile";const a=document.createElement("img");a.src="image/chef"+e+".png",a.alt="chef "+e,a.className="pic";const c=document.createElement("div");c.className="infos";const d=document.createElement("h3");d.innerText="Chef "+e;const i=document.createElement("p");i.innerText="Lorem ibiosum dolor sit amet consectetur, adipisicing elit.";const s=document.createElement("div");s.className="socials";const o=document.createElement("a");o.href="#";const l=document.createElement("i");l.classList.add("fa","fa-facebook");const r=document.createElement("a");r.href="#";const m=document.createElement("i");m.classList.add("fa","fa-instagram");const p=document.createElement("a");p.href="#";const u=document.createElement("i");u.classList.add("fa","fa-twitter");const h=document.createElement("a");h.href="#";const E=document.createElement("i");E.classList.add("fa","fa-linkedin"),o.appendChild(l),r.appendChild(m),p.appendChild(u),h.appendChild(E),s.appendChild(o),s.appendChild(r),s.appendChild(p),s.appendChild(h),c.appendChild(d),c.appendChild(i),c.appendChild(s),t.appendChild(a),t.appendChild(c),n.appendChild(t)}e.appendChild(t),e.appendChild(n),C.appendChild(e)})()},f=document.getElementById("homeBtn"),L=document.getElementById("menuBtn"),g=document.getElementById("orderBtn");v(),f.addEventListener("click",(()=>{v(),f.classList.add("active"),L.classList.remove("active"),g.classList.remove("active")})),L.addEventListener("click",(()=>{s(),L.classList.add("active"),f.classList.remove("active"),g.classList.remove("active")})),g.addEventListener("click",(()=>{E(),g.classList.add("active"),L.classList.remove("active"),f.classList.remove("active")}))})();