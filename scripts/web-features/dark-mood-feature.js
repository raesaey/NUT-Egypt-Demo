export function toDarkMood() {
    const canvas = document.getElementById('starfield');
    const themeToggleBtn = document.querySelector('.theme-icon');

    // 1. فحص الحالة المحفوظة في localStorage وتطبيقها فور تشغيل الدالة
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
    }

    if (canvas) {
        const ctx = canvas.getContext('2d');
        let stars = [];
        const numStars = 100;
        let animationFrameId = null;

        const starCache = document.createElement('canvas');
        const starCacheCtx = starCache.getContext('2d');
        const starSize = 30;
        starCache.width = starSize;
        starCache.height = starSize;

        function drawAsteriskStar() {
            const cx = starSize / 2;
            const cy = starSize / 2;
            const length = 11;    
            const thickness = 2.8;  
            const color = '#E6C140'; 

            starCacheCtx.fillStyle = color;
            const points = 5; 

            for (let i = 0; i < points; i++) {
                const angle = (i * 2 * Math.PI) / points - (Math.PI / 2); 
                starCacheCtx.save();
                starCacheCtx.translate(cx, cy);
                starCacheCtx.rotate(angle);
                starCacheCtx.beginPath();
                starCacheCtx.roundRect(-thickness / 2, 0, thickness, length, thickness / 2);
                starCacheCtx.fill();
                starCacheCtx.restore();
            }
        }

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createStars();
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function createStars() {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    scale: Math.random() * 0.4 + 0.2,
                    speed: Math.random() * 0.4 + 0.1,
                    opacity: Math.random() * 0.7 + 0.3
                });
            }
        }

        function animate() {
            if (!document.body.classList.contains('dark-theme')) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                ctx.globalAlpha = star.opacity;
                const drawSize = starSize * star.scale;

                ctx.drawImage(
                    starCache,
                    0, 0, starSize, starSize,
                    star.x - drawSize / 2, star.y - drawSize / 2, drawSize, drawSize
                );

                ctx.globalAlpha = 1.0;
                star.y -= star.speed;

                if (star.y < 0) {
                    star.y = canvas.height;
                    star.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                if (document.body.classList.contains('dark-theme')) {
                    localStorage.setItem('theme', 'dark');
                    if (!animationFrameId) animate();
                } else {
                    localStorage.setItem('theme', 'light');
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            });
        }

        drawAsteriskStar();
        createStars();
        if (document.body.classList.contains('dark-theme')) {
            animate();
        }
    }
}