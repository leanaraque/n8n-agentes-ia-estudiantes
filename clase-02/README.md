# Clase 2 · El resumen de la mañana

Lunes 16/11/2026.

## Qué vimos

- Los disparadores de n8n (Manual, Schedule, Webhook y Form Trigger) y el nodo **HTTP Request**, con una demostración: los feriados del año desde una API pública.
- **Edit Fields** frente a **Code**, y qué son las **credenciales** y las **variables**.
- La Etapa 1 completa: el workflow valida las tareas, descarta las incompletas, se queda con las pendientes o prioritarias y arma el resumen de la mañana con un mensaje para Carolina.
- **Filter** frente a **IF**, condiciones con **AND** y **OR**, y **expresiones** con `{{ }}`.
- Manejo de errores: validar temprano, errores de tipo, **On Error** y **Retry On Fail**.

## El código para copiar

| Nodo | Archivo |
|---|---|
| `Validar tareas` | [codigo/validar_tareas.js](codigo/validar_tareas.js) |
| `Construir resumen operativo` | [codigo/construir_resumen_operativo.js](codigo/construir_resumen_operativo.js) |

Abre el archivo y usa el botón de copiar de GitHub (arriba a la derecha del código).

Expresión del campo `mensaje` del nodo `Mensaje para Carolina`:

```text
Buen día, Carolina. Hoy hay {{ $json.cantidad_tareas_atencion }} tareas que requieren atención: {{ $json.tareas.map(t => t.titulo).join(", ") }}.
```

## Los workflows de la clase

| Carpeta | Qué tiene |
|---|---|
| `inicio/` | El workflow como quedó en la Clase 1 |
| `pasos/paso-1/` | + `Validar tareas` |
| `pasos/paso-2/` | + `Filtrar tareas válidas` |
| `pasos/paso-3/` | + `Filtrar tareas pendientes o prioritarias` |
| `pasos/paso-4/` | + `Construir resumen operativo` |
| `pasos/paso-5/` | + `Mensaje para Carolina` |
| `final/` | El paso 5 con el código comentado y una nota en cada nodo |
| `demo/` | La demostración de HTTP Request con los feriados |

### Cómo importar un paso

1. En n8n, en **Overview**, haz clic en **Create workflow**.
2. Menú de tres puntos (arriba a la derecha) > **Import** > **From URL**.
3. Pega el link y confirma. Para el final:

   ```text
   https://raw.githubusercontent.com/leanaraque/n8n-agentes-ia-estudiantes/main/clase-02/final/PI_Etapa1_Resumen_Operativo.json
   ```

4. **Ctrl + S** y **Execute workflow**.

Para otro paso, cambia `final` por `inicio`, `pasos/paso-1`, `pasos/paso-2`, etc.

### Comprobación

| Nodo | Qué tienes que ver al ejecutar |
|---|---|
| `Validar tareas` | 6 items; la tarea 5 con `es_valida` en `false` y el error `Falta el título` |
| `Filtrar tareas válidas` | 5 items (todas menos la 5) |
| `Filtrar tareas pendientes o prioritarias` | 3 items: las tareas 1, 2 y 3 |
| `Construir resumen operativo` | 1 item con `cantidad_tareas_atencion` = 3 |
| `Mensaje para Carolina` | El campo `mensaje` con los tres títulos |

## Tarea (de 1 a 3 horas)

1. **Desafío del Módulo 1** (Clasificador básico de solicitudes), en la plataforma. Usa sus propios datos de prueba, no los del estudio. Inténtalo primero y después compara con la resolución. El bonus es opcional.
2. **Examen del Módulo 1**, en la plataforma.
3. Si no lo hiciste en clase: menú de tres puntos > **Export JSON** y guarda el archivo en `Documentos\Estudio Rivas`.

## Próxima clase

Miércoles 18/11: el workflow empieza a entender las tareas con un modelo de lenguaje (Groq).
