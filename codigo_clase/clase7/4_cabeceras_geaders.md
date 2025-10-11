# 🌐 Cabeceras HTTP (Headers)

Las **cabeceras HTTP** son pares *clave–valor* que viajan en las solicitudes y respuestas HTTP.  
Permiten enviar información adicional entre el cliente y el servidor, como el tipo de contenido, credenciales, idioma, políticas de caché, entre otros.

En otras palabras, las cabeceras son como “mensajes ocultos” que acompañan a la comunicación HTTP y le dicen al servidor o al cliente *cómo* deben interpretar los datos.

---

## 🧩 Tipos de cabeceras

### 1️. Cabeceras de **Solicitud** (*Request Headers*)
Son enviadas por el **cliente** (navegador o aplicación) al **servidor**, y sirven para dar contexto a la petición.

#### 🔹 Ejemplos comunes:
- **Host**: Indica el dominio al que se hace la petición.  
  - Ejemplo: `Host: www.ejemplo.com`
-**User-Agent**: Identifica el navegador o cliente que hacer la solicitud.
  - Ejemplo: `User-agent: Mozilla/5.0`
-**Accept**: Define que tipo de contenido entiende el cliente
  - EJemplo: `Accept: text/html,application/json`
-**Authorization**: Se utiliza para credenciales de acceso
  - Ejemplo: `Authorization: Bearer <token>`
-**cookie**: Envia cookies almacenadas en el navegador al servidor.
  - Ejemplo: `Cookie: sessionId=abc123; theme=dark`

### 2. Cabeceras de **Respuesta** (*Response Headers*)
Son enviadas por el servidor al cliente para dar informacion sobre la respuesta.

-**Content-Type**: Define el tipo de contendio devuelto.
  - Ejemplo: `content-type: application/json`
-**Content-Length**: Indica el tamaño del cuerpo de la respuesta (en bytes).
  - Ejemplo: `Content-Length: 348`
-**Set-Cookie**: Permite al servidor enviar cookies al cliente.
  - Ejemplo: `Set-Cookie: sessionId=abc123, httpOnly`
-**Cache-Control**: Define politicas de cache.
  - Ejemplo: `Cache-Control: no-cache, no-store`
-**Location**: Indica a donde debe redirigir el cliente (junto a un `3xx` status code).
  - Ejemplo: `Location: https//www.ejemplo.com/nuevo`
-**Server**: Identifica el software que corre en el servidor
  - Ejemplo: `Server: Apache/2.4.41 (Ubuntu)`

### 3. Cabeceras **Comunes**
Pueden aparecer tanto en solicitudes como en respuestas

- **Date** : Indica la fecha y hora en que se envio la respuesta.
    -Ejemplo: `Date: Sun, 21 Sep 2025 18:00:00 GMT`

- **Connection**: Controla si la conexion se mantiene abierta o se cierra.
    Ejemplo: `Connection: keep-alive`

---

## Ejemplo de solicitud con Cabeceras

GET /api/usuarios  HTTP/1.1
Host:www.ejemplo.com

User-Agent: Mozilla/5.0
Accept: application/json
Autorization: Bearer 12345

## Ejemplo de Respuesta con Cabeceras

HTTP/1.1 200 OK
Date: Sun, 21 Sep 2025 18:00:00 GMT
Content-Type: application/json
Content-Length: 82
Set-Cookies: sessionId=abc123; HttpOnly

- Si lo recibimos por body seria:
{"usuarios":[{"id":1,"nombre":"Ana"},{"id":2,"nombre":"Juan"}]}