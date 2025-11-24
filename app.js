/**
 * @author Jesús Ramos Angulo
 * @author Eva Fedusova
 * @email jramosa999@alumnos.imf.com
 * @email efeduzova359@alumnos.imf.com
 */

fetch("franquicias.json")
  .then((response) => response.json())
  .then((dataFranquicias) => {
    pintarDatosJSON(dataFranquicias);
  })
  .catch((error) => console.log(error));

/**
 * Funcion para pintar los datos en HTML.
 * @param {*} dataFranquicias
 * Retorna la estructura creada html con arreglos en css y los datos obtenidos del archivo .JSON
   */

  function pintarDatosJSON(dataFranquicias) {
  console.log(dataFranquicias["franquicias"]);

  let body = document.getElementById("body");
  body.classList.add("body");

  let main = document.getElementById("contenedor");
  main.classList.add("main");

  //--- SECTION LOGO -----//
  let sectionLogo = document.createElement("section");
  sectionLogo.setAttribute("class", "logo");
  // sectionLogo.classList.add("logo");

  let imgNBA = document.createElement("img");
  imgNBA.setAttribute("src", "img/nba-logo-transparent.png");
  imgNBA.setAttribute("class", "imgNBA");
  // imgNBA.classList.add("imgNBA");
  sectionLogo.appendChild(imgNBA);

  let tituloNBA = document.createElement("h1");
  tituloNBA.textContent = "NBA";
  tituloNBA.setAttribute("class", "tituloNBA");
  // tituloNBA.classList.add("tituloNBA");
  sectionLogo.appendChild(tituloNBA);

  // --------------SECTION EQUIPOS --------------//
  let sectionEquipos = document.createElement("section");
  sectionEquipos.setAttribute("class", "equipos");
  // sectionEquipos.classList.add("equipos");

  let sectionEquipo = document.createElement("section");
  sectionEquipo.setAttribute("class", "equipos");
  // sectionEquipo.classList.add("equipo");

  let tituloEquipos = document.createElement("h1");
  tituloEquipos.setAttribute("class", "tituloEquipos");
  tituloEquipos.textContent = "EQUIPOS";
  tituloEquipos.classList.add("h1");
  sectionEquipos.appendChild(tituloEquipos);

  for (franquicia in dataFranquicias["franquicias"]) {
    let divCardEquipo = document.createElement("div");
    divCardEquipo.setAttribute("class", "cardEquipo");
    // divCardEquipo.classList.add("cardEquipo");

    let nameEquipo = document.createElement("h1");
    nameEquipo.textContent =
      dataFranquicias["franquicias"][franquicia]["nombre"];
    nameEquipo.classList.add("h1");
    divCardEquipo.appendChild(nameEquipo);

    let imgEquipo = document.createElement("img");
    let nombreImagen = dataFranquicias["franquicias"][franquicia]["nombre"]
      .split(" ")
      .pop();
    console.log(nombreImagen);
    imgEquipo.setAttribute(
      "src",
      `img/${dataFranquicias["franquicias"][franquicia]["division"]}/${nombreImagen}.svg`
    );
    imgEquipo.setAttribute("alt", "Roto");
    imgEquipo.setAttribute("class", "imgEquipo");
    divCardEquipo.appendChild(imgEquipo);

    let countryEquipo = document.createElement("p");
    countryEquipo.textContent =
      "Cuidad: " + dataFranquicias["franquicias"][franquicia]["ciudad"];
    countryEquipo.classList.add("p");
    divCardEquipo.appendChild(countryEquipo);

    let placeEquipo = document.createElement("p");
    placeEquipo.textContent =
      "Estado: " + dataFranquicias["franquicias"][franquicia]["estado"];
    placeEquipo.classList.add("p");
    divCardEquipo.appendChild(placeEquipo);

    let conferenceEquipo = document.createElement("p");
    conferenceEquipo.textContent =
      "Conferencia: " +
      dataFranquicias["franquicias"][franquicia]["conferencia"];
    conferenceEquipo.classList.add("p");
    divCardEquipo.appendChild(conferenceEquipo);

    let divisionEquipo = document.createElement("p");
    divisionEquipo.textContent =
      "División: " + dataFranquicias["franquicias"][franquicia]["division"];
    divisionEquipo.classList.add("p");
    divCardEquipo.appendChild(divisionEquipo);

    let foundationEquipo = document.createElement("p");
    foundationEquipo.textContent =
      "Fundando: " + dataFranquicias["franquicias"][franquicia]["fundado"];
    foundationEquipo.classList.add("p");
    divCardEquipo.appendChild(foundationEquipo);

    sectionEquipo.appendChild(divCardEquipo);
  }
  sectionEquipos.appendChild(sectionEquipo);

  main.appendChild(sectionLogo);
  main.appendChild(sectionEquipos);
  body.appendChild(main);
}

