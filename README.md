## **Neon Glowing Particles**  

### 🌟 **Project Overview**  
This project creates a **neon glowing text with animated floating particles** on a dark background. The effect simulates a cyberpunk-style neon glow with smooth animations.

![image](https://github.com/user-attachments/assets/22860fcb-ce27-44cf-8d87-1dfb1546637a)


### 🎨 **Features**  
✅ **Neon Glow Effect** – Text and particles emit a glowing aura.  
✅ **Floating Particles** – Particles move smoothly in random directions.  
✅ **Interactive Mouse Effect** – Particles react to mouse movement.  
✅ **Modern UI Design** – Styled for a sleek, futuristic aesthetic.  

---

## 🚀 **Installation & Setup**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/yourusername/neon-glowing-particles.git
cd neon-glowing-particles
```

### **2️⃣ Run with Python Server**  
```sh
python -m http.server 8080
```
Open **http://localhost:8080** in your browser.  

### **3️⃣ Run with Live Server (VS Code Extension)**  
- Open the project in **VS Code**  
- Install the **Live Server** extension  
- Click **"Go Live"**  

---

## 📁 **Project Structure**  
```
/neon-glowing-particles
│── index.html       # Main HTML file
│── style.css        # Styling for neon effects
│── script.js        # Handles animations and interactivity
│── assets/          # (Optional) Contains additional assets
└── README.md        # Project documentation
```

---

## 🎬 **How It Works**  
- The **text glows** using CSS `text-shadow` and `filter: blur()`.  
- **Particles** are generated and animated using JavaScript.  
- Mouse movement affects nearby particles, making them glow brighter.  
- Smooth animations are implemented using the **requestAnimationFrame()** function.  

---

## 🛠 **Technologies Used**  
- **HTML5** – Structure of the page  
- **CSS3** – Styling and neon glow effects  
- **JavaScript (Canvas API)** – Particle movement & animation  

---

## 🎨 **Customization**  
You can modify the **script.js** file to tweak effects:  
- **Change particle colors** in `drawParticles()`.  
- **Adjust glow intensity** in `style.css` under `.neon-text`.  
- **Increase/decrease number of particles** in `initParticles()`.  

---

## 🤝 **Contributing**  
Feel free to **fork** this project and add new features! Submit a **pull request** if you’d like to contribute.  
 
Enjoy the **neon glow effect**! 🚀✨
