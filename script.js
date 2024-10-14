const toggleButton = document.getElementById('dark-mode-toggle');
const argentinaButton = document.getElementById('argentina-btn');
const usaButton = document.getElementById('usa-btn');
const body = document.body;

function translateToEnglish() {
    document.getElementById('home-title').textContent = "Hi, I'm Camille Denoy";
    document.getElementById('home-subtitle').textContent = "Web Developer";
    document.getElementById('home-description').textContent = "Here you'll find some of my recent projects and work.";
    document.getElementById('contact-btn').textContent = "Contact me";
    document.getElementById('follow-text').textContent = "You can follow me on";
}

function translateToSpanish() {
    document.getElementById('home-title').textContent = "Hola, soy Camille Denoy";
    document.getElementById('home-subtitle').textContent = "Desarrollador Web";
    document.getElementById('home-description').textContent = "Aquí encontrarás algunos de mis proyectos y trabajos recientes.";
    document.getElementById('contact-btn').textContent = "Contáctame";
    document.getElementById('follow-text').textContent = "Puedes seguirme en";
}

usaButton.addEventListener('click', () => {
    translateToEnglish();
});

argentinaButton.addEventListener('click', () => {
    translateToSpanish();
});

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️'; 
    } else {
        toggleButton.textContent = '🌙'; 
    }
});
