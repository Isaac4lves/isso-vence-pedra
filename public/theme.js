let i = 0;
let theme;
let theme_secodary;
let paragraph_color;

function switch_theme() {
    i = i + 1;

    if (document.querySelector("#switch_mode").checked) {
        theme = "#111213";
        paragraph_color = "#FFF";
        other_color = "#9A9A9A";
        document.querySelector("#oponente_player").style.color = "#FFF";
    
    } else {
        theme = "#FFF";
        theme_secodary = "#FFF";
        paragraph_color = "#191919";
        other_color - "#9A9A9A";
        document.querySelector("#oponente_player").style.color = "#232323";

    }

    document.querySelector("body").style.backgroundColor = theme;
    document.querySelector(".container-fluid").style.backgroundColor = theme;
    document.querySelector("#pontuação").style.color = other_color; 
    document.querySelector("#rodada").style.color = other_color;
    document.querySelector("h1").style.color = paragraph_color;
    document.querySelector("#oponente_system").style.color = paragraph_color;
    document.querySelector(".resposta").style.color = paragraph_color;
}
