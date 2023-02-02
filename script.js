const favButton = document.querySelectorAll('.favIcon');

for (element of favButton) {
    element.addEventListener('click', (e) => {
        e.target.style.fill = 'rgb(36, 85, 245)';
    });
}
