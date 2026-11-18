# Clase 4 · Clientes enojados y seguimiento

Miércoles 25/11/2026.

## Qué vimos

- Lo que un agente hace con texto en un negocio: **clasificar**, analizar **sentimiento**, **resumir** y **generar** borradores; herramientas (tool-use) y memoria, en panorama.
- **Agentes en cadena:** cada agente hace una sola cosa y usa lo que dijeron los anteriores.
- La **Etapa 3** del proyecto: `PI_Etapa3_Asistente_Operativo_Inteligente`. Un agente lee el comentario de cada tarea, otro escribe un resumen ejecutivo, un IF decide qué tareas necesitan seguimiento prioritario y un Summarize arma el reporte para Carolina.
- **Sin código nuevo:** todo con Merge, Edit Fields, IF y Summarize, y expresiones de un solo dato.

## El patrón de cada agente

| Paso | Nodo | Para qué |
|---|---|---|
| Pensar | **Basic LLM Chain** con **Groq Chat Model** y **Structured Output Parser** | El agente responde en JSON |
| Juntar | **Merge** > Mode **Combine** > Combine By **Position** | La respuesta (Input 1) se junta con la tarea (Input 2) |
| Guardar | **Edit Fields** con los campos arrastrados desde `output` e **Include Other Input Fields** | La tarea conserva todo y suma los datos de la IA |

## Un modelo por agente

| Agente | Modelo |
|---|---|
| `Clasificar tarea con IA` | `openai/gpt-oss-20b` |
| `Agente análisis de sentimiento` | `qwen/qwen3.8-27b` |
| `Agente resumen ejecutivo` | `openai/gpt-oss-120b` |

El plan gratuito de Groq limita cada modelo por separado. Con los tres agentes en el mismo modelo, una ejecución pasa el límite y aparece el error **429**. Si te aparece igual, espera un minuto y vuelve a ejecutar.

## Lo que se copia

| Para | Archivo |
|---|---|
| Las tareas con comentario (`Crear tareas de ejemplo`) | [codigo/tareas_con_comentario.js](codigo/tareas_con_comentario.js) |
| El prompt del agente de sentimiento | [codigo/prompt_agente_sentimiento.txt](codigo/prompt_agente_sentimiento.txt) |
| El JSON Example del sentimiento | [codigo/ejemplo_sentimiento.json](codigo/ejemplo_sentimiento.json) |
| El prompt del agente de resumen ejecutivo | [codigo/prompt_agente_resumen.txt](codigo/prompt_agente_resumen.txt) |
| El JSON Example del resumen | [codigo/ejemplo_resumen.json](codigo/ejemplo_resumen.json) |
| El campo `mensaje_interno` de `Preparar seguimiento` | [codigo/mensaje_interno.txt](codigo/mensaje_interno.txt) |
| El campo `linea` de `Preparar reporte` | [codigo/linea_reporte.txt](codigo/linea_reporte.txt) |
| El campo `mensaje` de `Mensaje para Carolina` | [codigo/mensaje_para_carolina.txt](codigo/mensaje_para_carolina.txt) |

## Los workflows de la clase

| Carpeta | Qué tiene |
|---|---|
| `inicio/` | La Etapa 2 simplificada, sin código nuevo: el punto de partida |
| `pasos/paso-1/` | `PI_Etapa3_Asistente_Operativo_Inteligente` con las tareas con comentario |
| `pasos/paso-2/` | + agente de sentimiento (pensar, juntar, guardar) |
| `pasos/paso-3/` | + agente de resumen ejecutivo |
| `pasos/paso-4/` | + `¿Seguimiento prioritario?` con sus dos caminos |
| `pasos/paso-5/` | + reporte consolidado y mensaje para Carolina |
| `final/` | El paso 5 con notas en el lienzo |

**Al importar**, abre cada **Groq Chat Model** (hay tres) y elige tu credencial `Groq`.

Para importar: en **Overview**, **Create workflow**; menú de tres puntos > **Import** > **From URL**; pega el link y confirma. El final:

```text
https://raw.githubusercontent.com/leanaraque/n8n-agentes-ia-estudiantes/main/clase-04/final/PI_Etapa3_Asistente_Operativo_Inteligente.json
```

### Comprobación

| Nodo | Qué tienes que ver al ejecutar |
|---|---|
| `Guardar sentimiento` | Solo la tarea 1 con `requiere_escalacion` en `true` (Julio, molesto por el recargo) |
| `Guardar resumen ejecutivo` | Las 5 tareas con idea principal, riesgos, próximos pasos y fecha de seguimiento |
| `Preparar seguimiento` | 3 tareas: la 1, la 3 y la 6 |
| `Construir reporte consolidado` | `count_id` 5, `sum_es_alta` 3, `sum_es_negativo` 1, `sum_cuenta_seguimiento` 3 |
| `Mensaje para Carolina` | "Buen día, Carolina. Este es el reporte de hoy." con los números y una línea por tarea |

## Tarea (de 1 a 3 horas)

1. **Desafío del Módulo 3** (análisis de comentarios de clientes), en la plataforma. Se arma con lo de hoy, **sin código**: Basic LLM Chain, Groq Chat Model, Structured Output Parser e IF.
2. **Examen del Módulo 3**, en la plataforma.
3. **Export JSON** de `PI_Etapa3_Asistente_Operativo_Inteligente` y guárdalo en `Documentos\Estudio Rivas`.
4. Para la Clase 5: ten a mano tu Gmail del curso y Telegram en el teléfono (o [Telegram Web](https://web.telegram.org)).

## Próxima clase

Lunes 30/11: el sistema lee el Gmail del estudio, prepara borradores, agenda reuniones en Google Calendar, registra todo en Google Sheets y avisa por Telegram.
