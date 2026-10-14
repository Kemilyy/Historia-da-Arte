// Área de conta no canto superior direito (usada na página inicial e no quiz).
// O atributo data-raiz do <script> diz onde fica a raiz do site:
//   index.html  -> data-raiz=""
//   html/*.html -> data-raiz="../"
(() => {
    const raiz = document.currentScript.dataset.raiz || "";

    const logado = localStorage.getItem("logou") === "1";
    const demo = localStorage.getItem("demo") === "1";
    const primeiroNome = (localStorage.getItem("nome") || "").trim().split(" ")[0];
    const nome = demo ? "Visitante" : primeiroNome || "Conta";

    const area = document.createElement("div");
    area.className = "conta";

    if (logado) {
        const saudacao = document.createElement("span");
        saudacao.className = "conta-saudacao";
        saudacao.textContent = `Olá, ${nome}`;

        const sair = document.createElement("button");
        sair.type = "button";
        sair.className = "conta-botao";
        sair.textContent = "Sair";
        sair.addEventListener("click", () => {
            localStorage.removeItem("logou");
            localStorage.removeItem("demo");
            location.reload();
        });

        area.append(saudacao, sair);
    } else {
        const entrar = document.createElement("a");
        entrar.className = "conta-botao";
        entrar.href = raiz + "html/login.html";
        entrar.textContent = "Entrar";
        area.append(entrar);
    }

    document.body.prepend(area);
})();