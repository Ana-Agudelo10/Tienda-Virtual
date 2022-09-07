const Cliente = require('./cliente')

class Empresa extends Cliente {
    constructor (nombre,direccion,correo,telefono,rut,cant_plata) {
        super(nombre,direccion,correo,telefono,cant_plata)
        this._rut = rut
    }
    
}

module.exports = Empresa