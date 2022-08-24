import React, {useState} from 'react';
import Todo from '../components/Todo';

//Fact: para llamar código JS se usan los {}

const Form = () => {

    //Este nos va permitir agregar nuevos elementos a la lista
    const [todo, setTodo] = useState({});

    //Aquí creamos array con objetos dentro, que será lo que imprimiremos después
    //Agregando nuevas keys y values para el segundo input
    const [todos, setTodos] = useState([
        {
            todo: 'Bolsa frijoles', 
            cant: 2
        },
        {
            todo: 'Arándanos',
            cant: 6
        },
        {
            todo: 'Papas',
            cant: 10
        }
    ]);

    //accedemos al input y a su valor
    //Nuevos estados para cargar el nombre y cantidad
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState(0);

    //Agarrando el valor y sutituyendo
    const handleChange = e => {
        setNombre(e.target.value);
        setTodo({todo: e.target.value, cant: cantidad});
    };

    const handleChange2 = e => {
        setCantidad(e.target.value);
        setTodo({todo: nombre, cant: e.target.value});
    };

    //Aquí validamos que el input no esté vacío
    const handleClick = e => {
        if((Object.keys(todo).length === 0 || todo.todo.trim() === '') && (Object.keys(todo).length === 0 || todo.cant.trim() === '')){
            alert("El campo no puede estar vacío");
            return;
        }

        setNombre("");
        setCantidad(0);

        //el Object.keys(todo) es donde le permitimos el acceso al valor de cada key dentro de los objetos que están en el array
        setTodos([...todos, todo]);
        setTodo({});
    };
    
    const deleteTodo = indice => {
        const newTodos = [...todos];
        newTodos.splice(indice, 1);
        setTodos(newTodos);
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()} className="formContainer">
                <label>Agregar</label><br/>
                <section className='form'>
                    <div className='flex'>
                        <label>Objeto:</label>
                        <input type="text" name="todo" onChange={handleChange}/><br/>
                    </div>  
                    <div className='flex'>
                        <label>Cantidad:</label>
                        <input type ="number" name="cant" onChange={handleChange2}/><br/>
                    </div>
                </section>
                <button onClick={handleClick}>Agregar</button>
            </form>
            {
                //Aquí mandamos el prop value.todo obtenido del array que contiene la lista, al componente Todo
                //Con el map recorremos el array
                todos.map((value, index) => (<Todo todo={value} key={index} index={index} deleteTodo={deleteTodo}/>))
            }
        </>
    );
};

export default Form;