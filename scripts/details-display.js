import { destinations } from "../data/destination.js";


// 1. Get the id from the URL
const params = new URLSearchParams(window.location.search);

const id = params.get('id');


// 2. Find the destination that has this id
const destination = destinations.find((destination) => {
    return destination.id === id;
});


// 3. Check if the destination exists
if (!destination) {

    document.querySelector('.js-trip-main-content').innerHTML = `
        <h1>Destination not found</h1>
        <p>Sorry, we couldn't find this destination.</p>
    `;

} else {

    // 4. Generate HTML for ONLY this destination
    let detailsHTML = `
    <!-- Trip Header -->
    <header class="trip-header">
        <div class="price-wrapper">
            <div class="price-badge js-price-badge">
                $${destination.newPrice}
                <span class="price-period">/ person</span>
            </div>
            <div class="price-sale-tag">
                <p>$${destination.oldPrice}</p>
            </div>
        </div>
        <h1 class="trip-title js-trip-title">
            ${destination.name}
        </h1>
    </header>

    <!-- Rating Section -->
    <div class="trip-rating-bar">
        <span class="stars js-stars">
            ${destination.rating.stars}
        </span>
        <span class="rating-score js-score">
            ${destination.rating.count}
        </span>
        <span class="rating-count js-rating-count">
            (reviews)
        </span>
    </div>

    <!-- Description -->
    <p class="trip-description js-trip-description">
        ${destination.description}
    </p>

    <!-- Photos Gallery / Slider -->
    <div class="gallery-to-show-trip-photos">
        <div class="slider-wrapper">
            <div class="sale-tag overlay-sale">
                <p>${destination.sale}% OFF</p>
            </div>
            <img 
                src="${destination.image}" 
                alt="${destination.name}" 
                class="active-slide"
            >
            <div class="slider-controls">
                <button class="slider-btn prev">❮</button>
                <button class="slider-btn next">❯</button>
            </div>
        </div>
    </div>

    <!-- Trip Overview Details -->
    <section class="trip-overview-details">
        <h3>Trip Highlights & Overview</h3>
        <p>
            ${destination.description}
        </p>
    </section>

    <!-- Includes & Excludes Table -->
    <div class="include-exclude-container">
        <table class="table-has-include-exclude">
            <thead>
                <tr>
                    <th class="included-header">✓ Included</th>
                    <th class="excluded-header">✕ Excluded</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>A small souvenir gift</td>
                    <td>Hotel accommodation</td>
                </tr>
                <tr>
                    <td>Bottled water and a light snack</td>
                    <td>Main meals</td>
                </tr>
                <tr>
                    <td>Entrance fees to attractions</td>
                    <td>Travel Insurance</td>
                </tr>
                <tr>
                    <td>Air-conditioned transportation from and to the hotel, covering all tour locations.</td>
                    <td>Personal expenses and shopping</td>
                </tr>
                <tr>
                    <td>Professional tour guide</td>
                    <td>Transportation between governorates</td>
                </tr>

            </tbody>
        </table>
    </div>

    <!-- Terms & Policies -->
    <div class="div-terms-policies-wrapper">
        <div class="div-terms-policies">
            <h3>Terms & Policies</h3>
            <ul>
                <li>Free cancellation up to 7 days before departure.</li>
                <li>A valid passport is required at the time of booking.</li>
                <li>Minimum participant age is 12 years old.</li>
            </ul>
        </div>
    </div>

    <!-- Booking & Price Calculator -->
    <section class="booking-calculator-section">
        <div class="pricing-notice-badge">
            <span class="notice-icon">🎉</span>
            <span class="notice-text">
                <strong>Special Discount:</strong> Kids under the age of 10 travel for <strong>FREE</strong>!
            </span>
        </div>

        <div class="travelers-selection-grid">
            <div class="guest-selector-group">
                <label for="adult-count">
                    Adults
                    <span class="age-label">(Age 18+)</span>
                </label>
                <select class="guest-select adult-count">
                    <option value="1">1 Adult</option>
                    <option value="2" selected>2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                </select>
            </div>

            <div class="guest-selector-group">
                <label for="child-count">
                    Children
                    <span class="age-label">(Age 10–17)</span>
                </label>
                <select class="guest-select child-count">
                    <option value="0" selected>0 Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3">3 Children</option>
                </select>
            </div>

            <div class="guest-selector-group free-group">
                <label for="kid-count">
                    Kids
                    <span class="age-label free-tag">(Under 10 - Free)</span>
                </label>
                <select class="guest-select kid-count">
                    <option value="0">0 Kids</option>
                    <option value="1" selected>1 Kid</option>
                    <option value="2">2 Kids</option>
                    <option value="3">3 Kids</option>
                </select>
            </div>
        </div>

        <div class="booking-action-footer">
            <div class="calculator-result-display">
                <span class="calc-label">Calculated Total</span>
                <span class="calc-amount">$0.00</span>
            </div>

            <button 
                class="btn-add-to-trips" 
                type="button"
                data-destination-id="${destination.id}"
            >
                Add To My Bookings
            </button>
        </div>
    </section>
    `;


    // 5. Put the generated HTML inside the page

    document.querySelector('.js-trip-main-content').innerHTML = detailsHTML;

}