fetch("https://overfast-api.tekrop.fr/heroes?locale=en-us")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const heroCardsContainer = document.getElementById('heroCards');
        const heroSearchInput = document.getElementById('heroSearch');

        const filterHeroes = () => {
            const searchTerm = heroSearchInput.value.toLowerCase();
            const filteredHeroes = data.filter(hero => hero.name.toLowerCase().includes(searchTerm));

            heroCardsContainer.innerHTML = '';

            filteredHeroes.forEach(hero => {
                const card = document.createElement('div');
                card.classList.add('hero-card');
                card.classList.add('col-md-4');
                card.classList.add('card-wrapper'); // Add class for consistent sizing

                const portraitImg = document.createElement('img');
                portraitImg.src = hero.portrait;
                portraitImg.alt = hero.name + " portrait";
                portraitImg.classList.add('hero-portrait');

                const heroInfo = document.createElement('div');
                heroInfo.classList.add('hero-info');

                const heroName = document.createElement('h2');
                heroName.textContent = hero.name;

                const heroRole = document.createElement('p');
                heroRole.textContent = "Role: " + hero.role;

                heroInfo.appendChild(heroName);
                heroInfo.appendChild(heroRole);

                card.appendChild(portraitImg);
                card.appendChild(heroInfo);

                heroCardsContainer.appendChild(card);
            });
        };

        heroSearchInput.addEventListener('input', filterHeroes);

        filterHeroes();
    })
    .catch(error => {
        console.error('There was a problem fetching the data:', error);
    });
