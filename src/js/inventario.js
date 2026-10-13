class Inventario{
  constructor(){
   this._productos = [];
  }

  agregar(producto){
    let indice = this.buscarIndice(producto.codigo);

    if(indice < this._productos.length &&
       this._productos[indice].codigo == producto.codigo){
      return false;
    }

    this.insertar(producto, indice + 1);
    return true;
  }

  insertar(producto, posicion){
    for(let i=this._productos.length-1; i>=posicion-1; i--){
      this._productos[i+1] = this._productos[i];
    }
    this._productos[posicion - 1] = producto;
  }

  buscar(codigo){
    let indice = this.buscarIndice(codigo);

    if(indice < this._productos.length &&
       this._productos[indice].codigo == codigo){
      return this._productos[indice];
    }

    return null;
  }

  buscarIndice(codigo){
    let inicio = 0;
    let fin = this._productos.length - 1;

    while(inicio <= fin){
      let medio = Math.floor((inicio + fin) / 2);

      if(this._productos[medio].codigo == codigo){
        return medio;
      }else if(codigo < this._productos[medio].codigo){
        fin = medio - 1;
      }else{
        inicio = medio + 1;
      }
    }

    return inicio;
  }

  eliminar(codigo){
    let indice = this.buscarIndice(codigo);

    if(indice == this._productos.length ||
       this._productos[indice].codigo != codigo){
      return;
    }

    for(let i=indice; i<this._productos.length-1; i++){
      this._productos[i] = this._productos[i+1];
    }
    this._productos.pop();
    return;
  }

  listar(){
    let listado = "";
    for(let i=0; i<this._productos.length; i++){
      listado += this._productos[i].infoHtml();
    }
    return listado;
  }

  listarInverso(){
    let listado = "";
    for(let i=this._productos.length-1; i>=0; i--){
      listado += this._productos[i].infoHtml();
    }
    return listado;
  }

  extraerPrimero(){
    let primerProducto = this._productos[0];
    for(let i=0; i<this._productos.length-1; i++){
      this._productos[i] = this._productos[i+1];
    }
    this._productos.pop();
    return primerProducto;
  }

  extraerUltimo(){
    return this._productos.pop();
  }
}
