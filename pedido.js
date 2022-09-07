Factura = require('./factura')
let pedidos = 0
class Pedido {
    constructor(lista,cliente){
        this._nombre = cliente._nombre
        this._lista = lista
        pedidos++
        this._nropedido=pedidos
        this.fecha = new Date ()
        this.precio = 0
        for (let i = 0; i < this._lista.length; i++) {
            this.precio+=this._lista[i]._precio
            
        }
    }
    generarfactura(){
        this._factura= new Factura(this._nropedido,this.fecha,'targeta',this.precio)
    }
}

module.exports = Pedido
