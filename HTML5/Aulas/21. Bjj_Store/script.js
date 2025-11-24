
function addCart(item){
  alert(item + " adicionado ao carrinho!");
}
function enviarFormulario(e){
  e.preventDefault();
  alert("Formulário enviado com sucesso!");
}
function buscarLocalizacao(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos=>{
      document.getElementById("localizacao").innerText =
        "Lat: " + pos.coords.latitude + " | Lng: " + pos.coords.longitude;
    });
  }
}
