const form = document.getElementById("#form")
const nome = document.getElementById("#name")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nome.value === ""){
        alert("OIII")
        return
    }

    form.submit()
})