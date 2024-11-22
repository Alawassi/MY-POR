// StarryBackground.js
import React, { useEffect } from 'react';

const StarryBackground = () => {
    useEffect(() => {
        const canvas = document.getElementById('starry-canvas');
        const ctx = canvas.getContext('2d');
        let WIDTH, HEIGHT, mouseMoving = false, mouseX, mouseY;
        const stars = [], dots = [];
        const params = {
            maxDistFromCursor: 50,
            dotsSpeed: 0,
            backgroundSpeed: 0
        };
        const initStarsPopulation = 80;
        const dotsMinDist = 2;

        function setCanvasSize() {
            WIDTH = window.innerWidth;
            HEIGHT = window.innerHeight;
            canvas.width = WIDTH;
            canvas.height = HEIGHT;
        }

        function Star(id, x, y) {
            this.id = id;
            this.x = x;
            this.y = y;
            this.r = Math.floor(Math.random() * 2) + 1;
            let alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
            this.color = `rgba(0,204,204,${alpha})`;
        }

        Star.prototype.draw = function () {
            ctx.fillStyle = this.color;
            ctx.shadowBlur = this.r * 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            ctx.closePath();
            ctx.fill();
        };

        Star.prototype.move = function () {
            this.y -= 0.15 + params.backgroundSpeed / 100;
            if (this.y <= -10) this.y = HEIGHT + 10;
            this.draw();
        };

        function Dot(id, x, y) {
            this.id = id;
            this.x = x;
            this.y = y;
            this.r = Math.floor(Math.random() * 5) + 1;
            this.a = 0.5;
            this.color = `rgba(0,204,204,${this.a})`;
        }

        Dot.prototype.draw = function () {
            ctx.fillStyle = this.color;
            ctx.shadowBlur = this.r * 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            ctx.closePath();
            ctx.fill();
        };

        function init() {
            ctx.strokeStyle = 'white';
            ctx.shadowColor = 'white';
            for (let i = 0; i < initStarsPopulation; i++) {
                stars[i] = new Star(i, Math.random() * WIDTH, Math.random() * HEIGHT);
            }
            animate();
        }

        function animate() {
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            for (let i in stars) stars[i].move();
            for (let i in dots) dots[i].draw();
            requestAnimationFrame(animate);
        }

        window.onmousemove = (e) => {
            mouseMoving = true;
            mouseX = e.clientX;
            mouseY = e.clientY;
            setTimeout(() => { mouseMoving = false; }, 100);
        };

        window.onresize = setCanvasSize;

        setCanvasSize();
        init();

        return () => {
            window.onmousemove = null;
            window.onresize = null;
        };
    }, []);

    return <canvas id="starry-canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default StarryBackground;
