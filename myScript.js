//Modern browsers support ES5 modules with import/export as normal
// import { getElementByIdOrFail } from "./utils.js";
// import { antiHeroes } from "./antiheroes.js";
import { characters } from "./characters.js";

const focusedCharacterParagraph = document.getElementById(
    "focusedCharacterParagraph"
);
renderCharacterListToHTML();
setupSearchButton();

function renderCharacterListToHTML() {
    const characterLiElements = makeLiElementsForCharacters();
    const myList = document.getElementById("charactersUL");
    for (const li of characterLiElements) {
        myList.appendChild(li);
    }
}

function createOneLiElementForCharacter(character) {
    //This new element will not yet be attached to any point in the DOM tree
    const element = document.createElement("li");

    element.innerHTML = character.name + " from " + character.book;

    element.addEventListener("click", () => {
        alert(character.powers.join(", "));
    });
    element.addEventListener("mouseover", () => {
        focusedCharacterParagraph.innerText =
            character.name + ": " + character.powers.join(", ");
    });
    return element;
}

function makeLiElementsForCharacters() {
    const arrayOfLiElements = [];

    for (const character of characters) {
        const element = createOneLiElementForCharacter(character);
        arrayOfLiElements.push(element);
    }
    return arrayOfLiElements;
}

function setupSearchButton() {
    const searchTermDisplay = document.getElementById("searchTermDisplay");

    const myButton = document.getElementById("myButton1");
    myButton.addEventListener("click", () => {
        const searchTerm = prompt("input search term");
        searchTermDisplay.outerHTML =
            "You said: " +
            searchTerm +
            " but we don't do anything with this info yet";
    });
}
