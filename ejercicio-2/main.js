let container = document.getElementById("contenedor");
let paises = [  {img:"img seleciones/brasil.jfif", nombre: "brasil", descripcion: " Brasil es la selecion que siempre se ha clasificado en los mundiales y es el que mas cuenta con copas mundiales 5 en total"},
                {img:"img seleciones/argentina.jfif",nombre: "argentina", descripcion: "La selección siendo campeona en tres ocasiones: Argentina 1978 y        México 1986 y en Qatar 2022"},
                {img:"img seleciones/italia.jfif",nombre: "italia", descripcion: "   En la Copa de Campeones Conmebol-UEFA 2022, Italia es la única selección nacional medallista en todas las competiciones oficiales organizadas por la FIFA y la UEFA para las principales selecciones nacionales y tiene 4 copas del mundo"},
                {img:"img seleciones/españa.jfif",nombre: "españa", descripcion: " Es una seleccion de europa y tiene 1 copa del mundo, es un equipo que tiene una participacion constante desdecreacion de 1920 formados por nacionalidad española"},
                {img:"img seleciones/alemania.jfif",nombre: "alemania", descripcion: "La selección de fútbol de Alemania ha participado en 20 ediciones de la Copa Mundial de Fútbol y fue anfitriona en las ediciones de 1974 y 2006. Ha conquistado la copa del mundo en  cuatro ocasiones, en 1954, 1974, 1990 y 2014"}, 
                {img:"img seleciones/francia.jfif",nombre: "francia", descripcion: "Es el equipo representativo del país en las competiciones oficiales de fútbol masculino. Su organización está a cargo de la Federación Francesa de Fútbol y tiene 2 copas del mundo"},];

for (let i = 0; i < paises.length; i++) {
    container.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4">
    <div class="card h-100">
      <img
        src="${paises[i].img}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${paises[i].nombre}</h5>
        <p class="card-text">
          ${paises[i].descripcion}
        </p>
        <a href="#" class="btn btn-primary">Go </a>
      </div>
    </div>
  </div>`;
    
}