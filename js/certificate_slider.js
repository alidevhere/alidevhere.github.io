// Add this to your existing script section
document.addEventListener('DOMContentLoaded', function() {
    const certSlider = document.querySelector('.cert-slider');
    if (certSlider) {
        const wrapper = certSlider.querySelector('.slider-wrapper');
        const slides = certSlider.querySelectorAll('.cert-slide');
        const prevBtn = certSlider.querySelector('.prev');
        const nextBtn = certSlider.querySelector('.next');
        const dotsContainer = certSlider.querySelector('.slider-dots');
        let currentIndex = 0;

        // Create dots
        slides.forEach((_, index) => {
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
            currentIndex = Math.max(currentIndex - 1, 0);
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = Math.min(currentIndex + 1, slides.length - 1);
            updateSlider();
        });
    }
});