const words = require("../assets/words.js");
const getWords = (count) => {
    // console.log("Generating words");
    const generatedWords = [];
    for (let i = 0; i < count; i++) {
        let word = words[Math.floor(Math.random() * words.length)];
        generatedWords.push(word);
    }
    // console.log("Generated words are ", generatedWords);
    return generatedWords;
};
module.exports = getWords;
