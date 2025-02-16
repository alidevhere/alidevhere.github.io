document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.project-slider');
    
    sliders.forEach(slider => {
        const wrapper = slider.querySelector('.slider-wrapper');
        const images = slider.querySelectorAll('.slider-image');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        const dotsContainer = slider.querySelector('.slider-dots');
        let currentIndex = 0;

        // Create dots
        images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
            dotsContainer.appendChild(dot);
        });

        function updateSlider() {
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            // Update dots
            dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        });

        // Auto-advance every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        }, 5000);
    });
});