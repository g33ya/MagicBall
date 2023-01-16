// All possible 8ball answers
let answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", 
"As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Ask again later.", "Better not tell you now.",
"Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]

function givenAnswer() {
    let response = answers[Math.floor(Math.random() * 17)];
    let answer = document.querySelector(".answer");
    answer.textContent = response;
    console.log(response);
}  

document.querySelector('.ballbutton').addEventListener('click', givenAnswer);
document.querySelector('.text').addEventListener('click', givenAnswer);


