console.log('Loaded!');

//change the text of main-text
var element= document.getElementById('main-text');
element.innerHTML='New Value';


//move the image
var img=document.getElementById('madi');

img.onclick=function() {
   // var interval=setInterval
    img.style.marginLeft='100px';
    
};