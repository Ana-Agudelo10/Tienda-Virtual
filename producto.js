class Producto {
    constructor(nombre,determinacionorigen,precio,tipo_producto,añovenc,iva,nit,capacidad,tipounidad,categoria,id_producto){
        this._id_producto=id_producto
        this._nombre = nombre;
        this._determinacionorigen = determinacionorigen;
        this._precio = precio;
        this._tipo_producto= tipo_producto;
        this._añovenc = añovenc;
        this._iva =iva;
        this._nit =nit;
        this._capacidad = capacidad;
        this._tipounidad = tipounidad;
        this._categoria = categoria;
    }
}

module.exports = Producto