class Producto {
    constructor(nombre,cantidad,precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.vendido = false;
    }

    vender(){
        this.vendido = true;
        console.log(`El producto ${this.nombre} ha sido vendido`)
        // console.log("El producto " + this.nombre + " ha sido vendido")
    }

}  

class Libro extends Producto {
    constructor(nombre,precio,cantidad, autor) {
        super(nombre,precio,cantidad);
        this.autor = autor;
    }
}

module.exports = Producto , Libro;
