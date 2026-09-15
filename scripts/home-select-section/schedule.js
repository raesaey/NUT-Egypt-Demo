export function selectDate() {
    const dateInputs = document.querySelectorAll('.js-date-value, #datePickerInput');

    if (!dateInputs.length) return;

    dateInputs.forEach(input => {
        const container = input.closest('.date-box, .date-card, .search-box');
        const dateSubLabel = container ? container.querySelector('.sub-label, #dateSubLabel') : null;

        const fp = flatpickr(input, {
            mode: "range",
            dateFormat: "M d, Y",
            minDate: "today",
            allowInput: false, 
            showMonths: window.innerWidth > 768 ? 2 : 1,
            onChange: function(selectedDates) {
                if (!dateSubLabel) return;

                if (selectedDates.length === 1) {
                    const dayName = selectedDates[0].toLocaleDateString('en-US', { weekday: 'long' });
                    dateSubLabel.textContent = dayName;
                } else if (selectedDates.length === 2) {
                    const diffTime = Math.abs(selectedDates[1] - selectedDates[0]);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    dateSubLabel.textContent = `${diffDays} ${diffDays === 1 ? 'Day' : 'Days'} duration`;
                } else {
                    dateSubLabel.textContent = "Select check-in & check-out";
                }
            }
        });
        if (container) {
            container.addEventListener('click', (e) => {

                e.stopPropagation();
                fp.open();
            });
        }
    });
}