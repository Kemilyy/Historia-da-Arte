(() => {
    const formEl = document.querySelector("form");
    const inputNomeEl = document.querySelector("#input-nome");
    const inputEmailEl = document.querySelector("#input-email");
    const inputSenhaEl = document.querySelector("#input-senha");

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();

        let nome = inputNomeEl.value.trim();
        let email = inputEmailEl.value.trim();
        let senha = inputSenhaEl.value;

        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);

        window.location.href = "login.html";
    });
})();
