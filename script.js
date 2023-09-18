// Kiválasztjuk az enke-overlay elemet
const enkeOverlay = document.querySelector('.enke-overlay');

// Kiválasztjuk az enke képet
const enkeImage = document.querySelector('.enke');

// Figyeljük a kurzor mozgását a kép fölött
enkeImage.addEventListener('mouseover', () => {
  // Megjelenítjük az overlay-t
  enkeOverlay.style.display = 'block';
});

// Figyeljük a kurzor távozását a képről
enkeImage.addEventListener('mouseout', () => {
  // Elrejtjük az overlay-t
  enkeOverlay.style.display = 'none';
});
