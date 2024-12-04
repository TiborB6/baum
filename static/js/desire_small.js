// Function to adjust layout and append HTML based on window width
function adjustLayout() {
    const desire = document.querySelector('.desire');
    const desire2 = document.querySelector('.desire2');
     // Assuming you have a container element for the data

    // Clear any existing content in the container (optional)
    desire.innerHTML = '';
    desire2.innerHTML = '';

    if (window.innerWidth <= 1000) {
        // For small screens (<=1000px), append the desired HTML in a stacked layout
        desire.innerHTML = `
            <div id="header">
                <h1>Baumabtragungen, <br>
                    Gartenpflege,<br>
                    & mehr ...
                </h1>
                <a href="/services">
                    <button>
                        Unser Angebot
                    </button>
                </a>
            </div>
        `;

        desire2.innerHTML = `
                    <div class="data">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                </svg>
    
                <p>Bezirk Baden und Mödling</p>
            </div>
                
            <div class="data">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
                </svg>
    
                <p>Jeden Tag: 8-20 Uhr</p>
            </div>
        `;
    } else {
        // For larger screens (>1000px), append the HTML in a horizontal layout
        desire.innerHTML = `
            <div id="header">
                <h1>Baumabtragungen, <br>
                    Gartenpflege,<br>
                    & mehr ...
                </h1>
                <a href="/services">
                    <button>
                        Unser Angebot
                    </button>
                </a>
            </div>
    
            <div class="data">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                </svg>
    
                <p>Bezirk Baden und Mödling</p>
            </div>
                
            <div class="data">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
                </svg>
    
                <p>Jeden Tag: 8-20 Uhr</p>
            </div>
        `;
        
        desire2.innerHTML = ``;
    }
}

// Call adjustLayout on page load and when the window is resized
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);
