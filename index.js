var carrito = {

  "lista": [],

  "agregarProducto": function(item,cantidad){
    var producto = [item,cantidad];
    this.lista.push(producto);
    
  },
  "quitarProducto": function(item){
    
    //FIXME aca hay un bug potencial, por favor arreglame!
    for(var i = 0; i < this.lista.length; i++){
      if(item === this.lista[i][0]){
        this.lista.splice(i,1);
      }  
    }

  },
  "mostrarCarrito": function(){
    var tabla = document.getElementById("productos");
    
    //borrar datos de la tabla
    var filas = tabla.getElementsByTagName("tr");
    var length = filas.length
    for(var i = length-1; i>0; i--){
      tabla.deleteRow(i);  
    }


    for(var j = 0; j < this.lista.length; j++){
      var fila = document.createElement("tr");
      var colItem = document.createElement("td");
      var colCantidad = document.createElement("td");

      var textItem = document.createTextNode(this.lista[j][0]);
      colItem.appendChild(textItem);

      var textCantidad = document.createTextNode(this.lista[j][1]);
      colCantidad.appendChild(textCantidad);

      fila.appendChild(colItem);
      fila.appendChild(colCantidad);

      tabla.appendChild(fila);  
    }
    
  }

}

window.onload = function(){
  document.getElementById("agregar").onclick = prepararYagregarProducto;
  document.getElementById("eliminar").onclick = prepararYEliminarProducto;
}


var prepararYagregarProducto = function(){
  var item = document.getElementById("item").value;
  var cantidad = document.getElementById("cantidad").value;
  carrito.agregarProducto(item,cantidad);
  carrito.mostrarCarrito();
}

var prepararYEliminarProducto = function(){
  var itemEliminar = document.getElementById("itemEliminar").value;
  carrito.quitarProducto(itemEliminar);
  carrito.mostrarCarrito();
}












































