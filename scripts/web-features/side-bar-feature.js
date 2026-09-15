// === Sidebar Elements ===
export function sideBarAction () {
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeBtn = document.getElementById('closeSidebar');
const menuIcon = document.querySelector('img[alt="bar icon"]'); 

const openSidebar = () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
};

const closeSidebar = () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
};

if (menuIcon) {
    menuIcon.addEventListener('click', openSidebar);
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}}