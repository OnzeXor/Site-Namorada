let passos = 0;
const direita = document.querySelector(".up");
const esquerda = document.querySelector(".down");
const fotos = document.querySelectorAll(".foto");
const hud = document.querySelector(".hud");
const carta = document.querySelector(".carta");
const envelope = document.querySelector(".envelope");

function atualizar() {
    fotos.forEach((foto, index) => {
        foto.classList.remove("focado", "antes", "depois", "done");
        if (index === passos) {
            foto.classList.add("focado");
        } else if (index === passos - 1) {
            foto.classList.add("antes");
        } else if (index === passos + 1) {
            foto.classList.add("depois");
        } else if (index < passos - 1) {
            foto.classList.add("done");
        }
    });

    if (passos === fotos.length - 1) {
        hud.classList.add("abrir");
    } else {
        hud.classList.remove("abrir");
        envelope.classList.remove("aberto");
        carta.classList.remove("ativa");
    }
}

direita.addEventListener("click", () => {
    if (passos < fotos.length - 1) {
        passos++;
        atualizar();
    } else if (hud.classList.contains("abrir")) {
        envelope.classList.add("aberto");
        setTimeout(() => {
            carta.classList.add("ativa");
        }, 800);
    }
});

esquerda.addEventListener("click", () => {
    if (passos > 0) {
        passos--;
        atualizar();
    }
});

atualizar();
