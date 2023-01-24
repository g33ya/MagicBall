// All possible 8ball answers
let answers = ["IT IS CERTAIN.", "IT IS DECIDEDLY SO.", "WITHOUT A DOUBT.", "YES DEFINITELY.", "YOU MAY RELY ON IT.", 
"AS I SEE IT, YES.", "MOST LIKELY.", "OUTLOOK GOOD.", "YES.", "SIGNS POINT TO YES.", "ASK AGAIN LATER.", "BETTER NOT TELL YOU NOW.",
"FOCUS AND ASK AGAIN.", "DON'T COUNT ON IT.", "MY REPLY IS NO.", "MY SOURCES SAY NO.", "OUTLOOK NOT SO GOOD.",
 "VERY DOUBTFUL."]

 // Retrieves a random index of the "answers" list (above) and resets ball animations
function givenAnswer() {
    let response = answers[Math.floor(Math.random() * 17)];
    let answer = document.querySelector(".answer");
    answer.textContent = response;
    console.log(response);
    reset_animation_text();
    reset_animation_ball()
}  

// Connects givenAnswer() to click function, retrieving the random index text and displaying it through the .text class (line 43 in index.html)
document.querySelector('.ballbutton').addEventListener('click', givenAnswer);
document.querySelector('.text').addEventListener('click', givenAnswer);


// Allows animations to repeat on each click
function reset_animation_text() {
    var el = document.getElementById('textBox');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
  }
  function reset_animation_ball() {
    var el = document.getElementById('ballAni');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
  }


