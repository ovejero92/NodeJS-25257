
const [ ,  , method, resource, ...params ] = process.argv; // npm run start GET users

const API_BASE_URL = 'https://fakestoreapi.com';

// const fetchAPI = async () => {}
async function fetchAPI(endpoind, options = {}) {
    try{
        const response = await fetch(`${API_BASE_URL}${endpoind}`,options)
        if(!response.ok){
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json()
        return data
    }
    catch(err){
        console.error('❌ Error en la petición:', err.message)
    }
}

async function getAllProducts(){
  console.log('🔍 Consultando todos los productos...\n');

  const products = await fetchAPI('/products')
  console.log('Productos obtenidos:')
  console.log(JSON.stringify(products,null,2))
  //[{"id":1,"name":"Pizza","price":10},{"id":2,"name":"Empanada","price":5}]

}

async function getProductById(productId) {
  // Validar que el ID sea un número
  if (isNaN(productId)) {
    console.error('❌ El ID del producto debe ser un número');
    process.exit(1);
  }
  
  console.log(`🔍 Consultando producto con ID: ${productId}...\n`);
  const product = await fetchAPI(`/products/${productId}`);
  console.log('✅ Producto obtenido:');
  console.log(JSON.stringify(product, null, 2));
}

async function createProduct(title,price,category, img) {
    console.log('➕ Creando nuevo producto...\n');

    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber) || priceNumber <= 0) {
    console.error('❌ El precio debe ser un número válido mayor a 0');
    process.exit(1);
    }

    const newProduct = {
        title,
        price: priceNumber,
        category,
        description: `Producto ${title} creado desde CLI`,
        image: img
    }

    const options = {
        method: 'POST',
        Headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    }

    const result = await fetchAPI('/products',options)
    console.log('✅ Producto creado exitosamente:');
    console.log(JSON.stringify(result, null, 2));
}

async function deleteProduct(productId) {
  // Validar que el ID sea un número
  if (isNaN(productId)) {
    console.error('❌ El ID del producto debe ser un número');
    process.exit(1);
  }
  
  console.log(`🗑️  Eliminando producto con ID: ${productId}...\n`);
  
  const options = {
    method: 'DELETE'
  };
  
  const result = await fetchAPI(`/products/${productId}`, options);
  console.log('✅ Producto eliminado exitosamente:');
  console.log(JSON.stringify(result, null, 2));
}

function showHelp() {
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    🛍️  GESTOR DE PRODUCTOS - FAKE STORE API
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 COMANDOS DISPONIBLES:

📦 Consultar todos los productos:
   npm run start GET products
   npm run start GET users


🔍 Consultar producto específico:
   npm run start GET products/<productId>
   Ejemplo: npm run start GET products/15

➕ Crear nuevo producto:
   npm run start POST products <title> <price> <category> <img>
   Ejemplo: npm run start POST products "Remera Nueva" 300 remeras http://www.ejemplo.com/img.png

🗑️  Eliminar producto:
   npm run start DELETE products/<productId>
   Ejemplo: npm run start DELETE products/7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `);
}

async function processCommand() {
    if(!method || !resource) {
        showHelp();
        process.exit(1)
    }

    const httpMethod = method.toUpperCase()

    switch(httpMethod) {
        case 'GET':
            if(resource.includes('/')) {
                const [, productID] = resource.split('/');
                await getProductById(productID);
            } else if (resource === 'products'){
                await getAllProducts();
            } else {
                console.error('❌ Recurso no válido. Usa "products" o "products/<id>"');
                process.exit(1);
            }
            break;

            case 'POST':
            if (resource === 'products') {
            const [title, price, category, img] = params;
        
            if (!title || !price || !category || !img) {
                console.error('❌ Faltan parámetros. Uso: npm run start POST products <title> <price> <category> <img>');
                process.exit(1);
            }
        
            await createProduct(title, price, category, img);
            } else {
                console.error('❌ Recurso no válido. Usa "products"');
                process.exit(1);
            }
            break;

    case 'DELETE':
      if (resource.includes('/')) {
        const [, productId] = resource.split('/');
        await deleteProduct(productId);
      } else {
        console.error('❌ Debes especificar el ID del producto. Uso: npm run start DELETE products/<id>');
        process.exit(1);
      }
      break;

    default:
      console.error(`❌ Método HTTP no soportado: ${httpMethod}`); // PUT
      console.log('Métodos disponibles: GET, POST, DELETE');
      process.exit(1);
    }

}

processCommand()