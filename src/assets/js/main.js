/**
 * Created by sanchez 
 */
'use strict';

//check the environment
// if (process.env.NODE_ENV !== 'production') {
//     console.log('Looks like we are in development mode!');
// }

// import CSS
// import animate_css from 'animate.css/animate.min.css';
import css from '../css/css.css';
import scss from '../css/sass.scss';

import { MyClass } from './entities/MyClass';

const wes = new MyClass('Wes');


// The canvas setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let fillStyle = 'rgba(0, 0, 0, 0.9)'
let width = canvas.width = innerWidth;
let height = canvas.height = innerHeight;
ctx.fillStyle = fillStyle;
ctx.fillRect(0, 0, width, height);
// People sometime resize the window(assholes)
window.addEventListener('resize', () => {
    width = canvas.width = innerWidth;
    height = canvas.height = innerHeight;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(0, 0, width, height);
});


const loop = () => {
    // Forever ever? FOREVER!!!
    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);




//Stats JavaScript Performance Monitor
import Stats from 'stats.js';
showStats();
function showStats() {
    var stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    var fs = document.createElement('div');
    fs.style.position = 'absolute';
    fs.style.left = 0;
    fs.style.top = 0;
    fs.style.zIndex = 999;
    fs.appendChild(stats.domElement);
    document.body.appendChild(fs);

    function animate() {
        stats.begin();
        // monitored code goes here
        stats.end();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}