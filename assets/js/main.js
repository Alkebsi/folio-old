/*

********************************************************

》~ Project: MKebsi - Personal Website and Free Template 
》~ Version: v2.0.0
》~ Online Demo: https://alkebsi.github.io/

********************************************************

*/ 
// Generals
let pageWidth = window.innerWidth;
let pageHeight = window.innerHeight;

// The Loading
let loading =
document.getElementById("loading");
let logoAnime = 
document.getElementsByClassName("cls-2");
let logoAnimCon = 
document.getElementById("logo-con");
// Calling the loading animation before the page loads
AnimeJS(2);

// Page Elements
let work =
document.getElementById("work");
let contact =
document.getElementById("contact");

// Main Functions
function Start()
{
    // Removing the loading panel
    loading.style.opacity = '0';
    let loadingTimeMgr = setInterval(function(){loading.style.display = "none";}, 1000);
    
    // Activating the first animation
    AnimeJS(1);
    
    // Calling the motion blur functuon
    MotionBlur(1);
}

// animations using Anime.js
function AnimeJS(x)
{
    if(x == 1)
        {
            anime({
                targets: ['polygon', 'rect'],
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutExpo',
                duration: 2000,
                delay: 1500
            });
            anime({
                targets: ['path', 'circle'],
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutExpo',
                duration: 1000,
                delay: 1500
            });
            anime({
                targets: '.bc-circle',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutExpo',
                duration: 1000,
                delay: 3000
            });
            anime({
                targets: '.bc-line',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutExpo',
                duration: 1000,
                delay: 3500
            });
            anime({
                targets: '#intro',
                translateY: -pageHeight*1.5,
                easing: 'easeInExpo',
                duration: 500,
                delay: 4300
            });
        }
    else if (x == 2)
        {
            anime({
                targets: logoAnime[0],
                translateX: -18.2,
                d: 'M22.59,19.08V49.8A11.77,11.77,0,0,1,10.81,38V7.3A11.78,11.78,0,0,1,22.59,19.08Z',
                loop: true, 
                direction: 'alternate',
                duration: 2000,
                easing: 'easeInOutQuint'
            });
            anime({
                targets: logoAnime[1],
                translateX: 18.2,
                rotate: 720,
                d: 'M59.2,7.3V38A11.78,11.78,0,0,1,47.41,49.8V19.08A11.79,11.79,0,0,1,59.2,7.3Z',
                loop: true, 
                direction: 'alternate',
                duration: 2000,
                easing: 'easeInOutExpo'
            });
            anime({
                targets: logoAnime[2],
                baseFrequency: 1, 
                d: 'M40.89,16.42v40.4a5.89,5.89,0,0,1-11.78,0V16.42a5.89,5.89,0,1,1,11.78,0Z',
                scale: 1, 
                loop: true, 
                direction: 'alternate',
                duration: 2000,
                easing: 'easeInOutExpo'
            });
        }
    else
        {
            // Throw an error and reload the page telling where the error is
        }
}

// Buttons Manager
function Btns(x)
{
    if (x == 1)
    {
        work.style.transform = "translate(0, 0)";
        work.style.borderLeft = "0 solid var(--orange)";
        // Calling the particles to activate
        Particles();
    }
    else if (x == 2)
    {
        window.location = "assets/pdf/Mohammed Alkebsi's Resume.pdf";
    }
    else if (x == 3)
    {
        contact.style.display = "block";
        let timer = setTimeout(function(){contact.style.opacity = "1";}, 10);
    }
    else
    {
        // Throw an error and reload the page
    }
}

// Making the motion blur effect for the intro, ...ect
function MotionBlur(x)
{
    let intro = document.getElementById("intro");
    if(x == 1)
        {
            let setFilters = setTimeout(function(){
                intro.style.transition = "all 1s";
                intro.style.filter = "blur(30px)";
                TypedJS(1);
            }, 4300);
            let deleteElement = setTimeout(function(){
                intro.style.display = "none";
            }, 5500);
        }
    else
        {
            // Throw an error and reload the page telling where the error is
        }
}

//Activating the Typed.js library
function TypedJS(x)
{
    if (x == 1)
        {
            let aboutMe = new Typed('#about-txt', {
                strings: [
                    ' - About Me!', 
                    ' - About My Work',
                    ' - About My Education',
                    ' - About My Skills',
                    ' - What Can I Do?',
                    ' - What Can\'t I Do!',
                    ' - Where to Find Me?'
                ],
                typeSpeed: 80, 
                backSpeed: 30,
                backDelay: 2000,
                cursorChar: '______________',
                loop: true
            });
        }
    else
        {
            // Throw an error in the console and write a default option for all
        }
}

// Particles Manager
function Particles()
{
  particlesJS('particles-mgr',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"]
      },
      "shape": {
        "type": ["triangle", "circle"],
        "stroke": {
          "width": 0
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#000000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  });
}