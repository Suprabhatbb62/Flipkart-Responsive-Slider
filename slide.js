let pos=1;
changeslide(pos); //by default 1st image

//when click next/prev
function ClickToChange(n){
    changeslide(pos += n);
}
//auto slide
setInterval(()=>{
    ClickToChange(pos)
}, 3000);

function changeslide(n){
    const slides=document.getElementsByClassName("sliderimg");
    //when next button clicked > images count
    if(n>slides.length){
        pos=1; 
    }
    //when next button clicked < images count
    if(n < 1){
        pos=slides.length;
    }
    for(let i=0;i<slides.length;i++){
        // making all image hidden
        slides[i].style.display="none";
    }
    slides[pos-1].style.display="block";
    // -1, as index starts from 0
}