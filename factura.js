class Factura {
    #tipoPago
    constructor(nro_factura, fecha, tipoPago,total) {
        this._nro_factura = nro_factura;
        this._fecha = fecha;
        this.#tipoPago = tipoPago;
        this._total =total
    }
}

module.exports = Factura