export function initToRentSection() {
    const modal = document.getElementById('mapModal');
    const closeBtn = document.querySelector('.close-modal');
    const mapIframe = document.getElementById('mapIframe');
    const mapTitle = document.getElementById('mapTitle');
    const locationBtns = document.querySelectorAll('.location-btn');
    const rentCards = document.querySelectorAll('.to-rent-card');

    if (modal && closeBtn && mapIframe) {
        locationBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const location = btn.dataset.location || 'Cairo, Egypt';
                
                if (mapTitle) mapTitle.textContent = `Location: ${location}`;
                mapIframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
                
                modal.classList.add('show');
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            mapIframe.src = '';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                mapIframe.src = '';
            }
        });
    }

    rentCards.forEach(card => {
        const hoursSelect = card.querySelector('.hours-select');
        const priceDisplay = card.querySelector('.price');
        const pricePerHour = parseFloat(card.dataset.pricePerHour);

        if (hoursSelect && priceDisplay && !isNaN(pricePerHour)) {
            hoursSelect.addEventListener('change', (e) => {
                const hours = parseInt(e.target.value, 10);
                const totalPrice = hours * pricePerHour;
                priceDisplay.textContent = `$${totalPrice}`;
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', initToRentSection);