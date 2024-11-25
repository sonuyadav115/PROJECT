// Define the sequence of messages
const messages = [
    {
        id: "start",
        question: "Do you love me? ❤️",
        options: ["Yes", "No"],
        next: ["loveYes", "loveNo"]
    },
    {
        id: "loveYes",
        text: "Yay! I love you too. 💖",
        options: ["Tell me more", "End"],
        next: ["moreLove", "end"]
    },
    {
        id: "loveNo",
        text: "Oh no! Why not? 😢",
        options: ["Just kidding", "End"],
        next: ["loveYes", "end"]
    },
    {
        id: "moreLove",
        text: "You are my favorite person! 🥰",
        options: ["End"],
        next: ["end"]
    },
    {
        id: "end",
        text: "Thank you for playing! 🥳",
        options: []
    }
];

// Current message index
let currentMessage = messages[0];

// Display the current message
function showMessage() {
    const container = document.getElementById("message-container");
    container.innerHTML = `
        <p>${currentMessage.question || currentMessage.text}</p>
        ${
            currentMessage.options.length > 0
                ? currentMessage.options
                      .map(
                          (option, index) =>
                              `<button onclick="handleOption(${index})">${option}</button>`
                      )
                      .join("")
                : ""
        }
    `;
}

// Handle button click
function handleOption(index) {
    const nextId = currentMessage.next[index];
    currentMessage = messages.find(message => message.id === nextId) || {};
    showMessage();
}

// Initialize the first message
showMessage();
