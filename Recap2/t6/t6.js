'use strict';

const numOfMovies = Number(prompt('Kuinka monta elokuvaa haluat arvostella?'));
const movies = [];

for (let i = 0; i < numOfMovies; i++) {
  const title = prompt(`Syötä ${i + 1}. elokuvan nimi:`);
  const rating = Number(prompt(`Syötä arvosana (1-5) elokuvalle ${title}:`));

  // Tallennetaan elokuvat käyttäen object literals -tapaa
  movies.push({
    title: title,
    rating: rating,
  });
}

// Lajitellaan taulukko arvosanan mukaan korkeimmasta matalimpaan
movies.sort(function (a, b) {
  return b.rating - a.rating;
});

// Korkeimman arvosanan saanut on nyt taulukon ensimmäinen alkio
if (movies.length > 0) {
  const highestRated = movies[0];
  document
    .querySelector('#suosikki')
    .insertAdjacentText(
      'afterbegin',
      `${highestRated.title} (Arvosana: ${highestRated.rating})`
    );

  const target = document.querySelector('#target');
  for (const movie of movies) {
    target.innerHTML += `<li>${movie.title}, arvosana: ${movie.rating}</li>`;
  }
}
