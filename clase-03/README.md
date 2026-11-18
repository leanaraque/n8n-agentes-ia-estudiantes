# Clase 3 · Que el sistema entienda las tareas

Miércoles 18/11/2026.

## Qué vimos

- Qué es un **agente** de IA: percepción, razonamiento, planificación, memoria y acción; tipos de agentes.
- Qué es un **modelo de lenguaje**, cómo se elige y para qué sirve la **temperatura** (baja para clasificar).
- El prompt **RCICE**: rol, contexto, instrucciones, restricciones y ejemplo (few-shot).
- La **Etapa 2** del proyecto: `PI_Etapa2_Agente_Clasificador_Tareas`. Groq clasifica cada tarea, la respuesta sale en JSON con el **Structured Output Parser**, se valida y se arma el resumen enriquecido con el mensaje para Carolina.
- Por qué validar la salida de la IA y cuánto "cuesta" cada llamada al modelo (tokens y límites del plan gratuito).

## Crear tu clave de Groq

Groq es gratis y no pide tarjeta.

1. Entra a [console.groq.com/keys](https://console.groq.com/keys) e inicia sesión con tu Gmail.
2. En **API Keys**, haz clic en **Create API Key**, escribe `n8n-curso` y confirma.
3. Copia la clave (empieza con `gsk_`). **Se muestra una sola vez.** Guárdala en un archivo de texto en tu computadora.
4. Nunca la pegues en el chat, en un nodo de n8n ni en un documento compartido. Si se filtra, bórrala en Groq y crea otra.

### La credencial en n8n

1. En el nodo **Groq Chat Model**, en **Credential**, elige **Create new credential**.
2. En **API Key** pega tu clave y haz clic en **Save**. Tiene que aparecer **Connection tested successfully**.
3. En **Model**, elige `openai/gpt-oss-20b`. En **Options** > **Add Option** > **Sampling Temperature**: `0.1`.

## Lo que se copia

| Para | Archivo |
|---|---|
| El prompt de `Clasificar tarea con IA` (en modo **Expression**) | [codigo/prompt_clasificar_tarea.txt](codigo/prompt_clasificar_tarea.txt) |
| El **JSON Example** del Structured Output Parser | [codigo/ejemplo_salida.json](codigo/ejemplo_salida.json) |
| El nodo `Validar salida IA` | [codigo/validar_salida_ia.js](codigo/validar_salida_ia.js) |
| El nodo `Construir resumen enriquecido` | [codigo/construir_resumen_enriquecido.js](codigo/construir_resumen_enriquecido.js) |
| El campo `mensaje` de `Mensaje para Carolina` | [codigo/mensaje_para_carolina.txt](codigo/mensaje_para_carolina.txt) |

Abre el archivo y usa el botón de copiar de GitHub (arriba a la derecha).

## Los workflows de la clase

| Carpeta | Qué tiene |
|---|---|
| `inicio/` | La Etapa 1 como quedó en la Clase 2 |
| `pasos/paso-1/` | La copia `PI_Etapa2_Agente_Clasificador_Tareas`, sin los nodos de reglas |
| `pasos/paso-2/` | + `Clasificar tarea con IA` con el Groq Chat Model (responde texto) |
| `pasos/paso-3/` | + el Structured Output Parser (responde datos en `output`) |
| `pasos/paso-4/` | + `Validar salida IA` |
| `pasos/paso-5/` | + `Construir resumen enriquecido` |
| `pasos/paso-6/` | + `Mensaje para Carolina` conectado y con la prioridad de la IA |
| `final/` | El paso 6 con el código comentado y una nota en cada parte |

**Al importar un paso con IA**, el nodo **Groq Chat Model** queda sin credencial: ábrelo y elige tu credencial `Groq` en **Credential**.

Para importar: en **Overview**, **Create workflow**; menú de tres puntos > **Import** > **From URL**; pega el link y confirma. El final:

```text
https://raw.githubusercontent.com/leanaraque/n8n-agentes-ia-estudiantes/main/clase-03/final/PI_Etapa2_Agente_Clasificador_Tareas.json
```

### Comprobación

| Nodo | Qué tienes que ver al ejecutar |
|---|---|
| `Clasificar tarea con IA` | 5 items con `output`: tareas 1, 3 y 6 en `alta`, la 2 en `media`, la 4 en `baja` |
| `Validar salida IA` | 5 items con `salida_ia_valida` en `true` |
| `Construir resumen enriquecido` | `cantidad_tareas_analizadas` = 5 y `cantidad_prioridad_alta` = 3 |
| `Mensaje para Carolina` | "Buen día, Carolina. La IA analizó 5 tareas y 3 son de prioridad alta: ..." |

Si ves un error **429**, ejecutaste muy seguido: el plan gratuito de Groq permite 8.000 tokens por minuto. Espera un minuto y vuelve a ejecutar.

## Tarea (de 1 a 3 horas)

1. **Desafío del Módulo 2** (agente con herramientas simuladas), en la plataforma. Se arma con lo de hoy: Basic LLM Chain, Groq Chat Model, Structured Output Parser e IF.
2. **Examen del Módulo 2**, en la plataforma.
3. **Export JSON** de `PI_Etapa2_Agente_Clasificador_Tareas` y guárdalo en `Documentos\Estudio Rivas`.
4. **Martes 24/11: cuenta 2 de n8n Cloud.** La cuenta 1 vence el 25/11.
   1. Crea la cuenta con `tucorreo+n8n2@gmail.com` (paso a paso en el [README del curso](../README.md)).
   2. Importa tus dos workflows desde `Documentos\Estudio Rivas` (**Import** > **From file**).
   3. Abre el **Groq Chat Model** de la Etapa 2 y crea de nuevo la credencial con la misma clave: las credenciales no viajan en el archivo exportado.

## Próxima clase

Miércoles 25/11: el sistema lee el comentario de cada tarea, detecta enojo o urgencia, escala y agenda un seguimiento.
