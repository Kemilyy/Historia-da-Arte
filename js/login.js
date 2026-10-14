(() => {
    const formEl = document.querySelector("form");
    const inputEmailEl = document.querySelector("#input-email");
    const inputSenhaEl = document.querySelector("#input-senha");
    const msgErroEl = document.querySelector("#msg-erro");
    const btnVisitanteEl = document.querySelector("#btn-visitante");

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();

        let email = inputEmailEl.value;
        let senha = inputSenhaEl.value;

        let testeEmail = email === localStorage.getItem("email");
        let testeSenha = senha === localStorage.getItem("senha");
        let teste = testeEmail && testeSenha;

        if (teste) {
            localStorage.setItem("logou", "1");
            localStorage.removeItem("visitante");
            window.location.href = "../index.html";
        } else {
            msgErroEl.style.display = "block";
        }
    });

    btnVisitanteEl.addEventListener("click", () => {
        localStorage.setItem("logou", "1"); // libera o acesso ao site
        localStorage.setItem("visitante", "1"); // marca que é um visitante
        window.location.href = "../index.html";
    });
})();
