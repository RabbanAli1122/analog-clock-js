# 🧾 Analog Clock UI

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![HTML](https://img.shields.io/badge/HTML5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)  
[![CSS](https://img.shields.io/badge/CSS3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)  
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ✅ Features

1. Live analog clock with moving hour and minute hands.
2. Beautiful, glassmorphism-based UI with glowing clock borders.
3. Lightweight and responsive design.
4. Google Fonts integration with `Monoton` and `Poppins`.
5. Runs entirely in the browser (no backend required).

## 🛠️ How It Works

```javascript
let hrot = 30 * h + m / 2;
let mrot = 6 * m;
let srot = 6 * s;

hour.style.transform = `rotate(${hrot}deg)`;
min.style.transform = `rotate(${mrot}deg)`;
sec.style.transform = `rotate(${srot}deg)`;
```
- It calculates rotation degrees of clock hands in real-time.
- Updates every second using setInterval().


## 📋 Requirements
- Modern browser (Chrome, Firefox, Safari, etc.)
- Internet connection to load Google Fonts (optional if fonts are hosted locally)


## 📂 Files in Repository
- ```index.html``` – Main HTML structure for the clock.
- ```stye.css```– Styling file for clock visuals and layout.
- ```script.js``` – JavaScript logic for time display and animations.
- ```LICENCE``` - MIT Licence

  
## 🚀 How to Run
```
# Clone the repository
git clone https://github.com/RabbanAli1122/analog-clock-ui.git
cd analog-clock-ui
# Open index.html in your browser
```

## 🌐 Live Demo
Check the live demo(github pages) here:  
https://rabbanali1122.github.io/Analog_Clock/


## 🖼️ Screenshot
### Clock UI
<img width="457" alt="Analog Clock UI Screenshot" src="https://github.com/user-attachments/assets/5685005b-631a-4799-acb3-3bee3f8027e6" />

## 🧠 Lessons Learned
1. CSS variables make dynamic styling like clock hands easier.
2. Positioning with transform and rotate() is essential for circular layouts.
3. Real-time DOM updates require efficient interval usage.


## 📄 License
This project is licensed under the MIT License. See the LICENSE file for full details.
Copy
Edit