fetch("nba.xml")
  .then((response) => response.text())
  .then((dataNBA) => {
    pintarDatosNBA(dataNBA);
  })
  .catch((error) => console.log(error));

/**
 * Funcion para pintar los datos en HTML .
 * @param {*} dataFranquicias
 * Retorna la estructura creada html con arreglos en css y los datos obtenidos del archivo .XML
 */

function pintarDatosNBA(dataNBA) {
  console.log(dataNBA);
  let parser = new DOMParser();
  let dataNBA_xml = parser.parseFromString(dataNBA, "text/xml");
  console.log(dataNBA_xml);

  let pavillone = dataNBA_xml.getElementsByTagName("pabellon");

  let container = document.getElementById("contenedor");

  //-------- FRANQUICIAS & JUGADORES   -----------//
  let franquicias = dataNBA_xml.getElementsByTagName("franquicia");

  let sectionJugador = document.createElement("section");
  sectionJugador.setAttribute("class", "sectionJugador");
  // sectionJugador.classList.add("sectionJugador");

  let divCardJug = document.createElement("div");
  divCardJug.setAttribute("class", "divCardJug");
  // divCardJug.classList.add("divCardJug");

  let tituloJugadores = document.createElement("h1");
  tituloJugadores.classList.add("h1");
  tituloJugadores.textContent = "FRANQUICIAS & JUGADORES";
  sectionJugador.appendChild(tituloJugadores);

  for (let i = 0; i < franquicias.length; i++) {
    let cardJugadores = document.createElement("div");
    cardJugadores.setAttribute("class", "cardJugadores");
    cardJugadores.classList.add("cardJugadores");

    let franquicia = franquicias[i];
    let nameTeam = franquicia.getAttribute("nombre");
    let city = franquicia.getAttribute("ciudad");

    let listFranquicias = document.createElement("ul");
    let listItemTeam = document.createElement("li");
    listItemTeam.textContent =
      "Nombre del equipo: " + nameTeam + ", Ciudad: " + city;
    listFranquicias.appendChild(listItemTeam);

    let jugadores = franquicia.getElementsByTagName("jugador");
    let jugadoresLista = document.createElement("ul");

    for (let j = 0; j < jugadores.length; j++) {
      let jugador = jugadores[j];
      let playerName = jugador.getAttribute("nombre");
      let playerPosition = jugador.getAttribute("posicion");
      let playerNumber = jugador.getAttribute("numero");
      let playerTeam = jugador.getAttribute("equipo_actual");
      let playerNickname = jugador.getAttribute("apodo");

      let listItemPlayer = document.createElement("li");
      listItemPlayer.textContent =
        "Nombre del jugador: " +
        playerName +
        ", Posición: " +
        playerPosition +
        ", Número: " +
        playerNumber +
        ", Equipo actual: " +
        playerTeam;
      if (playerNickname) {
        listItemPlayer.textContent += ", Apodo: " + playerNickname;
      }
      jugadoresLista.appendChild(listItemPlayer);
      // cardJugadores.appendChild(listFranquicias);
    }

    listFranquicias.appendChild(jugadoresLista);
    cardJugadores.appendChild(listFranquicias);
    divCardJug.appendChild(cardJugadores);
    sectionJugador.appendChild(divCardJug);
    container.appendChild(sectionJugador);
  }
  // ---------------- FIN FRANQUICIAS & JUGADORES ---------//

  //---------- PABELLONES -------------//
  let sectionPabellon = document.createElement("section");
  sectionPabellon.setAttribute("class", "sectionPabellon");
  // sectionPabellon.classList.add("sectionPabellon");

  let tituloPabellon = document.createElement("h1");
  tituloPabellon.textContent = "PABELLONES";
  tituloPabellon.classList.add("h1");
  sectionPabellon.appendChild(tituloPabellon);

  let pavilloneList = document.createElement("ul");
  pavilloneList.setAttribute("class", "pabellones");

  for (let i = 0; i < pavillone.length; i++) {
    let pavillon = pavillone[i];
    let name = pavillon.getAttribute("nombre");
    let city = pavillon.getAttribute("ciudad");
    let capacity = pavillon.getAttribute("capacidad");

    let listItem = document.createElement("li");
    listItem.textContent =
      "Nombre: " + name + " Ciudad: " + city + " Capacidad: " + capacity;
    pavilloneList.appendChild(listItem);
  }
  sectionPabellon.appendChild(pavilloneList);
  container.appendChild(sectionPabellon);

  //---------- FIN PABELLONES -------------//

  // -------- PREMIOS  -------//
  let sectionPremios = document.createElement("section");
  sectionPremios.setAttribute("class", "sectionPremio");
  // sectionPremios.classList.add("sectionPremio");

  let tituloPremios = document.createElement("h1");
  tituloPremios.textContent = "PREMIOS";
  tituloPremios.classList.add("h1");
  sectionPremios.appendChild(tituloPremios);

  let premios = dataNBA_xml.getElementsByTagName("premio");
  let premiosList = document.createElement("ul");

  for (let i = 0; i < premios.length; i++) {
    let premio = premios[i];
    let nombre = premio.getAttribute("nombre");
    let descripcion = premio.getAttribute("descripcion");
    let categoria = premio.getAttribute("categoria");

    let listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${nombre}</strong>: ${descripcion} (Categoría: ${categoria})`;
    premiosList.appendChild(listItem);
  }
  sectionPremios.appendChild(premiosList);
  container.appendChild(sectionPremios);

  // -------- FIN PREMIOS  -------//

  // ---- DIRIGENTES ----//
  let sectionDirigente = document.createElement("section");
  sectionDirigente.setAttribute("class", "dirigente");
  // sectionDirigente.classList.add("dirigente");

  let tituloDirigente = document.createElement("h1");
  tituloDirigente.textContent = "DIRIGENTES";
  tituloDirigente.classList.add("h1");
  tituloDirigente.classList.add("tituloD");
  sectionDirigente.appendChild(tituloDirigente);

  let dirigentesList = document.createElement("ul");
//accede al primer elemento con el nombre comisionando en xml
  let comisionado = dataNBA_xml.querySelector("comisionado");
  if (comisionado) {
    let nombreComisionado = comisionado.getAttribute("nombre");
    let añosPuestoComisionado = comisionado.getAttribute("años_en_el_puesto");

    let liNombreComisionado = document.createElement("li");
    liNombreComisionado.textContent =
      "Comisionado: " +
      nombreComisionado +
      ". Años en el puesto: " +
      añosPuestoComisionado;
    dirigentesList.appendChild(liNombreComisionado);
  }

  let viceComisionado = dataNBA_xml.querySelector("vice_comisionado");
  if (viceComisionado) {
    let nombreViceComisionado = viceComisionado.getAttribute("nombre");

    let liNombreViceComisionado = document.createElement("li");
    liNombreViceComisionado.textContent =
      "Vice Comisionado: " + nombreViceComisionado;
    dirigentesList.appendChild(liNombreViceComisionado);
  }

  sectionDirigente.appendChild(dirigentesList);
  container.appendChild(sectionDirigente);

  // ---- FIN DIRIGENTES ----//
}
