const breedInput = document.getElementById('breedInput');
const breedSuggestions = document.getElementById('breedSuggestions');
const showImagesBtn = document.getElementById('showImagesBtn');
const imageContainer = document.getElementById('imageContainer');

// Function to fetch and display autocomplete suggestions
async function getBreeds() {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();
  const breeds = Object.keys(data.message);

  breedSuggestions.innerHTML = '';
  breeds.forEach(breed => {
    const option = document.createElement('div');
    option.textContent = breed;
    option.classList.add('suggestion');
    option.addEventListener('click', () => {
      breedInput.value = breed;
      breedSuggestions.innerHTML = '';
    });
    breedSuggestions.appendChild(option);
  });
}

// Function to show random images of the selected breed
async function showImages() {
  const breed = breedInput.value.toLowerCase();
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`);
  const data = await response.json();
  if (data.status === 'success') {
    imageContainer.innerHTML = '';
    const img = document.createElement('img');
    img.src = data.message[0];
    imageContainer.appendChild(img);
    setInterval(async () => {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`);
      const data = await response.json();
      if (data.status === 'success') {
        img.src = data.message[0];
      }
    }, 5000);
  } else {
    imageContainer.innerHTML = '<p>No such breed</p>';
  }
}

// Event listeners
breedInput.addEventListener('input', getBreeds);
breedInput.addEventListener('focus', getBreeds); // Trigger getBreeds when input field is focused
showImagesBtn.addEventListener('click', showImages);
