import { sideBarAction } from "./web-features/side-bar-feature.js";
import { heroSectionAction } from "./web-features/hero-section-feature.js";
import { toDarkMood } from "./web-features/dark-mood-feature.js";
import { selectDate } from "./home-select-section/schedule.js";
import { chooseGuests } from "./home-select-section/guest-section.js";
import { initToRentSection } from "./web-features/location.js";
import { scrollAside } from "./web-features/scroll-aside.js";

const runSafely = (fn) => {
    try {
        if (typeof fn === 'function') fn();
    } catch (error) {
        console.warn(`Skipped function: ${fn.name}`, error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    runSafely(sideBarAction); 
    runSafely(heroSectionAction);
    runSafely(toDarkMood);
    runSafely(selectDate);
    runSafely(chooseGuests);
    runSafely(initToRentSection);
    runSafely(scrollAside);
});