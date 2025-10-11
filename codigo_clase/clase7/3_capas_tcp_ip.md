# Capas del modelo TCP/IP con ejemplos

El modelo TCP/IP tiene **4 capas principales**.  
Cada capa cumple un rol esencial en la comunicación de datos.

---

## 🧩 1. Application Layer (Capa de Aplicación)

**Qué hace:**  
Es donde funcionan los programas y servicios que usan los usuarios.  
Define cómo se intercambian los datos a nivel de aplicación (por ejemplo: navegador, correo, chat, etc.).

**Ejemplos de protocolos:**
- **HTTP / HTTPS:** navegación web  
- **SMTP / IMAP / POP3:** correo electrónico  
- **FTP:** transferencia de archivos

**Ejemplo práctico:**  
Cuando abres **Google Chrome** y entras a `https://www.google.com`, el navegador usa el protocolo **HTTP/HTTPS** para comunicarse con el servidor de Google.

---

## ⚙️ 2. Transport Layer (Capa de Transporte)

**Qué hace:**  
Se encarga de dividir los datos en segmentos y asegurar que lleguen completos y en orden.  
Controla el flujo y la confiabilidad de la comunicación.

**Protocolos principales:**
- **TCP:** garantiza la entrega ordenada y sin errores.  
- **UDP:** más rápido, pero sin verificación (usado en juegos online o streaming).

**Ejemplo:**  
En una videollamada, se usa **UDP** para priorizar velocidad sobre precisión.

---

## 🌐 3. Internet Layer (Capa de Red)

**Qué hace:**  
Determina la mejor ruta para que los datos lleguen al destino.  
Usa direcciones **IP** para identificar los equipos conectados.

**Protocolos principales:**
- **IP (IPv4 / IPv6):** asigna direcciones únicas a cada dispositivo.  
- **ICMP:** usado para diagnóstico (por ejemplo, el comando `ping`).

**Ejemplo:**  
Cuando haces `ping google.com`, estás comprobando la conexión con la IP de Google.

---

## 🧱 4. Network Access Layer (Capa de Acceso a la Red)

**Qué hace:**  
Se encarga de la transmisión física de los datos a través de cables, Wi-Fi o fibra óptica.  
Convierte los paquetes IP en **tramas** y las envía por la red.

**Protocolos / Tecnologías:**
- Ethernet  
- Wi-Fi  
- ARP (para asociar direcciones IP con direcciones MAC)

**Ejemplo:**  
Tu computadora usa **Wi-Fi** para enviar la trama al router más cercano.

---

📘 **Resumen gráfico del modelo TCP/IP:**

| Capa | Función principal | Ejemplo |
|------|-------------------|----------|
| Aplicación | Interacción con el usuario | HTTP, FTP |
| Transporte | Asegura entrega y orden | TCP, UDP |
| Red | Dirección y ruta de datos | IP, ICMP |
| Acceso a red | Enlace físico y transmisión | Ethernet, Wi-Fi |