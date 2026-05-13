// Scroll reveal
        const revealEls = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 80);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealEls.forEach(el => observer.observe(el));

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', e => {
                const target = document.querySelector(a.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Nav on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            nav.style.borderBottomColor = window.scrollY > 40
                ? 'rgba(255,255,255,0.1)'
                : 'rgba(255,255,255,0.07)';
        });