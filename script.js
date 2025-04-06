document.addEventListener('DOMContentLoaded', () => {
    const birthYearInput = document.getElementById('birthYear');
    const timeTravelBtn = document.getElementById('timeTravel');
    const randomYearBtn = document.getElementById('randomYear');
    const resultsContainer = document.getElementById('results');

    // Data for different years
    const yearData = {
        1970: {
            songs: [
                "Zindagi Ek Safar Hai Suhana - Andaz",
                "Bindiya Chamkegi - Do Raaste",
                "Kora Kagaz Tha Yeh Man Mera - Aradhana"
            ],
            movies: [
                "Sachaa Jhutha",
                "Purab Aur Paschim",
                "Mera Naam Joker"
            ],
            shows: [
                "Doordarshan News",
                "Krishi Darshan"
            ],
            events: [
                "Indira Gandhi becomes Prime Minister",
                "First Indian satellite Aryabhata launched",
                "Fiat Premier Padmini car launch"
            ]
        },
        1980: {
            songs: [
                "Om Shanti Om - Karz",
                "Dafli Wale - Sargam",
                "Mere Naseeb Mein - Naseeb"
            ],
            movies: [
                "Qurbani",
                "Dostana",
                "Ram Balram"
            ],
            shows: [
                "Phool Khile Hain Gulshan Gulshan",
                "Early regional programs"
            ],
            events: [
                "India wins Olympic Gold in Hockey",
                "Mother Teresa wins Nobel Peace Prize",
                "First color TV broadcast in India"
            ]
        },
        1990: {
            songs: [
                "Ghoonghat Ki Aad Se - Hum Hain Rahi Pyar Ke",
                "Dil Deewana - Maine Pyar Kiya",
                "Tamma Tamma Loge - Thanedaar"
            ],
            movies: [
                "Agneepath",
                "Dil",
                "Ghayal"
            ],
            shows: [
                "Malgudi Days",
                "Mahabharat",
                "Chitrahaar"
            ],
            events: [
                "Economic liberalization begins",
                "Sachin Tendulkar's first Test century",
                "Launch of Zee TV"
            ]
        },
        2000: {
            songs: [
                "Kaho Naa Pyaar Hai - KNPH",
                "Bumbro - Mission Kashmir",
                "Dhoom Machale - Dhoom"
            ],
            movies: [
                "Kaho Naa Pyaar Hai",
                "Mohabbatein",
                "Josh"
            ],
            shows: [
                "Kaun Banega Crorepati",
                "Kyunki Saas Bhi Kabhi Bahu Thi",
                "Kahani Ghar Ghar Ki"
            ],
            events: [
                "India's population reaches 1 billion",
                "Launch of Indian Railways online booking",
                "India's first metro rail in Delhi"
            ]
        },
        2010: {
            songs: [
                "Munni Badnaam - Dabangg",
                "Sheila Ki Jawani - Tees Maar Khan",
                "Zor Ka Jhatka - Action Replayy"
            ],
            movies: [
                "Dabangg",
                "My Name Is Khan",
                "3 Idiots"
            ],
            shows: [
                "Satyamev Jayate",
                "Bigg Boss",
                "Comedy Circus"
            ],
            events: [
                "Commonwealth Games in Delhi",
                "India wins Cricket World Cup",
                "Launch of 3G services in India"
            ]
        }
    };

    // Validate year input
    birthYearInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        if (e.target.value.length === 4) {
            const year = parseInt(e.target.value);
            if (year < 1970 || year > 2010) {
                alert('Please enter a year between 1970 and 2010');
                e.target.value = '';
            }
        }
    });

    // Random year generator
    randomYearBtn.addEventListener('click', () => {
        const randomYear = Math.floor(Math.random() * (2010 - 1970 + 1)) + 1970;
        birthYearInput.value = randomYear;
        generateTimeCapsule(randomYear);
    });

    // Time travel button
    timeTravelBtn.addEventListener('click', () => {
        const year = birthYearInput.value;
        if (year && year.length === 4) {
            generateTimeCapsule(parseInt(year));
        } else {
            alert('Please enter a valid year between 1970 and 2010');
        }
    });

    // Generate time capsule content
    function generateTimeCapsule(year) {
        resultsContainer.innerHTML = '<div class="loading">Rewinding to ' + year + '...</div>';
        resultsContainer.classList.remove('hidden');

        // Find the closest year in our data
        const availableYears = Object.keys(yearData).map(Number);
        const closestYear = availableYears.reduce((prev, curr) => {
            return Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev;
        });

        const data = yearData[closestYear];

        setTimeout(() => {
            resultsContainer.innerHTML = `
                <div class="time-capsule">
                    <h2 class="year-header">🎞️ ${year} Rewind 🎞️</h2>
                    
                    <section class="category">
                        <h3>🎵 Top Bollywood Hits</h3>
                        <ul>
                            ${data.songs.map(song => `<li>${song}</li>`).join('')}
                        </ul>
                    </section>

                    <section class="category">
                        <h3>🎬 Popular Movies</h3>
                        <ul>
                            ${data.movies.map(movie => `<li>${movie}</li>`).join('')}
                        </ul>
                    </section>

                    <section class="category">
                        <h3>📺 TV Shows</h3>
                        <ul>
                            ${data.shows.map(show => `<li>${show}</li>`).join('')}
                        </ul>
                    </section>

                    <section class="category">
                        <h3>🌟 Major Events</h3>
                        <ul>
                            ${data.events.map(event => `<li>${event}</li>`).join('')}
                        </ul>
                    </section>
                </div>
            `;
        }, 2000);
    }
});
