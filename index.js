let size=document.querySelectorAll(".drum").length;
for(let i=0;i<size;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        value=this.innerText;
        playsound(value);
        animation(value)
    });
    }
    document.addEventListener("keydown",function(event){
        playsound(event.key);
        animation(event.key);

    })
    function playsound(value){
        if(value=='w'){
            var play=new Audio("sounds/tom-1.mp3");
            play.play();
        }
        else if(value=='a'){
            var play=new Audio("sounds/tom-2.mp3");
            play.play();

        }
        else if(value=='s'){
            var play=new Audio("sounds/tom-3.mp3");
            play.play();
            
        }
        else if(value=='d'){
            var play=new Audio("sounds/tom-4.mp3");
            play.play();
            
        }
        else if(value=='j'){
            var play=new Audio("sounds/crash.mp3");
            play.play();
            
        }
        else if(value=='k'){
            var play=new Audio("sounds/kick-bass.mp3");
            play.play();
            
        }
        else if(value=='l'){
            var play=new Audio("sounds/snare.mp3");
            play.play();
        }
    }
    function animation(key){
        var btn=document.querySelector(`.${key}`);
        btn.classList.add("pressed");
        setTimeout(function (){
            btn.classList.remove("pressed");
        },100);
    }
