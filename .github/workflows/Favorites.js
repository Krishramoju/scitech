// Favorites.js

const favoriteIcons = document.querySelectorAll('.favorite-icon');

favoriteIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active');
    if (icon.classList.contains('active')) {
      console.log('Added to favorites');
    } else {
      console.log('Removed from favorites');
    }
  });
});
