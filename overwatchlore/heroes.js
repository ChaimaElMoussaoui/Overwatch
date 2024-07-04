let heroesData = [];

fetch('https://overfast-api.tekrop.fr/heroes')
  .then(response => response.json())
  .then(data => {
    console.log("data has been fetched:", data);
    heroesData = data; 
    displayHeroes(heroesData); 
  })
  .catch(error => console.error('Error fetching data:', error));

function displayHeroes(data) {
  const container = document.getElementById('heroes-container');
  container.innerHTML = ''; 

  data.forEach(hero => {
    const card = document.createElement('div');
    card.className = 'hero-card';
    card.innerHTML = `
      <img src="${hero.portrait}" alt="Portrait of ${hero.name}" style="width:100px;height:auto;">
      <h2><a href="heroDetail.html?name=${encodeURIComponent(hero.name)}">${hero.name}</a></h2>
      <p><strong>Role:</strong> ${hero.role}</p>
    `;
    container.appendChild(card);
  });
}

document.getElementById('heroSearch').addEventListener('input', function() {
  const searchText = this.value.toLowerCase();
  const filteredHeroes = heroesData.filter(hero => hero.name.toLowerCase().includes(searchText));
  displayHeroes(filteredHeroes); 
});