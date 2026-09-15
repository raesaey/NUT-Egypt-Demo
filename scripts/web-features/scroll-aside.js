export function scrollAside() {
    function setupSlider(containerId, prevBtnId, nextBtnId, scrollAmount = 300) {
        
        const container = document.getElementById(containerId);
        const previous = document.getElementById(prevBtnId);
        const next = document.getElementById(nextBtnId);

        if(container && previous && next){
            next.addEventListener('click', () => {
                container.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
            previous.addEventListener('click', () => {
                container.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });
        }
    }

    setupSlider('destinations-container', 'dest-prev-btn', 'dest-next-btn');
    setupSlider('offers-container', 'offers-prev-btn', 'offers-next-btn');
    setupSlider('rent-container', 'rent-prev-btn', 'rent-next-btn');
    setupSlider('packages-container', 'pkg-prev-btn', 'pkg-next-btn');
    setupSlider('reviews-container', 'rev-prev-btn', 'rev-next-btn');
    setupSlider('destCards', 'dest-prev-btn', 'dest-next-btn');
    setupSlider('collectionCards', 'col-prev-btn', 'col-next-btn');
    setupSlider('museumCards', 'mus-prev-btn', 'mus-next-btn');
}
