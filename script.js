var seconds = 100;
var count = document.getElementById("seconds-counter");

function decreaseSeconds() {
    seconds -= 1;
    count.innerText = "Score " + seconds;

}

var Score = setInterval(decreaseSeconds, 1000);


var quesnum = 0,
    test,
    question,
    choice,
    choices,
    choiceA,
    choiceB,
    choiceC,
    numCorrect = 0;

var questions = [
    ["Who invented JavaScript?", "Douglas Crockford", "Brendan Eich", "Betty Crocker", "B"],
    ["what does HTML stamd for?", "Heavy Technical Metal Lists", "Heafty Techinical Machine Language", "Hyper Text Markup Language", "C"],
    ["Which language is used for styling web pages?", "CSS", "HTML", "Java", "A"],
    ["What is the < div > tag used for", "creating a header", "styling elements", "A container for elements", "C"]
];

function get(x) {
    return document.getElementById(x);
}

function showQuiz() {
    test = get("test");
    if (quesnum >= questions.length) {
        test.innerHTML = "<h2>Your score is </h2> " + seconds;
        get("testComplete").innerHTML = "Test completed";

        quesnum = 0;
        numCorrect = 0;

        return false;
    }

    question = questions[quesnum][0];
    choiceA = questions[quesnum][1];
    choiceB = questions[quesnum][2];
    choiceC = questions[quesnum][3];
    test.innerHTML = "<h3>" + question + "</h3>";

    test.innerHTML += "<input type='radio' name='choices' value='A'> " + choiceA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + choiceB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + choiceC + "<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {

    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }

    if (choice == questions[quesnum][4]) {

        seconds += 100;
    } else {
        seconds -= 200;
    }

    quesnum++;

    showQuiz();
}
window.addEventListener("load", showQuiz, false);