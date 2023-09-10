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
"assets/img/yu.png"
]

const buttons = [
    "button1",
    "button2",
    "button3"
]

document.getElementById("btn").addEventListener("click", () => {
    let img = document.getElementById("hiraganaImg");
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
    randomButton.innerText = formatText(correctItem);
    
    let text = document.getElementById("text");
    text.innerText = formatText(correctItem);
})

function formatText(random) {
    const parts = random.split('/');
    const result = parts.pop();
    const resultParts = result.split('.');
    const finalResult = resultParts[0];
    return finalResult
}