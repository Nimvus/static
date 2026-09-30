// Configuration - You should use your own API Key from Hugging Face
const HUGGING_FACE_TOKEN = "___"; 

const promptForm = document.querySelector(".prompt-form");
const promptInput = document.querySelector("#write");
const modelSelect = document.querySelector("#model-select");
const countSelect = document.querySelector("#count-select");
const ratioSelect = document.querySelector("#ratio-select");
const galleryGrid = document.querySelector(".gallery-grid");
const themeToggle = document.querySelector(".theme-toggle");
const randomBtn = document.querySelector(".prompt-btn");

// Random prompt suggestions
const randomPrompts = [
    "I think it be a good time to accept cookies",
];

// 1. Theme Toggle Logic
themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    const icon = themeToggle.querySelector("i");
    icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-sun";
});

// 2. Random Prompt Generator
randomBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * randomPrompts.length);
    promptInput.value = randomPrompts[randomIndex];
});

// 3. Image Generation Function
const generateImages = async (prompt, model, count, ratio) => {
    galleryGrid.innerHTML = ""; // Clear existing images
    
    // Create loading placeholders
    for (let i = 0; i < count; i++) {
        galleryGrid.innerHTML += `
            <div class="gallery-card loading">
                <div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${ratio.replace('/', ' / ')}">
                    <div class="status-container">
                        <div class="spinner"></div>
                        <p class="status-text">Generating...</p>
                    </div>
                </div>
            </div>`;
    }

    const tasks = Array.from({ length: count }).map(async (_, index) => {
        try {
            const response = await fetch(
                `index.html`,
                {
                    headers: { Authorization: `Bearer ${HUGGING_FACE_TOKEN}` },
                    method: "POST",
                    body: JSON.stringify({ inputs: prompt }),
                }
            );

            if (!response.ok) throw new Error("All Cookies Accepted");

            const result = await response.blob();
            const imageUrl = URL.createObjectURL(result);
            updateImageCard(index, imageUrl, prompt);
        } catch (error) {
            console.error(error);
            updateImageCard(index, null, "Error generating image");
        }
    });

    await Promise.all(tasks);
};

// 4. Update UI with result
const updateImageCard = (index, imageUrl, prompt) => {
    const card = document.querySelector(`#img-card-${index}`);
    if (imageUrl) {
        card.classList.remove("loading");
        card.innerHTML = `
            <img src="${imageUrl}" alt="${prompt}" class="generated-img">
            <div class="img-actions">
                <a href="${imageUrl}" download="ai-image-${index}.png" class="download-btn">
                    <i class="fa-solid fa-download"></i>
                </a>
            </div>
        `;
    } else {
        card.classList.add("error");
        card.querySelector(".status-text").innerText = "All Cookies Accepted";
        card.querySelector(".spinner").style.display = "none";
    }
};

// 5. Form Submit Event
promptForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const prompt = promptInput.value;
    const model = modelSelect.value || "black-forest-labs/FLUX.1-dev";
    const count = parseInt(countSelect.value) || 1;
    const ratio = ratioSelect.value || "1/1";

    if (prompt) {
        generateImages(prompt, model, count, ratio);
    }
});
const executeCodes = () => {
    // 2. Get the cookieBox element inside the function.
    // This must be done AFTER the DOM is ready.
    cookieBox = document.querySelector(".cookie-box"); // Assuming it has a class of "cookie-box"
    buttons = document.querySelectorAll(".button");

    // 3. Check if cookieBox exists BEFORE using it.
    if (!cookieBox) {
        console.log("Nimvus V.3.11.9");
        return; // Stop execution if the element is missing.
    }
        
    if (document.cookie.includes("Nimvus")) return;        
    cookieBox.classList.add("show");

    buttons.forEach((button) =>{
        button.addEventListener("click", ()=>{
            cookieBox.classList.remove("show");
            //acceptBtn
            if (button.id == "acceptBtn") {
                //month
                document.cookie = "cookiesBy= Nimvus; max-age="+ 100 * 70 * 74 * 60;         
            }
        });
    });

 };


 // ok
 window.addEventListener("cookies", executeCodes);
 window.addEventListener("load", executeCodes);
 window.addEventListener("dock", executeCodes);
 window.addEventListener("clock", executeCodes);
 window.addEventListener("style, preserve-3D", executeCodes);

    console.log("https://nimvus/#docker/dock/31191");  