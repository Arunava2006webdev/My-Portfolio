import { useEffect, useRef } from "react";

export default function StarBackground({ children }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let shootingStars = [];
    let animationId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    }

    function createStars() {
      stars = [];

      const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 9000
      );

      for (let i = 0; i < numberOfStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: (Math.random() - 0.5) * 0.15,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinkleDirection: 1,
        });
      }
    }

    function createShootingStar() {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 8 + 6,
        opacity: 1,
      });
    }

    function drawStars() {
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        star.opacity +=
          star.twinkleSpeed * star.twinkleDirection;

        if (star.opacity >= 1) {
          star.twinkleDirection = -1;
        }

        if (star.opacity <= 0.2) {
          star.twinkleDirection = 1;
        }

        ctx.beginPath();

        ctx.arc(
          star.x,
          star.y,
          star.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;

        ctx.fill();
      });
    }

    function drawShootingStars() {
      shootingStars.forEach((star, index) => {
        star.x -= star.speed;
        star.y += star.speed;
        star.opacity -= 0.015;

        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x + star.length,
          star.y - star.length
        );

        gradient.addColorStop(
          0,
          `rgba(255,255,255,${star.opacity})`
        );

        gradient.addColorStop(
          1,
          "rgba(0,0,0,0)"
        );

        ctx.beginPath();

        ctx.moveTo(star.x, star.y);

        ctx.lineTo(
          star.x + star.length,
          star.y - star.length
        );

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;

        ctx.stroke();

        if (star.opacity <= 0) {
          shootingStars.splice(index, 1);
        }
      });
    }

    function animate() {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      drawStars();
      drawShootingStars();

      animationId = requestAnimationFrame(animate);
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const shootingStarInterval = setInterval(() => {
      createShootingStar();
    }, 4000);

    animate();

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      clearInterval(shootingStarInterval);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* Nebula layers */}
      <div className="nebula nebula-one"></div>
      <div className="nebula nebula-two"></div>
      <div className="nebula nebula-three"></div>

      {/* Stars */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* Website content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}