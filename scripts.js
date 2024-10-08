const pregunta = {
  titulo: "¿A quién ha doblado más veces Constantino Romero?",
  respuestas: [
    {
      label: "Clint Eastwood",
      id: "clint-eastwood",
      name: "actor",
      value: "clint-eastwood",
    },
    {
      label: "James Earl",
      id: "james-earl",
      name: "actor",
      value: "james-earl",
    },
    {
      label: "Roger Moore",
      id: "roger-moore",
      name: "actor",
      value: "roger-moore",
    },
    {
      label: "William Shatner",
      id: "william-shatner",
      name: "actor",
      value: "william-shatner",
    },
    {
      label: "Arnold Schwarzenegger",
      id: "arnold-schwarzenegger",
      name: "actor",
      value: "arnold-schwarzenegger",
    },
  ],
};

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  return "<p>" + pregunta.titulo + "</p>";
}

function imprimeTodasLasRespuestas(pregunta) {
  let todasPreguntas = "";
  for (let i = 0; i < pregunta.respuestas.length; i++) {
    todasPreguntas += imprimeUnaRespuesta(pregunta.respuestas[i]);
  }
  return todasPreguntas;
}

function imprimeUnaRespuesta(respuesta) {
  let textoRespuesta = "";
  textoRespuesta += imprimeLabel(respuesta) + "\n";
  textoRespuesta += imprimeInput(respuesta) + "\n";
  return textoRespuesta;
}

function imprimeLabel(respuesta) {
  return `<label for="${respuesta.id}">${respuesta.label}</label>`;
}

function imprimeInput(respuesta) {
  return `<input id="${respuesta.id}" name="${respuesta.name}" type="radio" value="${respuesta.value}">`;
}

document.getElementById("contenedorPreguntas").innerHTML =
  imprimePregunta(pregunta);
