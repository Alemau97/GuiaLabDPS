import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    //Este nos va permitir agregar nuevos elementos a la lista
    const [todo, setTodo] = useState({});
    //Aquí creamos array con objetos dentro, que será lo que imprimiremos después
    const [todos, setTodos] = useState([
        {todo: 'Compra 1'},
        {todo: 'Compra 2'},
        {todo: 'Compra 3'}
    ]);
    //accedemos al input y a su valor
    const handleChange = e => setTodo({[e.target.name]: e.target.value});
    //Aquí validamos que el input no esté vacío
    const handleClick = e => {
        //el Object.keys(todo) es donde le permitimos el acceso al valor de cada key dentro de los objetos que están en el array
        if(Object.keys(todo).length ===0 || todo.todo.trim() === ''){
            alert("Hay campo/s vacíos");
            return;
        }
        setTodos([...todos, todo]);
    };
    
    const deleteTodo = indice => {
        const newTodos = [...todos];
        newTodos.splice(indice, 1);
        setTodos(newTodos);
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()} >
                <label>Agregar</label><br/>
                <section className='form'>
                    <div className='flex'>
                        <label>Objeto:</label>
                        <input type="text" name="todo" onChange={handleChange}/><br/>
                    </div>  
                    <div className='flex'>
                        <label>Cantidad:</label>
                        <input type ="number" name="todo" onChange={handleChange}/><br/>
                    </div>
                </section>
                <button onClick={handleClick}>Agregar</button>
            </form>
            {
                //Aquí mandamos el prop value.todo obtenido del array que contiene la lista, al componente Todo
                //Con el map recorremos el array
                todos.map((value, index) => (<Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>))
            }
        </>
    );
};

export default Form;