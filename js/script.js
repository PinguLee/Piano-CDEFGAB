const canvas = document.getElementById('piano');
const ctx = canvas.getContext('2d');

let arr = ["red","orange","yellow","green","blue","navy","violet"];
let arr1 = ["도","레","미","파","솔","라","시"];

for ( let i = 0; i < 7; i++){
    ctx.fillStyle = arr[i]
    ctx.fillRect(i*100, 0, 100,500);
}



canvas.addEventListener('click',(e)=>{
    let clickX = e.clientX-ctx.canvas.offsetLeft;
    for( let i = 0 ; i < arr1.length ; i++){
        if(i < clickX && clickX < (i+1)*100){
            console.log(arr1[i]);
            return;
        }
    }
})