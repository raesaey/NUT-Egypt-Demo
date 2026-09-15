import { packages } from "../data/packages.js";


// 1. Get the id from the URL

const params = new URLSearchParams(window.location.search);

const id = params.get('id');


// 2. Find the package that has this id

const packaging = packages.find((pack) => {
    return pack.id === id;
});


// 3. Check if the package exists

if (!packaging) {

    document.querySelector('.js-packages-main-content').innerHTML = `
        <h1>Package not found</h1>
        <p>Sorry, we couldn't find this package.</p>
    `;

} else {

    // 4. Generate HTML for ONLY this package

    let packageHTML = `

        <!-- Package Header -->

        <header class="packages-header-bar">

            <h1 class="packages-title">
                ${packaging.name}
            </h1>

            <div class="packages-price-box">

                <span class="packages-old-price">
                    EGP ${packaging.oldPrice}
                </span>

                <span class="packages-new-price">
                    EGP ${packaging.newPrice}
                </span>

            </div>

        </header>


        <!-- Meta Info Bar -->

        <div class="packages-meta-bar">

            <div class="packages-rating-bar">

                <span class="stars">
                    ★★★★★
                </span>

                <span class="packages-rating-score">
                    ${packaging.rating.stars}
                </span>

                <span class="packages-rating-count">
                    (${packaging.rating.count} reviews)
                </span>

            </div>

            <span class="packages-duration-tag">
                ⏱ ${packaging.duration}
            </span>

        </div>


        <!-- Description -->

        <p class="packages-description">
            ${packaging.description}
        </p>


        <!-- Photos Gallery -->

        <div class="packages-gallery-wrapper">

            <div class="packages-slider">

                <img
                    src="${packaging.image}"
                    alt="${packaging.name}"
                >

                <div class="packages-slider-controls">

                    <button class="packages-slider-btn prev">
                        ❮
                    </button>

                    <button class="packages-slider-btn next">
                        ❯
                    </button>

                </div>

            </div>

        </div>


        <!-- Itinerary / Days Breakdown -->

        <section class="packages-itinerary">

            <h3>Trip Itinerary</h3>


            ${packaging.days.map((day) => `

                <div class="packages-day-card">

                    <div class="packages-day-header">

                        <span class="packages-day-badge">
                            Day ${day.day}
                        </span>

                        <h4 class="packages-day-title">
                            ${day.title}
                        </h4>

                    </div>


                    <p class="packages-day-desc">
                        ${day.description}
                    </p>


                    <div class="packages-destinations-chips">

                        ${day.destinations.map((destination) => `

                            <span class="packages-chip">
                                📍 ${destination}
                            </span>

                        `).join('')}

                    </div>

                </div>

            `).join('')}

        </section>


        <!-- Includes & Excludes Table -->

        <div class="packages-table-wrapper">

            <table class="packages-table">

                <thead>

                    <tr>

                        <th class="inc-head">
                            ✓ Included
                        </th>

                        <th class="exc-head">
                            ✕ Excluded
                        </th>

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
                        <td></td>
                    </tr>                    

                </tbody>

            </table>

        </div>


        <!-- Terms & Policies -->

        <div class="packages-policies">

            <h3>Terms & Policies</h3>

            <ul>
                <li>Free cancellation up to 7 days before departure.</li>
                <li>A valid passport is required at the time of booking.</li>
                <li>Minimum participant age is 12 years old.</li>
            </ul>

        </div>


        <!-- Booking & Price Calculator -->

        <section class="packages-calc-section">

            <div class="packages-select-group">

                <label for="guest-count">
                    Select Travelers:
                </label>

                <select
                    id="guest-count"
                    class="packages-select"
                >

                    <option value="1">
                        1 Person
                    </option>

                    <option value="2" selected>
                        2 People
                    </option>

                    <option value="3">
                        3 People
                    </option>

                    <option value="4">
                        4 People
                    </option>

                </select>

            </div>


        <div class="packages-calc-total">

            <span class="label">
                Calculated Total:
            </span>

            <span class="amount js-calculated-total">
                EGP ${packaging.newPrice * 2}
            </span>

        </div>


            <button class="packages-action-btn">
                Add to My Packages
            </button>

        </section>

    `;


    // 5. Put the generated HTML inside the page

    document.querySelector('.js-packages-main-content').innerHTML = packageHTML;

    const guestCount = document.querySelector('#guest-count');

const calculatedTotal = document.querySelector('.js-calculated-total');

guestCount.addEventListener('change', () => {

    const numberOfPeople = Number(guestCount.value);

    const total = packaging.newPrice * numberOfPeople;

    calculatedTotal.textContent = `EGP ${total}`;
});
}



const guestCount = document.querySelector('#guest-count');

const calculatedTotal = document.querySelector('.js-calculated-total');

const basePackageText = document.querySelector('.js-base-package');

const basePackagePrice = document.querySelector('.js-base-price');

const totalDue = document.querySelector('.js-total-due');

const serviceFee = 200;


guestCount.addEventListener('change', () => {

    const numberOfPeople = Number(guestCount.value);

    // price for all people
    const total = packaging.newPrice * numberOfPeople;

    // Update calculated total
    calculatedTotal.textContent = `EGP ${total}`;

    // Update sidebar
    basePackageText.textContent = `Base Package (x${numberOfPeople})`;

    basePackagePrice.textContent = `EGP ${total}`;

    // Update final total
    totalDue.textContent = `EGP ${total + serviceFee}`;

});
