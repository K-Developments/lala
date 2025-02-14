const navMenu=document.getElementById("nav-menu"),navLink=document.querySelectorAll(".nav-link"),hamburger=document.getElementById("hamburger");hamburger.addEventListener("click",()=>{navMenu.classList.toggle("left-[0]"),hamburger.classList.toggle("ri-close-large-line")}),navLink.forEach(e=>{e.addEventListener("click",()=>{navMenu.classList.toggle("left-[0]"),hamburger.classList.toggle("ri-close-large-line")})}),window.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("navbar");document.getElementById("home"),0===window.scrollY?(e.classList.add("transparent-header"),e.classList.remove("white-header")):(e.classList.add("white-header"),e.classList.remove("transparent-header"))}),window.addEventListener("scroll",function(){let e=document.getElementById("navbar");window.scrollY>0?(e.classList.add("white-header"),e.classList.remove("transparent-header")):(e.classList.add("transparent-header"),e.classList.remove("white-header"))},{passive:!0});const projects=[{title:"Photographer Website",description:"A personal portfolio showcasing my skills and projects.",link:"#",image:"glizzer-site.jpg"},{title:"E-commerce Site",description:"An online store with a responsive design and shopping cart functionality.",link:"#",image:"girlysite.jpg"},{title:"Blog CMS",description:"A content management system for creating and managing blog posts.",link:"#"}];let currentIndex=0;const projectContainer=document.getElementById("projectContent");function showProject(e){let{title:t,description:n,image:r="default.jpg"}=projects[e];projectContainer.innerHTML=`
    <img src="${r}" alt="${t}" class="w-full max-w-md h-80 object-cover rounded-lg mb-4 mx-auto " loading="lazy">
    <h3 class="text-2xl font-semibold">${t}</h3>
    <p class="text-black mt-2">${n}</p>
  `}document.querySelectorAll("#prevBtn, #nextBtn").forEach(e=>{e.addEventListener("click",e=>{showProject(currentIndex="prevBtn"===e.target.id?(currentIndex-1+projects.length)%projects.length:(currentIndex+1)%projects.length)})}),showProject(currentIndex),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll("img[data-src]"),t=e=>{e.src=e.getAttribute("data-src"),e.onload=()=>e.classList.add("loaded")},n=new IntersectionObserver((e,n)=>{e.forEach(e=>{e.isIntersecting&&(t(e.target),n.unobserve(e.target))})},{threshold:.1});e.forEach(e=>{n.observe(e)})});const deferScript=()=>{let e=document.querySelectorAll("script[data-defer]");e.forEach(e=>{e.onload=()=>{e.classList.add("loaded")},e.src=e.getAttribute("data-defer"),e.removeAttribute("data-defer"),document.body.appendChild(e)})};document.addEventListener("DOMContentLoaded",deferScript);let resizeTimeout;window.addEventListener("resize",function(){clearTimeout(resizeTimeout),resizeTimeout=setTimeout(()=>{console.log("Window resized!")},100)}),document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("contactForm"),t=document.getElementById("response"),n=document.getElementById("loading"),r=document.getElementById("submitBtn");e.addEventListener("submit",function(a){a.preventDefault(),r.disabled=!0,n.style.display="block",t.innerHTML="";let s=new FormData(e);fetch("send_email.php",{method:"POST",body:s}).then(e=>e.text()).then(e=>{t.innerHTML=e}).catch(e=>{t.innerHTML="An error occurred: "+e}).finally(()=>{r.disabled=!1,n.style.display="none"})})});
  
  document.addEventListener("DOMContentLoaded", function () {
    const element = document.getElementById("final");

    function checkVisibility() {
      const elementRect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the element is in the viewport
      if (elementRect.top < viewportHeight && elementRect.bottom >= 0) {
        element.classList.add("animate"); // Add the animation class
      } else {
        element.classList.remove("animate"); // Remove the animation class when out of view
      }
    }

    // Listen for scroll events
    window.addEventListener("scroll", checkVisibility);

    // Check visibility on page load (in case the element is already in view)
    checkVisibility();
  });

  const aut = document.getElementById("author")
const btnn = document.getElementById("logobtn")

  btnn.addEventListener("click", () => {
    aut.classList.toggle("visible")
     aut.classList.toggle("opacity-[1]")
    
  })
