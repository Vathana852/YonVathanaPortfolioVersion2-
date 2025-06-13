function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('show');
  document.body.classList.toggle('dropdown-open', menu.classList.contains('show'));

  
}





// Smooth scroll and close dropdown on menu click
document.querySelectorAll('.navbar-menu a, .dropdown-menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    document.getElementById('dropdownMenu').classList.remove('show');
    document.body.classList.remove('dropdown-open');
  });
});

// Animate on scroll for .animate-on-scroll
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll, .progress').forEach(element => {
    observer.observe(element);
  });
});


// Animate left/right columns when they scroll into and out of view
  document.addEventListener('DOMContentLoaded', function() {
    const left = document.querySelector('.left-column');
    const right = document.querySelector('.right-column');

    function animateOnScroll(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          left.classList.add('animate-in');
          left.classList.remove('animate-out');
          right.classList.add('animate-in');
          right.classList.remove('animate-out');
        }
      });
    }

    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.3
    });

    observer.observe(document.querySelector('#heropage'));
  });


  




// Text animation title Hero
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// Skill process animation
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    const progress = skill.querySelector('.progress');
    const width = progress.getAttribute('data-width');
    progress.style.width = width;
  });

});


  // Portfolio filter logic
  document.querySelectorAll('input[name="checkbox"]').forEach(input => {
    input.addEventListener('change', function() {
      const selected = this.id;
      const cards = document.querySelectorAll('.cards .project');
      if (selected === 'all') {
        cards.forEach(card => card.style.display = 'flex');
      } else {
        cards.forEach(card => {
          if (card.classList.contains(selected)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }
      // Center the visible cards
      const cardsContainer = document.querySelector('.cards');
      cardsContainer.style.justifyContent = 'center';
    });
  });
