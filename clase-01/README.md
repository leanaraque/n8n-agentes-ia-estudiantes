# Clase 1 · De la planilla al primer workflow

Miércoles 11/11/2026.

## Qué vimos

- El curso y el caso del **Estudio Rivas**: una consultora contable que pierde vencimientos, horas de emails y clientes que esperan dos días una respuesta.
- Qué es **n8n** y por qué usamos **n8n Cloud**, con sus tres cuentas de prueba (ver el [README del curso](../README.md)).
- Automatización por reglas, con IA y con agentes: una regla compara, la IA interpreta y un agente decide y actúa con herramientas.
- Las piezas de un workflow: **disparador**, **nodo** e **ítem**, y cómo se lee un dato en **JSON** (clave y valor).
- El primer workflow del proyecto: `PI_Etapa1_Resumen_Operativo` con las seis tareas del estudio (Etapa 1, consignas 1 y 2).

## Los workflows de la clase

| Carpeta | Qué tiene |
|---|---|
| `pasos/paso-1/` | El workflow con el disparador **When clicking ‘Execute workflow’** |
| `pasos/paso-2/` | + el nodo Code **Crear tareas de ejemplo**, que devuelve 6 ítems |
| `final/` | Lo mismo que el paso 2, con el código comentado y notas en el lienzo |

### Cómo importar un paso

1. En n8n, en **Overview**, haz clic en **Create workflow**.
2. Menú de tres puntos (arriba a la derecha) > **Import** > **From URL**.
3. Pega el link del archivo y confirma:

   ```text
   https://raw.githubusercontent.com/leanaraque/n8n-agentes-ia-estudiantes/main/clase-01/final/PI_Etapa1_Resumen_Operativo.json
   ```

4. **Ctrl + S** y haz clic en **Execute workflow**. El nodo `Crear tareas de ejemplo` tiene que mostrar **6 items**.

Para otro paso, cambia `final` por `pasos/paso-1` o `pasos/paso-2` en el link.

### Comprobación

| Qué haces | Qué tienes que ver |
|---|---|
| **Execute workflow** | Los dos nodos con un tilde verde |
| Doble clic en `Crear tareas de ejemplo` | En **OUTPUT**: **6 items**. En la vista **Table**, la tarea 5 tiene el título vacío |
| Menú de tres puntos > **Export JSON** | Se descarga `PI_Etapa1_Resumen_Operativo.json` |

## Tarea (unos 30 minutos)

1. **Zona horaria de tu cuenta.** Abre [app.n8n.cloud](https://app.n8n.cloud) e inicia sesión. Entra a **Instance settings**. En la sección **Runtime**, en **Time zone**, escribe tu ciudad o la capital de tu país, elígela y haz clic en **Save and restart**. Tu n8n se reinicia y queda fuera de línea un minuto.
2. **Lectura.** `3. Nodos core.pdf` del Módulo 1, en la plataforma.
3. **Tu caso.** Anota tres tareas repetitivas de tu trabajo y, para cada una, qué la dispara (un email, una hora del día, un formulario) y qué datos usa. Las usamos en la Clase 2.

Y si no lo hiciste en clase: exporta tu workflow (menú de tres puntos > **Export JSON**) y guárdalo en `Documentos\Estudio Rivas`.

## Próxima clase

Lunes 16/11: el workflow descarta la tarea sin título, se queda con lo importante y arma el resumen de la mañana para Carolina. Después de esa clase va el Desafío del Módulo 1.
