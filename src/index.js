console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById('images-container');

            data.message.forEach(imageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = 'Dog Image';
                imagesContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Fetch dog breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsUl = document.getElementById('dog-breeds');

            // Iterate over the breeds object keys
            for (const breed in data.message) {
                if (data.message.hasOwnProperty(breed)) {
                    // Create a new list item for each breed
                    const breedLi = document.createElement('li');
                    breedLi.textContent = breed;

                    // Append the breed to the <ul>
                    breedsUl.appendChild(breedLi);
                }
            }
        })
        .catch(error => console.error('Error fetching breeds:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Fetch dog breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsUl = document.getElementById('dog-breeds');

            // Iterate over the breeds object keys
            for (const breed in data.message) {
                if (data.message.hasOwnProperty(breed)) {
                    // Create a new list item for each breed
                    const breedLi = document.createElement('li');
                    breedLi.textContent = breed;

                    // Add event listener to change font color on click
                    breedLi.addEventListener('click', function() {
                        this.style.color = 'blue'; // Change color to blue (or any color of your choosing)
                    });

                    // Append the breed to the <ul>
                    breedsUl.appendChild(breedLi);
                }
            }
        })
        .catch(error => console.error('Error fetching breeds:', error));
});

