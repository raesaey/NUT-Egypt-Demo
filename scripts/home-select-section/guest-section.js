export function chooseGuests() {

    const guestsContainer = document.querySelector('.guests-card, .guests-box');
    
    if (!guestsContainer) return;

    const guestsDropdown = guestsContainer.querySelector('.guests-dropdown');
    const guestsSummary = guestsContainer.querySelector('#guestsSummary');

    if (!guestsDropdown || !guestsSummary) return;

    const counts = {
        adults: 1,
        teens: 0,
        children: 0
    };


    guestsContainer.addEventListener('click', (e) => {

        if (!guestsDropdown.contains(e.target)) {
            guestsContainer.classList.toggle('open');
            guestsDropdown.classList.toggle('active');
        }
    });

    document.addEventListener('click', (e) => {
        if (!guestsContainer.contains(e.target)) {
            guestsContainer.classList.remove('open');
            guestsDropdown.classList.remove('active');
        }
    });

    guestsContainer.querySelectorAll('.counter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            const type = btn.dataset.type;
            const isPlus = btn.classList.contains('plus');

            if (isPlus) {
                counts[type]++;
            } else if (counts[type] > (type === 'adults' ? 1 : 0)) { 
                counts[type]--;
            }

            updateUI(type);
        });
    });

    function updateUI(type) {
        const countEl = guestsContainer.querySelector(`#${type}Count`);
        if (countEl) countEl.textContent = counts[type];

        const minusBtn = guestsContainer.querySelector(`.counter-btn.minus[data-type="${type}"]`);
        const minVal = (type === 'adults') ? 1 : 0;
        
        if (minusBtn) {
            minusBtn.disabled = counts[type] <= minVal;
        }
        let summaryParts = [];
        summaryParts.push(`${counts.adults} ${counts.adults === 1 ? 'Adult' : 'Adults'}`);
        
        if (counts.teens > 0) {
            summaryParts.push(`${counts.teens} ${counts.teens === 1 ? 'Teen' : 'Teens'}`);
        }
        if (counts.children > 0) {
            summaryParts.push(`${counts.children} ${counts.children === 1 ? 'Child' : 'Children'}`);
        }

        guestsSummary.textContent = summaryParts.join(', ');
    }
}