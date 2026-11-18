const tareas = items
  .map(item => item.json)
  .filter(tarea => tarea.salida_ia_valida);

const prioridadAlta = tareas.filter(tarea => tarea.prioridad_ia === "alta");

const resumen = {
  fecha_generacion: new Date().toISOString(),
  cantidad_tareas_analizadas: tareas.length,
  cantidad_prioridad_alta: prioridadAlta.length,
  tareas: tareas.map(tarea => ({
    id: tarea.id,
    prioridad_ia: tarea.prioridad_ia,
    resumen_ia: tarea.resumen_ia,
    requiere_accion: tarea.requiere_accion,
    justificacion: tarea.justificacion
  }))
};

return [{ json: resumen }];
