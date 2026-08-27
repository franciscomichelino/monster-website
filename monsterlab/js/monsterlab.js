const platforms = [
    {
        image: "assets/platforms/ryz1.png",
        name: "MONSTER 1.0",
        type: "AI Ready Workstation",
        tests: "Benchmark • Stress Test • IA"
    },
    {
        image: "assets/platforms/wsb1.webp",
        name: "MONSTER 1.4",
        type: "Professional Workstation",
        tests: "Benchmark • Stress Test • IA"
    },
    {
        image: "assets/platforms/wsp1.png",
        name: "MONSTER 1.5",
        type: "Enterprise AI Workstation",
        tests: "Benchmark • Stress Test • IA"
    },
    {
        image: "assets/platforms/workstation-enterprise.png",
        name: "MONSTER 2.0",
        type: "PRO SERVER IA",
        tests: "Benchmark • Stress Test • IA"
    }
];

const platformsGrid = document.getElementById("platformsGrid");
const nextButton = document.querySelector(".platform-next");

let currentIndex = 0;

function renderPlatforms(startIndex) {

    platformsGrid.innerHTML = "";

    for (let i = 0; i < 2; i++) {

        const platform = platforms[startIndex + i];

        const card = document.createElement("article");
        card.className = "platform-card";

        card.innerHTML = `
            <img src="${platform.image}" alt="${platform.name}">
            
            <h3>${platform.name}</h3>

            <h4>${platform.type}</h4>

            <p class="platform-status">
                Validated at MONSTER LAB
            </p>

            <p class="platform-tests">
                ${platform.tests}
            </p>
        `;

        platformsGrid.appendChild(card);
    }
}

nextButton.addEventListener("click", () => {

    currentIndex += 2;

    if (currentIndex >= platforms.length) {
        currentIndex = 0;
    }

    renderPlatforms(currentIndex);
});

renderPlatforms(0);

