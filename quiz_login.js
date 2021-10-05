function facebook(){
    window.open("https://www.facebook.com/");
}
function instagram(){
    window.open("https://www.instagram.com/");
}
function twitter(){
    window.open("https://twitter.com/?lang=en");
}
function google(){
    window.open("https://www.whitehatjr.com/");
}
function gmail(){
    window.open("mailto:drlrkhrajjain@gmail.com");
}
function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player-1", player1_name);
    localStorage.setItem("player-2", player2_name);
    window.location = "quiz_game_page.html";
}