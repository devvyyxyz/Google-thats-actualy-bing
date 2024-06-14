document.addEventListener('DOMContentLoaded', function() {
    var googleLogo = document.getElementById('google-logo');
    var clickCount = 0;

    googleLogo.addEventListener('click', function() {
        clickCount++;

        if (clickCount === 5) {
            // Array of Google's official special logo URLs
            var specialLogos = [
                "https://www.google.com/logos/doodles/2023/new-years-day-2023-6753651837108736-law.gif",
                "https://www.google.com/logos/doodles/2023/teachers-day-2023-6753651837108736-2xa.gif",
                "https://www.google.com/logos/doodles/2023/fathers-day-2023-6753651837108736-l.png"
                // Add more special logo URLs as needed
            ];

            // Randomly select a special logo URL
            var randomIndex = Math.floor(Math.random() * specialLogos.length);
            var specialLogoUrl = specialLogos[randomIndex];

            // Change the Google logo to the selected special image
            googleLogo.src = specialLogoUrl;
            googleLogo.alt = 'Special Google Logo'; // Optional: Set an alt attribute for accessibility
        }
    });
});