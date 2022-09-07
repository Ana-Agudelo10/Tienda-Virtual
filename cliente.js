class Cliente {
    constructor (nombre,direccion,correo,telefono,cant_plata) {
        this._nombre = nombre
        this._direccion = direccion
        this._correo = correo
        this._telefono=telefono
        this._cant_plata=cant_plata
        
    }
}
module.exports = Cliente;