// To enter the player's name

var newgameClick=document.querySelector('#newgame');
newgameClick.addEventListener('click',function(){
    var namePlayer=document.getElementsByClassName('playerName')[0];
    var nameValue=namePlayer.value;
    localStorage.setItem("nameEntered",nameValue);
});


