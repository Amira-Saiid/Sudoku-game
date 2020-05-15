var i=0;
var columns=document.getElementsByClassName("grid-item");
var play=document.querySelector('#playBtn');
var home=document.getElementById("homeBtn");
var time=document.getElementById("Count");

// Time


//Player name
var playerName=document.getElementById("playerName");
var names=localStorage.getItem("nameEntered");
playerName.innerText="Welcome   "+names;


//Addind shapes
var firstImg=document.createElement('img');
firstImg.setAttribute('src','images/1.jpg');
firstImg.style.width='80px';
var secondImg=document.createElement('img');
secondImg.setAttribute('src','images/2.jpg');
secondImg.style.width='80px';
var thirdImg=document.createElement('img');
thirdImg.setAttribute('src','images/3.jpg');
thirdImg.style.width='80px';
var fourthImg=document.createElement('img');
fourthImg.setAttribute('src','images/4.jpg');
fourthImg.style.width='80px';

//Random images
columns[Math.ceil(Math.random()*15)].appendChild(firstImg);
columns[Math.ceil(Math.random()*15)].appendChild(secondImg);
columns[Math.ceil(Math.random()*15)].appendChild(thirdImg);
columns[Math.ceil(Math.random()*15)].appendChild(fourthImg);


home.onclick=function()
{
    console.log("home");
    window.Location.href='file:///E:/ITI/JScript/Project%20js/ProjectSuduko/page1.html';
}

//Start the game
play.onclick=function()
{
    time.innerText=0;
    var counter = 0;
    setInterval(function(){
        time.innerText = counter
        counter++;
        if(counter==40)
        {
            alert ("GAME OVER !");
        }
    
    },1000);
    
    console.log("play");
  columns[i].classList.add("shade");

 window.addEventListener("keydown",function(e){
    switch (e.keyCode){
        case 39:
            console.log("right");
            columns[i].classList.remove("shade");
            i++;
            columns[i].classList.add("shade");
            break;
            
         case 37:
             columns[i].classList.remove("shade");
             i--;
             columns[i].classList.add("shade");
             break;

         case 40:
            columns[i].classList.remove("shade");
            i=i+4;
            columns[i].classList.add("shade");
            break;

            case 38:
            columns[i].classList.remove("shade");
            i=i-4;
            columns[i].classList.add("shade");
            break;

            case 49:
                
                var firstshape=document.createElement('img');
                 firstshape.setAttribute('src','images/1.jpg');
                 firstshape.style.width='80px';
                 columns[i].appendChild(firstshape);
                 
                break;
            case 50:
                var secondShape=document.createElement('img');
                 secondShape.setAttribute('src','images/2.jpg');
                 secondShape.style.width='80px';
                 columns[i].appendChild(secondShape);
                break;
            case 51:
                var thirdShape=document.createElement('img');
                 thirdShape.setAttribute('src','images/3.jpg');
                 thirdShape.style.width='80px';
                 columns[i].appendChild(thirdShape);
                break;
            case 52:
                var fourthShape=document.createElement('img');
                 fourthShape.setAttribute('src','images/4.jpg');
                 fourthShape.style.width='80px';
                 columns[i].appendChild(fourthShape);
                break;
    }
    });
}







