// Dynamic content array
const contents = [
    "Welcome to our dynamic webpage!",
    "Content changes with JavaScript!",
    "Interactive elements make it dynamic!",
    "JavaScript powers the web!"
];

let currentIndex = 0;

// Get DOM elements
const title = document.getElementById('title');
const changeBtn = document.getElementById('changeBtn');
const content = document.getElementById('content');
const textInput = document.getElementById('textInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');

// Change content dynamically
changeBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % contents.length;
    content.innerHTML = `<p>${contents[currentIndex]}</p>`;
    title.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
});

// Add user input to list
addBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text) {
        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('click', () => li.remove());
        list.appendChild(li);
        textInput.value = '';
    }
});

// Enter key support
textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBtn.click();
});

// Dynamic time display
setInterval(() => {
    document.title = `Dynamic Page - ${new Date().toLocaleTimeString()}`;
}, 1000);