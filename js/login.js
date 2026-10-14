(() => {
    const formEl = document.querySelector("form");
    const inputEmailEl = document.querySelector("#input-email");
    const inputSenhaEl = document.querySelector("#input-senha");
    const msgErroEl = document.querySelector("#msg-erro");
    const btnDemoEl = document.querySelector("#btn-demo");

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();

        let email = inputEmailEl.value;
        let senha = inputSenhaEl.value;

        let testeEmail = email === localStorage.getItem("email");
        let testeSenha = senha === localStorage.getItem("senha");
        let teste = testeEmail && testeSenha;

        if (teste) {
            localStorage.setItem('logou', '1');
            localStorage.removeItem('demo');
            window.location.href = "../index.html";
        } else {
            msgErroEl.style.display = "block";
        }
    });

    // Acesso de demonstração: entra sem precisar de cadastro
    btnDemoEl.addEventListener("click", () => {
        localStorage.setItem('logou', '1');
        localStorage.setItem('demo', '1');
        window.location.href = "../index.html";
    });
})();