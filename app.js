class Tarea {
    constructor(titulo, descripcion){
        this.titulo = titulo,
        this.descripcion = descripcion
    }
}

class Ui {
    mostrar(tarea) {
        let contenedor = document.createElement('div');
        contenedor.classList = 'div-tarea'
        let p = document.createElement('p');
        p.classList = 'card-title';
        p.textContent = tarea.titulo
        let span = document.createElement('span');
        span.textContent = tarea.descripcion
        let button = document.createElement('button');
        button.classList = 'btn btn-danger'
        button.textContent = 'Eliminar'

        contenedor.append(p);
        contenedor.append(span);
        contenedor.append(button);
       
        const contenedorTareas = document.getElementById('contenedor-tareas');
        contenedorTareas.appendChild(contenedor);
        this.reset();
      }

      reset(){
        document.getElementById('formulario').reset();
      }

      mensaje(mensaje , color){
            let divMensaje = document.createElement('div');
            divMensaje.classList.add('div-mensaje')
            divMensaje.textContent = mensaje
            const contenedor = document.getElementById('formulario');
            const main = document.getElementById('main');
            const header = document.getElementById('header');
            main.insertBefore(divMensaje, contenedor, main)
            if(color === 'verde'){
                divMensaje.classList.add('verde')
            }else{
                divMensaje.classList.add('rojo')
            }


            setInterval(() => {
                divMensaje.textContent = ''
                divMensaje.classList.remove('verde')
                divMensaje.classList.remove('rojo')
            }, 2000);


      }

}





document.getElementById('formulario')
    .addEventListener('submit', function (e){
    e.preventDefault();
    const descripcion = document.getElementById('descripcion').value;
    const titulo = document.getElementById('titulo').value;

    const tarea = new Tarea(titulo, descripcion);
    let mensaje = "Tarea agregada exitosamente"
    console.log(tarea);
    const ui = new Ui();
    ui.mostrar(tarea);
    ui.mensaje(mensaje, 'verde')

})


document.getElementById('contenedor-tareas').addEventListener('click', e =>{
    e.target.parentNode.remove();
    let ui = new Ui()
    let mensaje = 'La tarea fue eliminada'
    ui.mensaje(mensaje, 'rojo');
})
