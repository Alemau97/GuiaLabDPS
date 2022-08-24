import React from 'react';

//Aquí estamos recibiendo props desde el componente Form
//El prop(propiedad) "todo" son los valores del array de Form
//Los otros 2, "index" es un valor entero y "deleteTodo" es una función creada también en Form
//Con el otro h3 estamos trayendo el valor del segundo input
const Todo = ({todo, index, deleteTodo}) => {
    return (
        <>
            <div className='list'>
                <h3>{todo.cant}-</h3>
                <h3>{todo.todo}</h3>
                <button className='btn-delete' onClick={() => deleteTodo(index)}>X</button>
            </div>
        </>
        //en <h3>{todo}</h3> es donde traemos a imprimir los valores del array generado con la lista en Form component
        //El evento onClick solo llamamos la función creada en Form para eliminar datos
    );
};

export default Todo;