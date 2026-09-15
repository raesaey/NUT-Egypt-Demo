import { destinations } from "../data/destination.js";
import { packages } from "../data/packages.js";

let destinationHTML = '';

destinations.forEach((destination) => {
    destinationHTML += `
        <a href="#" class="card-link">
            <div class="card-container">
                <div class="card-background" style="background-image: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 70%), url('${destination.image}');">
                    
                    <div class="sale-tag">
                        <p>${destination.sale}% OFF</p>
                    </div>

                    <div class="card-content-bottom">
                        <div class="name">${destination.name}</div>

                        <div class="details">
                            ${destination.duration}
                        </div>

                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <p>
                                ${destination.rating.stars}
                                (${destination.rating.count} Reviews)
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </a>
    `;
});

document.querySelector('.js-cards-container').innerHTML = destinationHTML;


// ================= PACKAGES =================

let packageHTML = '';

packages.forEach((packaging) => {

    packageHTML += `
        <a href="package-details.html?id=${packaging.id}" class="card-link">

            <div class="packages-card-container">

                <div class="packages-card-background"
                    style="
                        background-image:
                        linear-gradient(
                            to top,
                            rgba(0,0,0,0.9) 0%,
                            rgba(0,0,0,0.3) 60%
                        ),
                        url('${packaging.image}');
                    "
                >

                    <span class="packages-tag">
                        ${packaging.sale}% OFF
                    </span>

                    <div class="packages-card-content-bottom">

                        <h3 class="packages-name">
                            ${packaging.name}
                        </h3>

                        <div class="packages-meta">

                            <span class="packages-duration">
                                ${packaging.duration}
                            </span>

                            <span class="packages-price">
                                $${packaging.newPrice}
                            </span>

                        </div>

                        <p class="packages-locations">
                            ${packaging.rating.stars},
                            ${packaging.rating.count}
                        </p>

                        <p class="packages-details">
                            ${packaging.description}
                        </p>

                        <div class="packages-card-action">

                            <button class="packages-action-btn">
                                Book Package
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </a>
    `;
});

document.querySelector('.js-packages-cards-wrapper').innerHTML = packageHTML;