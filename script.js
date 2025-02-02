const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

// Function to sort the band names, ignoring 'a', 'an', and 'the'
function sortBands(bands) {
    const ignoreWords = ['a', 'an', 'the'];

    return bands.sort((a, b) => {
        // Function to process each band name by removing leading ignore words
        const stripWords = (name) => {
            const words = name.split(' ');
            // Check if the first word is an ignore word, if so, remove it
            while (ignoreWords.includes(words[0].toLowerCase())) {
                words.shift();
            }
            return words.join(' ');
        };

        // Compare the stripped versions of the band names
        const bandA = stripWords(a).toLowerCase();
        const bandB = stripWords(b).toLowerCase();

        if (bandA < bandB) return -1;
        if (bandA > bandB) return 1;
        return 0;
    });
}

// Function to render the sorted band names to the HTML list
function renderBands() {
    const sortedBands = sortBands(bands);
    const bandList = document.getElementById('band');
    
    sortedBands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        bandList.appendChild(listItem);
    });
}

// Call renderBands on page load
renderBands();
