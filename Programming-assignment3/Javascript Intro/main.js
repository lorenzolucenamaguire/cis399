console.log("RUNNING");
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
console.log(randomize);
const story = document.querySelector('.story');
console.log(story);
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];



function result() {

    var newStory = storyText
        .replace(":insertx:", randomValueFromArray(insertX))
        .replace(":inserty:", randomValueFromArray(insertY))
        .replace(":insertz:", randomValueFromArray(insertZ));

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(21.4286) + " stone";
        const temperature = Math.round(34.4444) + " centigrade";
        newStory = newStory
            .replace("300 pounds", weight)
            .replace("94 fahrenheit", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
