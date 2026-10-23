# Automatización y Agentes IA con N8N

Repositorio del curso "Automatización y Agentes IA con N8N" de Educación IT. Acá están los workflows de cada clase, paso por paso, para importarlos en tu n8n si te perdiste o quieres comparar tu trabajo.

Durante el curso construimos un solo sistema, el del **Estudio Rivas**: una consultora contable y de gestión que quiere dejar de perder vencimientos, leer menos emails a mano y responder rápido a las empresas que la consultan.

## Calendario

| Clase | Fecha | Tema |
|---|---|---|
| 1 | Miércoles 11/11 | De la planilla al primer workflow |
| 2 | Lunes 16/11 | El resumen de la mañana: validar, filtrar y resumir |
| 3 | Miércoles 18/11 | Que el sistema entienda las tareas: un modelo de lenguaje |
| 4 | Miércoles 25/11 | Clientes enojados y seguimiento |
| 5 | Lunes 30/11 | La bandeja de Carolina: Gmail, Calendar, Sheets y Telegram |
| 6 | Miércoles 2/12 | Empresas que quieren contratar al estudio: leads |
| 7 | Miércoles 9/12 | El formulario de la web |
| 8 | Lunes 14/12 | La base de datos y el panel de métricas |
| 9 | Miércoles 16/12 | Entregar el sistema |

Todas las clases son de 08:00 a 10:00.

## Lo que necesitas

| Qué | Para qué | Desde |
|---|---|---|
| Google Chrome | n8n funciona mejor en Chrome, y es el navegador que usamos en clase | Clase 1 |
| Una cuenta de Gmail | Crear las cuentas de n8n Cloud (ver abajo) y, en la Clase 5, conectar Gmail, Calendar y Sheets | Clase 1 |
| Telegram en tu teléfono | Recibir los avisos del sistema | Clase 5 |

No hace falta instalar nada en tu computadora.

## Las tres cuentas de n8n Cloud

Usamos la prueba gratuita de [n8n Cloud](https://n8n.io). Dura **14 días** y, al vencer, n8n **borra el espacio de trabajo** con todo lo que tenga adentro. El curso dura más que eso, así que vas a usar tres cuentas:

| Cuenta | Cuándo la creas | Correo | Vence | Cubre |
|---|---|---|---|---|
| 1 | Miércoles 11/11, en clase | `tucorreo+n8n1@gmail.com` | 25/11 | Clases 1 a 3 |
| 2 | Martes 24/11 | `tucorreo+n8n2@gmail.com` | 8/12 | Clases 4 a 6 |
| 3 | Lunes 7/12 | `tucorreo+n8n3@gmail.com` | 21/12 | Clases 7 a 9 |

Si tu Gmail es `ana.perez@gmail.com`, la cuenta 1 es `ana.perez+n8n1@gmail.com`. Gmail entrega en tu misma casilla todo lo que llega con `+algo` antes de la arroba, pero para n8n es un correo distinto.

**Regla del curso: al final de cada clase, exporta tu workflow.** El archivo `.json` es tu respaldo y lo que pasa tu trabajo de una cuenta a la siguiente.

### Crear una cuenta

1. Abre [n8n.io](https://n8n.io) en Chrome y haz clic en **Get started**.
2. Completa el registro con el correo de la tabla (por ejemplo, `ana.perez+n8n1@gmail.com`), tu nombre y una contraseña nueva.
3. Si n8n te pide un nombre para tu espacio de trabajo, usa `rivas-` y tu nombre, por ejemplo `rivas-ana`. Tiene que ser único en todo n8n Cloud; si ya existe, agrega tu apellido.
4. Abre el correo de verificación de n8n (búscalo también en **Promociones** y **Spam**) y haz clic en el enlace.
5. Responde las preguntas de bienvenida y avanza hasta ver la pantalla de inicio de n8n (**Overview**).

### Pasar tu trabajo a una cuenta nueva

1. En la cuenta nueva, en **Overview**, haz clic en **Create workflow**.
2. Menú de tres puntos (arriba a la derecha) > **Import** > **From file** y elige el `.json` de tu última clase (está en `Documentos\Estudio Rivas`).
3. **Ctrl + S**.

Si no tienes tu archivo, importa el de la carpeta `final/` de la última clase: menú de tres puntos > **Import** > **From URL** y pega el enlace del archivo (botón **Raw** de GitHub).

## Cómo usar este repositorio

Cada clase tiene su carpeta:

| Carpeta | Qué hay |
|---|---|
| `clase-NN/README.md` | Qué vimos, cómo importar los workflows y la tarea |
| `clase-NN/pasos/paso-N/` | Cómo queda el workflow después de cada paso de la clase |
| `clase-NN/final/` | El workflow terminado, con el código comentado y notas en el lienzo |

## Documentación

| Qué | Dónde |
|---|---|
| Documentación de n8n | [docs.n8n.io](https://docs.n8n.io) |
| Prueba gratuita de n8n Cloud | [docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial](https://docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial) |
| Nodo Code | [docs.n8n.io/code/code-node](https://docs.n8n.io/code/code-node/) |
| Material oficial del curso | Plataforma Alumni de Educación IT |

## Problemas frecuentes

| Síntoma | Causa probable | Qué hacer |
|---|---|---|
| No llega el correo de verificación de n8n | Quedó en Promociones o Spam | Buscar "n8n" en todas las carpetas de Gmail. Si no está, volver a registrarse con el mismo correo |
| n8n dice que el correo ya está en uso | Ya creaste esa cuenta | Iniciar sesión con ese correo, o usar el número siguiente (`+n8n2`) |
| El nombre del espacio de trabajo no está disponible | Otra persona usa ese nombre | Agregar tu apellido: `rivas-ana-perez` |
| La pantalla de n8n se ve cortada o los botones no responden | Navegador distinto de Chrome o extensiones que bloquean | Abrir n8n en Chrome, en una ventana de incógnito |
| El nodo Code marca un error al ejecutar | Falta una coma, una comilla o una llave | Leer la línea que indica el error; si no lo encuentras, reemplazar todo el código por el del paso de la clase |
