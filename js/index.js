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
logo.setAttribute('src', siteContent["nav"]["img-src"])
// end

// header
let navObj1 = document.querySelector('a:nth-of-type(1)');
navObj1.textContent = siteContent['nav']['nav-item-1']
let navObj2 = document.querySelector('a:nth-of-type(2)');
navObj2.textContent = siteContent['nav']['nav-item-2']
let navObj3 = document.querySelector('a:nth-of-type(3)');
navObj3.textContent = siteContent['nav']['nav-item-3']
let navObj4 = document.querySelector('a:nth-of-type(4)');
navObj4.textContent = siteContent['nav']['nav-item-4']
let navObj5 = document.querySelector('a:nth-of-type(5)');
navObj5.textContent = siteContent['nav']['nav-item-5']
let navObj6 = document.querySelector('a:nth-of-type(6)');
navObj6.textContent = siteContent['nav']['nav-item-6']

//cta
let h1 = document.querySelector("h1")
let br = document.createElement("br")
let br2 = document.createElement("br")
let h1text1 = document.createTextNode("DOM")
let h1text2 = document.createTextNode("Is")
let h1text3 = document.createTextNode("Awesome")
h1.appendChild(h1text1)
h1.appendChild(br)
h1.appendChild(h1text2)
h1.appendChild(br2)
h1.appendChild(h1text3)
let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button']
let img2 = document.getElementById("cta-img");
img2.setAttribute('src',siteContent['cta']['img-src'])


// main content
let paragraphsTopHeading1 = document.querySelector('div .top-content .text-content:nth-of-type(1) h4');
paragraphsTopHeading1.textContent = siteContent['main-content']['features-h4']
let paragraphsTopParagraph1 = document.querySelector('div .top-content .text-content:nth-of-type(1) p');
paragraphsTopParagraph1.textContent = siteContent['main-content']['features-content']
let paragraphsTopHeading2 = document.querySelector('div .top-content .text-content:nth-of-type(2) h4');
paragraphsTopHeading2.textContent = siteContent['main-content']['about-h4']
let paragraphsTopParagraph2 = document.querySelector('div .top-content .text-content:nth-of-type(2) p');
paragraphsTopParagraph2.textContent = siteContent['main-content']['about-content']

let img3 = document.getElementById("middle-img");
img3.setAttribute('src', siteContent['main-content']['middle-img-src'])

let paragraphsBottomHeading1 = document.querySelector('div .bottom-content .text-content:nth-of-type(1) h4');
paragraphsBottomHeading1.textContent = siteContent['main-content']['services-h4']
let paragraphsBottomParagraph1 = document.querySelector('div .bottom-content .text-content:nth-of-type(1) p');
paragraphsBottomParagraph1.textContent = siteContent['main-content']['services-content']
let paragraphsBottomHeading2 = document.querySelector('div .bottom-content .text-content:nth-of-type(2) h4');
paragraphsBottomHeading2.textContent = siteContent['main-content']['product-h4']
let paragraphsBottomParagraph2 = document.querySelector('div .bottom-content .text-content:nth-of-type(2) p');
paragraphsBottomParagraph2.textContent = siteContent['main-content']['product-content']
let paragraphsBottomHeading3 = document.querySelector('div .bottom-content .text-content:nth-of-type(3) h4');
paragraphsBottomHeading3.textContent = siteContent['main-content']['vision-h4']
let paragraphsBottomParagraph3 = document.querySelector('div .bottom-content .text-content:nth-of-type(3) p');
paragraphsBottomParagraph3.textContent = siteContent['main-content']['vision-content']

//contact
let contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent['contact']['contact-h4']

let contactAddress = document.querySelector('.contact p:nth-of-type(1)')
contactAddress.textContent = siteContent['contact']['address']
let contactPhone = document.querySelector('.contact p:nth-of-type(2)')
contactPhone.textContent = siteContent['contact']['phone']
let contactEmail = document.querySelector('.contact p:nth-of-type(3)')
contactEmail.textContent = siteContent['contact']['email']

//footer
let footerInfo = document.querySelector('footer p');
footerInfo.textContent = siteContent['footer']['copyright']

