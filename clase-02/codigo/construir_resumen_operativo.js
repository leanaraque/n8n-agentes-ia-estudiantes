const tareas = items.map(item => item.json);

const resumen = {
  fecha_generacion: new Date().toISOString(),
  cantidad_tareas_atencion: tareas.length,
  tareas: tareas.map(tarea => ({
    id: tarea.id,
    titulo: tarea.titulo,
    responsable: tarea.responsable,
    estado: tarea.estado,
    prioridad: tarea.prioridad,
    fecha_vencimiento: tarea.fecha_vencimiento
  }))
};

return [{ json: resumen }];
