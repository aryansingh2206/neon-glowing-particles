// Get Canvas & Context
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Resize Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle Array
let particles = [];
const numParticles = 150;

// Neon Colors
const neonColors = ["#ff00ff", "#00ffff", "#ff007f", "#ff9900", "#39ff14"];

// Particle Class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 2;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = neonColors[Math.floor(Math.random() * neonColors.length)];
        this.glowIntensity = Math.random() * 20 + 10;
    }

    // Update Particle Position
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce on edges
        if (this.x <= 0 || this.x >= canvas.width) this.speedX *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.speedY *= -1;
    }

    // Draw Particle with Glow
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Outer glow effect
        ctx.shadowBlur = this.glowIntensity;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        
        ctx.fill();
        ctx.closePath();
    }
}

// Create Particles
function initParticles() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
}

// Animate Particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dark overlay for smoother glow effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animateParticles);
}

// Mouse Interaction
canvas.addEventListener("mousemove", (e) => {
    particles.forEach((p) => {
        let dx = e.clientX - p.x;
        let dy = e.clientY - p.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
            p.x -= dx * 0.02;
            p.y -= dy * 0.02;
        }
    });
});

// Initialize & Start Animation
initParticles();
animateParticles();

// Resize Canvas on Window Resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});
