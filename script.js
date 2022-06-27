document.getElementById("btn").addEventListener("click", () => {
    btn = document.getElementById("btn")
    if (btn.innerHTML == "Começar") {
        document.getElementById("btn").innerHTML = "teste"
    } else {
        document.getElementById("btn").innerHTML = "Começar" 
    }
    
})