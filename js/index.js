const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);



let navlist = document.querySelector('header nav')
let newLink = document.createElement('a')

navlist.appendChild(newLink);





let nav = document.querySelectorAll('nav a');
for(let i = 0; i < nav.length;i++){
  const content = Object.values(siteContent.nav)
  nav[i].textContent = content[i];
  nav[i].style.color = 'green';
}
newLink.textContent = "More";
nav[nav.length -1].style.color = 'green';

let heroH1 = document.querySelector('.cta-text h1')
heroH1.textContent = siteContent.cta.h1

let heroBtn = document.querySelector('.cta-text button')
heroBtn.textContent = siteContent.cta.button

let heroImg = document.querySelector('.cta img')
heroImg.setAttribute('src', siteContent.cta['img-src'])
// bottom and top h4
let topH4 = document.querySelectorAll('.top-content h4')
let btmH4 = document.querySelectorAll('.bottom-content h4')

// bottom and top p
let topP = document.querySelectorAll('.top-content p')
let btmP = document.querySelectorAll('.bottom-content p')

// top content
topH4[0].textContent = siteContent['main-content']['features-h4']
topP[0].textContent = siteContent['main-content']['features-content']

topH4[1].textContent = siteContent['main-content']['about-h4']
topP[1].textContent = siteContent['main-content']['about-content']

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// bottom content
btmH4[0].textContent = siteContent['main-content']['services-h4']
btmP[0].textContent = siteContent['main-content']['services-content']

btmH4[1].textContent = siteContent['main-content']['product-h4']
btmP[1].textContent = siteContent['main-content']['product-content']

btmH4[2].textContent = siteContent['main-content']['vision-h4']
btmP[2].textContent = siteContent['main-content']['vision-content']

// contact content
document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4']
let contactP = document.querySelectorAll('.contact p')
for(let i = 0; i < contactP.length;i++){
  let content = Object.values(siteContent.contact)
  contactP[i].textContent = content[i+1]
}
// copyright/footer
document.querySelector('footer p').textContent = siteContent.footer.copyright;









