// Auto Sliding for Home Section
// let currentIndex = 0;
// const totalSlides = 3;
// const slider = document.getElementById('slider');

// function autoSlide() {
//     currentIndex++;

//     if (currentIndex > totalSlides) {
//         // Instantly reset to first slide (without animation)
//         slider.style.transition = "none";
//         slider.style.transform = "translateX(0)";
//         currentIndex = 0;

//         // Re-enable animation after reset
//         setTimeout(() => {
//             slider.style.transition = "transform 0.6s ease-in-out";
//         }, 50);
//     } else {
//         slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
//     }
// }

// setInterval(autoSlide, 2000); // Change slide every 2 seconds

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length; 
const slider = document.getElementById('slider');

function autoSlide() {
    currentIndex++;

    if (currentIndex >= totalSlides) {
        slider.style.transition = "none";  // Disable animation for reset
        slider.style.transform = "translateX(0)";
        currentIndex = 0;

        setTimeout(() => {
            slider.style.transition = "transform 0.6s ease-in-out";
        }, 50);
    } else {
        slider.style.transition = "transform 0.6s ease-in-out";
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }
}

setInterval(autoSlide, 3000); // Slide every 3 seconds

// Create a "Back to Top" button dynamically
const backToTop = document.createElement("button");
backToTop.innerHTML = "⬆";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

// Show/hide button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Scroll to top smoothly
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Elements
const chatbotButton = document.getElementById("chatbot");
const chatbox = document.getElementById("chatbox");
const chatContent = document.getElementById("chat-content");
const chatInput = document.getElementById("chat-input");
const sendMessageButton = document.getElementById("send-message");

// Toggle Chatbox Visibility
chatbotButton.addEventListener("click", () => {
    chatbox.style.display = "block";
    chatContent.innerHTML = ""; // Clears previous messages when reopened
});

document.getElementById("close-chat").addEventListener("click", () => {
    chatbox.style.display = "none";
});

// Function to Add Messages
function addMessage(message, sender) {
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
    messageDiv.innerText = message;
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
}

// Bot Responses
const botResponses = {
    "hi": "Hello! How's your day going?",
    "hello": "Hey there! What’s up?",
    "how are you": "I'm just a chatbot, but I'm doing great! How about you?",
    "what is your name": "I'm your friendly chatbot! You can call me ChatBuddy.",
    "who created you": "I was created by a developer who loves coding and AI!",
    "bye": "Goodbye! Have a great day!",
    "good night": "Good night! Sleep well.",
    "thank you": "You're welcome! I'm happy to help.",
    "tell me a joke": "Why don’t skeletons fight each other? Because they don’t have the guts!",
    "how's the weather": "I can’t check the weather, but I hope it's nice where you are!",
    "what can you do": "I can chat with you, tell jokes, and keep you company!",
    "services": "We offer Web Development, App Development, Cloud Solutions, and AI-powered chatbots. How can we help?",
    "contact": "You can contact us at contact@itcompany.com 📧",
    "portfolio": "Check out our amazing projects in the Portfolio section! 🎯",
    "default": "I'm not sure about that. Can you ask something else? 🤔"
};

// Bot Reply Function
function botReply(userMessage) {
    let message = userMessage.toLowerCase();
    let botResponse = botResponses[message] || botResponses["default"];

    setTimeout(() => addMessage(botResponse, "bot"), 1000);
}

// Send User Message
function sendMessage() {
    let userMessage = chatInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, "user");
        chatInput.value = "";
        botReply(userMessage);
    }
}

// Event Listeners
sendMessageButton.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Toggle menu when clicking ☰
menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Hide menu when clicking any menu item
document.querySelectorAll("#nav-menu a").forEach(item => {
    item.addEventListener("click", function () {
        if (window.innerWidth < 768) {  // Only hide in mobile view
            navMenu.classList.remove("active");
        }
    });
});
