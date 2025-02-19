const hiraganas = [
    "assets/img/a.png",
    "assets/img/chi.png",
    "assets/img/e.png",
    "assets/img/fu.png",
    "assets/img/ha.png",
    "assets/img/he.png",
    "assets/img/hi.png",
    "assets/img/ho.png",
    "assets/img/i.png",
    "assets/img/ka.png",
    "assets/img/ke.png",
    "assets/img/ki.png",
    "assets/img/ko.png",
    "assets/img/ku.png",
    "assets/img/ma.png",
    "assets/img/me.png",
    "assets/img/mi.png",
    "assets/img/mo.png",
    "assets/img/mu.png",
    "assets/img/n.png",
    "assets/img/na.png",
    "assets/img/ne.png",
    "assets/img/ni.png",
    "assets/img/no.png",
    "assets/img/nu.png",
    "assets/img/o.png",
    "assets/img/ra.png",
    "assets/img/re.png",
    "assets/img/ri.png",
    "assets/img/ro.png",
    "assets/img/ru.png",
    "assets/img/sa.png",
    "assets/img/se.png",
    "assets/img/shi.png",
    "assets/img/so.png",
    "assets/img/su.png",
    "assets/img/ta.png",
    "assets/img/te.png",
    "assets/img/to.png",
    "assets/img/tsu.png",
    "assets/img/u.png",
    "assets/img/wa.png",
    "assets/img/we.png",
    "assets/img/wi.png",
    "assets/img/wo.png",
    "assets/img/ya.png",
    "assets/img/yo.png",
    "assets/img/yu.png",
];
const meow = new Audio("assets/sound/meow.mp3");
const correct = new Audio("assets/sound/correct.mp3");
const wrong = new Audio("assets/sound/wrong.mp3");
const buttons = ["button1", "button2", "button3"];
function onInit() {
    document.getElementById("btn").addEventListener("click", hiragana);
    catEasterEgg();
}
function catEasterEgg() {
    const cat = document.getElementById("cat");
    cat.addEventListener("click", () => {
        cat.style.top = "-125px";
        meow.play();
        setTimeout(() => {
            cat.style.top = "-120px";
        }, 1000);
    });
}
function hiragana() {
    resetButtons();
    let buttonsDiv = document.querySelector(".box div");
    buttonsDiv.style.display = "flex";
    let startButton = document.getElementById("btn");
    startButton.style.display = "none";
    let img = document.getElementById("hiraganaImg");
    img.style.display = "block";

    const correctItem = hiraganas[Math.floor(Math.random() * hiraganas.length)];
    const randomItem1 = hiraganas[Math.floor(Math.random() * hiraganas.length)];
    const randomItem2 = hiraganas[Math.floor(Math.random() * hiraganas.length)];
    const randomItem3 = hiraganas[Math.floor(Math.random() * hiraganas.length)];
    const randomButtonId = buttons[Math.floor(Math.random() * buttons.length)];
    let randomButton = document.getElementById(randomButtonId);
    img.src = correctItem;

    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");
    button1.innerText = formatText(randomItem1);
    button2.innerText = formatText(randomItem2);
    button3.innerText = formatText(randomItem3);
    let correctItemFormated = formatText(correctItem);
    randomButton.innerText = formatText(correctItem);
    buttonClick("button1", correctItemFormated, score);
    buttonClick("button2", correctItemFormated, score);
    buttonClick("button3", correctItemFormated, score);
}
let score = 0;

function formatText(random) {
    const parts = random.split("/");
    const result = parts.pop();
    const resultParts = result.split(".");
    const finalResult = resultParts[0];
    return finalResult;
}

function resetButtons() {
    buttons.forEach((element) => {
        let button = document.getElementById(element);
        button.style.backgroundColor = "#fff";
        button.disabled = false;
    });
}

function blockButtons() {
    buttons.forEach((element) => {
        let button = document.getElementById(element);
        button.disabled = true;
    });
}
function buttonClick(button, correctItem) {
    document.getElementById(button).addEventListener("click", () => {
        let buttonElement = document.getElementById(button);
        let buttonText = buttonElement.innerText;
        if (buttonText == correctItem) {
            blockButtons();
            correct.play();
            buttonElement.style.backgroundColor = "#b3ff7a";
            setTimeout(function () {
                score++;
                document.getElementById("score").innerText = score;
                hiragana();
            }, 2000);
        } else {
            buttonElement.style.backgroundColor = "#ff6464";
        }
    });
}

onInit();
