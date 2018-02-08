
function drag(foto) {
  console.log(foto.target.src);
  foto.dataTransfer.setData('text', foto.target.id);
}

function permitirDrop(foto){
  foto.preventDefault();
}
function drop(foto) {
  foto.preventDefault();
  var id_foto = foto.dataTransfer.getData('text');
  foto.target.appendChild(document.getElementById(id_foto));
}