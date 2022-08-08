window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    var div = document.getElementsByClassName('firstimp')[0];
    console.log(scroll)
    if(scroll<=100){
        div.style='transform:scale(1.3)';
    }
    if(scroll>100){div.style='transform:scale(1)';}
    var i = document.getElementsByClassName('background')[0];
    i.style='top:'+scroll*0.5+'px';
    
});

let counts=setInterval(updated,100);
let upto=0;
function updated(){
    var count= document.getElementById('counter');
    count.innerHTML=++upto+'+';
    if(upto===160)
    {
        clearInterval(counts);
    }
}



    