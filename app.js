particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 600,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#0000ff" // Couleur des particules en bleu foncé (#0000ff)
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 6,
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
            "color": "#3498db",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true, // Activer l'attraction par l'aimant
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true, // Activer l'interaction au survol
                "mode": "grab"
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 100,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Obtenez l'aimant
const magnet = document.getElementById("magnet");

// Fonction pour attirer les particules
function attractParticles(x, y) {
    const particles = document.getElementsByClassName("particles-js-el");

    for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const particleX = particle.getBoundingClientRect().left + particle.offsetWidth / 2;
        const particleY = particle.getBoundingClientRect().top + particle.offsetHeight / 2;

        const dx = x - particleX;
        const dy = y - particleY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) { // Distance d'attraction
            const forceX = dx / distance;
            const forceY = dy / distance;

            // Appliquez une force aux particules pour les attirer vers l'aimant
            particle.style.transform = `translate(${forceX * 20}px, ${forceY * 20}px)`;
        } else {
            // Réinitialisez la position des particules
            particle.style.transform = "translate(0, 0)";
        }
    }
}

// Écoutez le mouvement de la souris pour attirer les particules avec l'aimant
document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Définissez la position de l'aimant pour suivre la souris
    magnet.style.left = mouseX + "px";
    magnet.style.top = mouseY + "px";

    // Appelez la fonction pour attirer les particules
    attractParticles(mouseX, mouseY);
});
