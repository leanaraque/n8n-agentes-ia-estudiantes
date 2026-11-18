const prioridadesValidas = ["alta", "media", "baja"];

return items.map(item => {
  const tarea = item.json.output || {};
  const errores = [];

  if (!tarea.id) {
    errores.push("Falta id");
  }
  if (!tarea.prioridad_ia || !prioridadesValidas.includes(tarea.prioridad_ia.toLowerCase())) {
    errores.push("Prioridad IA inválida");
  }
  if (!tarea.resumen_ia) {
    errores.push("Falta resumen IA");
  }
  if (typeof tarea.requiere_accion !== "boolean") {
    errores.push("El campo requiere_accion debe ser booleano");
  }

  return {
    json: {
      ...tarea,
      prioridad_ia: tarea.prioridad_ia ? tarea.prioridad_ia.toLowerCase() : null,
      salida_ia_valida: errores.length === 0,
      errores_salida_ia: errores
    }
  };
});
