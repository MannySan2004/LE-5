# LE-5: Dynamic Webpage

A small interactive webpage that demonstrates **DOM manipulation and event handling in vanilla JavaScript**, with no frameworks and no build step.

## Features

| Interaction | What happens |
| --- | --- |
| **Change Content** button | Cycles through four messages in order, and gives the heading a random color |
| Text box + **Add Text** | Adds the text to a list |
| **Enter** key in the text box | Same as clicking **Add Text** |
| Click a list item | Removes it |
| Browser tab title | Shows a live clock, updated every second (`Dynamic Page - 3:42:10 PM`) |

The page is a centered white card on a purple gradient, with hover transitions on buttons and list items.

## How it works

- **Simple wrap-around state.** `currentIndex` advances with `(currentIndex + 1) % contents.length`, so the messages loop forever without bounds checks.
- **Random color in HSL.** `hsl(<random 0–360>, 70%, 50%)` keeps saturation and lightness fixed, so every random hue stays readable.
- **Event listeners are attached in JavaScript,** not with inline `onclick` attributes. Each list item gets its own click listener when it's created.
- **Timers.** `setInterval` updates `document.title` once a second.

## Edge cases handled

- **Blank input** is ignored. The value is trimmed, and empty or whitespace-only entries aren't added.
- **HTML injection.** User text is inserted with `textContent`, never `innerHTML`, so typing `<img onerror=…>` shows as plain text. `innerHTML` is only used for the hard-coded messages.
- **Enter key** reuses the button's handler (`addBtn.click()`), so both paths run the same validation.
- **Clean input.** The box is cleared after each successful add.

## Run it

Open `index.html` in any modern browser. Nothing needs to be installed.

## Files

```
├── index.html   markup: heading, buttons, input, list
├── style.css    gradient background, card layout, transitions
├── script.js    content cycling, list management, live clock
└── html         (empty placeholder from the first commit)
```
