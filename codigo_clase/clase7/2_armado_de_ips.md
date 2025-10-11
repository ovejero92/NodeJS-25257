# Ejemplos de direcciones IP y el camino de los datos

Una dirección IP (versión IPv4) está compuesta por 4 números separados por puntos, por ejemplo:  
`192.168.1.15`

Se divide en dos partes:
- **Red:** Identifica la red local (`192.168.1`)
- **Host:** Identifica el dispositivo dentro de la red (`15`)

---

🔴 Supongamos que Ana envía información a `200.55.20.8` (la IP pública de Luis):

1. La PC de Ana crea un paquete con destino `200.55.20.8`.
2. El router de Ana **no sabe dónde está esa IP**, así que envía el paquete a su **gateway (ISP)**.
3. El ISP consulta las **tablas de enrutamiento** y envía el paquete al siguiente nodo más cercano al destino.
4. El paquete puede pasar por varios routers o nodos de Internet.
5. Finalmente, llega al router de Luis, que lo entrega a su PC con la IP local correspondiente.

---

🔑 **Idea clave:**
- Yo **no envío datos directamente** a la PC de Luis.
- Envío datos a la **IP pública** de la red de Luis.
- El **router de Luis** se encarga de entregarlos a la **IP privada** de su PC.

---

📦 **Ejemplo del camino de los datos:**

`PC Ana → Router Ana → ISP → Internet (varios routers) → ISP de Luis → Router de Luis → PC Luis`