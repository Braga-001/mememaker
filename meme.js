const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let img = null;
document.getElementById('imageInput').onchange = e => {
  let reader = new FileReader();
  reader.onload = ev => { img = new Image(); img.onload = draw; img.src = ev.target.result; }
  reader.readAsDataURL(e.target.files[0]);
};
function draw(){
  ctx.drawImage(img,0,0,400,400);
  ctx.fillStyle='white'; ctx.strokeStyle='black'; ctx.lineWidth=3;
  ctx.font='bold 32px Arial'; ctx.textAlign='center';
  ctx.fillText(document.getElementById('topText').value.toUpperCase(),200,40);
  ctx.strokeText(document.getElementById('topText').value.toUpperCase(),200,40);
  ctx.fillText(document.getElementById('bottomText').value.toUpperCase(),200,380);
  ctx.strokeText(document.getElementById('bottomText').value.toUpperCase(),200,380);
}
document.getElementById('topText').oninput = draw;
document.getElementById('bottomText').oninput = draw;
function downloadMeme(){
  let a = document.createElement('a');
  a.download='meme.png'; a.href=canvas.toDataURL(); a.click();
}