# TestBack
## Requisitos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/)

## Instalación

1. Clona el repositorio a tu máquina local:

   ```bash
   git clone https://github.com/Brunocarda2005/testback.git
   cd testback
   ```
   ```
   npm install
   ```
   ```
   npm run dev
   ```

# API para la Gestión de Tareas

Este proyecto proporciona una API REST para gestionar tareas. Los endpoints permiten realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) de manera sencilla y eficiente.

---

## **Endpoints**

### **3. GET /task/{id}**
Obtiene los detalles de una tarea específica por su ID.

#### **Solicitud**
- **URL:** `/task/{id}`
- **Método:** `GET`
- **Descripción:** Obtiene los detalles de una tarea específica a partir de su ID.
- **Parámetros de Ruta:**
  - `id` (String): El ID de la tarea a obtener.
  - **Ejemplo:** `123`

#### **Ejemplo de Solicitud**
```bash
GET /task/123
```

#### **Respuesta**
- **Código de Estado:** `200 OK`
- **Descripción:** Devuelve los datos de la tarea solicitada.
- **Cuerpo de la Respuesta:** Un objeto JSON con las propiedades de la tarea.

**Ejemplo de Respuesta:**
```json
{
  "Titulo": "Revisar informe",
  "Descripcion": "Revisar los detalles del informe antes de enviarlo.",
  "Estado": "pendiente"
}
```

- **Código de Estado:** `404 Not Found`
  - **Descripción:** No se encontró la tarea con el ID especificado.

---

### **4. PUT /task/{id}**
Actualiza los detalles de una tarea específica por su ID.

#### **Solicitud**
- **URL:** `/task/{id}`
- **Método:** `PUT`
- **Descripción:** Actualiza una tarea específica a partir de su ID.
- **Parámetros de Ruta:**
  - `id` (String): El ID de la tarea a actualizar.
  - **Ejemplo:** `123`
- **Cuerpo de la Solicitud:** Un objeto JSON con las propiedades actualizadas de la tarea:
  - `Titulo` (String): El título actualizado.
  - `Descripcion` (String): La descripción actualizada.
  - `Estado` (String): El estado actualizado.

**Ejemplo de Solicitud:**
```json
{
  "Titulo": "Limpiar la casa",
  "Descripcion": "Limpiar todas las habitaciones",
  "Estado": "completada"
}
```

#### **Respuesta**
- **Código de Estado:** `200 OK`
- **Descripción:** La tarea ha sido actualizada correctamente.
- **Cuerpo de la Respuesta:** Un objeto JSON con los detalles actualizados de la tarea.

**Ejemplo de Respuesta:**
```json
{
  "Titulo": "Limpiar la casa",
  "Descripcion": "Limpiar todas las habitaciones",
  "Estado": "completada"
}
```

- **Código de Estado:** `404 Not Found`
  - **Descripción:** No se encontró la tarea con el ID especificado.

---

### **5. DELETE /task/{id}**
Elimina una tarea específica por su ID.

#### **Solicitud**
- **URL:** `/task/{id}`
- **Método:** `DELETE`
- **Descripción:** Elimina una tarea específica a partir de su ID.
- **Parámetros de Ruta:**
  - `id` (String): El ID de la tarea a eliminar.
  - **Ejemplo:** `123`

**Ejemplo de Solicitud:**
```bash
DELETE /task/123
```

#### **Respuesta**
- **Código de Estado:** `204 No Content`
  - **Descripción:** La tarea ha sido eliminada exitosamente.
- **Código de Estado:** `404 Not Found`
  - **Descripción:** No se encontró la tarea con el ID especificado.

---

## **Resumen de Propiedades de las Tareas**
- **`Titulo`**: El título de la tarea (cadena de texto).
- **`Descripcion`**: Una breve descripción de la tarea (cadena de texto).
- **`Estado`**: El estado actual de la tarea (`pendiente`, `en progreso`, `completada`).

---

## **Cómo Probar los Endpoints**
1. Utiliza herramientas como **Postman** o **Insomnia** para realizar solicitudes a los endpoints descritos.
2. Incluye los parámetros y cuerpos de solicitud en formato JSON, como se muestra en los ejemplos.
3. Verifica las respuestas y los códigos de estado para validar el funcionamiento correcto de la API.


### Variables de entorno
Development
   ```
   NODE_ENV=development nodemon src/index.js
   MONGO_URI=mongodb://localhost/merndb
   SWAGGER_SERVER_URL=http://localhost:4000/api
   ```
Production
   ```
   NODE_ENV=production node src/index.js
   MONGO_URI=mongodb+srv://brunocardamone09:rH9PWa1orPNC1cDv@task.i10ex.mongodb.net/?retryWrites=true&w=majority&appName=Task
   SWAGGER_SERVER_URL=https://testback-7onu.onrender.com/api
   ```
---

## **Conclusión**
Esta API proporciona una forma eficiente de gestionar tareas en un sistema. Con sus endpoints, puedes realizar operaciones de creación, lectura, actualización y eliminación de tareas, adaptándolas a las necesidades específicas de tu proyecto.

