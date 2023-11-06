

export default function Home() {
  document.tile = "HOME"

  if(sessionStorage.getItem("token-user")){
  return (
    <div>
      <h1>PRI</h1>
      <h2>Grande Oferta!</h2>

      <div>
        <figure>
          <img src="/imagem.png" alt="Logo"/>
          <figcaption></figcaption>
        </figure>
      </div>


    </div>
  )}
  else{
    window.location = "/login";
  }
}
