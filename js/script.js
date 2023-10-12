const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

for ( let i = 0; i < 7; i++){
    ctx.fillRect(i*50, 50, 50, 300);
}

ctx.addEventListener('click',(e)=>{
    console.log(e);
})