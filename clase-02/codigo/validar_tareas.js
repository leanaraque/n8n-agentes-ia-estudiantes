return items.map(item => {
  const tarea = item.json;
  const errores = [];

  if (!tarea.titulo || tarea.titulo.trim() === "") {
    errores.push("Falta el título");
  }
  if (!tarea.responsable || tarea.responsable.trim() === "") {
    errores.push("Falta el responsable");
  }
  if (!tarea.estado || tarea.estado.trim() === "") {
    errores.push("Falta el estado");
  }

  tarea.es_valida = errores.length === 0;
  tarea.errores = errores;
  return item;
});
