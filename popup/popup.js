const button=document.querySelector('button');
const popup=document.querySelector('.popup-wrapper');
const cross=document.querySelector('.popup-close')
button.addEventListener('click',()=>{
    popup.style.display='block';
});
cross.addEventListener('click',()=>{
    popup.style.display='none';
});
popup.addEventListener('click',e=>{
    //console.log(e);
    
    popup.style.display='none';
});