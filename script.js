// Dark mode functionality
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save dark mode preference to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check and apply dark mode preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

// Display input values on page2.html
document.addEventListener('DOMContentLoaded', () => {
    const displayValuesElement = document.getElementById('displayValues');
    const urlParams = new URLSearchParams(location.search);

    if (urlParams.has('name') && urlParams.has('email') && urlParams.has('age') && urlParams.has('color') && urlParams.has('country') && urlParams.has('languages')) {
        const nameValue = urlParams.get('name');
        const emailValue = urlParams.get('email');
        const ageValue = urlParams.get('age');
        const colorValue = urlParams.get('color');
        const countryValue = urlParams.get('country');
        const languagesValue = urlParams.get('languages');

        displayValuesElement.innerHTML = `
            <p>Name: ${nameValue}</p>
            <p>Email: ${emailValue}</p>
            <p>Age: ${ageValue}</p>
            <p>Favorite Color: ${colorValue}</p>
            <p>Country: ${countryValue}</p>
            <p>Languages: ${languagesValue}</p>
        `;
    }
});
