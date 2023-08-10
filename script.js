// loader
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  
  setTimeout(function() {
    loader.style.opacity = "0";
    setTimeout(function() {
      loader.style.display = "none";
      content.style.display = "block";
    }, 500);
  }, 2000);
});

//shrinking on scroll for navbar
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

//hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerMenu.addEventListener("click", function() {
  mobileMenu.classList.toggle("active");
});

// Slide the gallery automatically
const gallery = document.querySelector('.gallery');
let currentIndex = 0;
const galleryItems = gallery.querySelectorAll('.gallery-item');

function slideGallery() {
  currentIndex++;
  if (currentIndex >= galleryItems.length) {
    currentIndex = 0;
  }
  gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideGallery, 4000);

//Clothes slideshow with changing in contents.
//Dot navigation into the slideshow
const slides = document.querySelectorAll('.slide');
const title = document.querySelector('.clothes-section .section-title');
const description = document.querySelector('.clothes-description');
const size = document.querySelector('.clothes-size');
const color = document.querySelector('.clothes-color');
const price = document.querySelector('.clothes-price');
const dotsContainer = document.querySelector('.dot-navigation');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function updateContent(slideIndex) {
  const clothes = [
    {
      title: 'FABS Hoodie',
      description: 'Our 100% cotton T-shirt, designed to provide the perfect fit while keeping you comfortably warm in cold and windy weather.',
      size: 'Size: S/M/L/XL/XXL',
      color: 'Color: Gray/Black',
      price: '$29.99'
    },
    {
      title: 'FABS Sweat Shirt',
      description: 'Crafting with 100% cotton fabric for exceptional comfort and a cozy feel. This sweatshirt offers a perfect fit and warmth.',
      size: 'Size: S/M/L/XL/XXL',
      color: 'Color: Gray/Black',
      price: '$19.99'
    },
    {
      title: 'FABS T-Shirt',
      description: 'Our stylish T-shirt, crafted from 100% cotton fabric. These hoodies offer the perfect combination of comfort, fit, and warmth.',
      size: 'Size: S/M/L/XL/XXL',
      color: 'Color: Gray/Black',
      price: '$24.99'
    },
    {
      title: 'FABS String Bags',
      description: 'Introducing our versatile string bag, made from polyether. This bag offers a lightweight and convenient solution for carrying your essential.',
      size: 'Size: Not Available',
      color: 'Color: Not Available',
      price: '$14.99'
    },
    {
      title: 'FABS Sweat Pants',
      description: 'These sweatpants offer a comfortable fit and are perfect for lounging or staying active with cotton material.',
      size: 'Size: S/M/L/XL/XXL',
      color: 'Color: Gray/Black',
      price: '$19.99'
    }
  ];

  title.textContent = clothes[slideIndex].title;
  description.textContent = clothes[slideIndex].description;
  size.textContent = clothes[slideIndex].size;
  color.textContent = clothes[slideIndex].color;
  price.textContent = clothes[slideIndex].price;
}

function createDot(index) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('active');
  }
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    updateContent(currentSlide);
    updateActiveDot();
  });
  dotsContainer.appendChild(dot);
}

function updateActiveDot() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

slides.forEach((slide, index) => {
  createDot(index);
});

showSlide(currentSlide);
updateContent(currentSlide);

function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  updateContent(currentSlide);
  updateActiveDot();
}

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 4000);

//sticky icons onscroll
window.onscroll = function () {
  showStickyIcons();
};

function showStickyIcons() {
  var stickyIcons = document.querySelector(".sticky-icons");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    stickyIcons.style.display = "block";
  } else {
    stickyIcons.style.display = "none";
  }
}


