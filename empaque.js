
class Empaque {
    constructor(producto,nroUnidades,preciounidad,capacidad){
        this._producto=producto
        this._nroUnidades=nroUnidades;
        this._precioUnidad=preciounidad;
        this._capacidad=capacidad;
    }
    calcularPreciototal(){
        this._preciototal= this._precioUnidad*this._nroUnidades;
    }
    
}

module.exports =Empaque