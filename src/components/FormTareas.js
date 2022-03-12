import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormTareas = () => {
    //creo una variable para inicializar el state,
    // si tengo algo en el localstorage la inicializo con ese arreglo
    // y si no tengo nada como arreglo vacio
    let tareasLocalStorage = JSON.parse(localStorage.getItem('arregloTareas')) || [];

    //crear los state
    const [tareaIndividual, setTareaIndividual] = useState('');
    const [tareas, setTareas] = useState(tareasLocalStorage);

    //usar el ciclo de vida de un componente
    //primer parametro es una funcion anonima donde escribo
    // toda la logica que quiero en la fase de montaje y si dejo asi nomas con un parametro
    // la funcion anonima tambien me ejecuta en la fase de actulizacion
    
    //segundo parametro es para indicar que quiero que se ejecute solo en la fase de montaje
    //si quiero observar la fase de actualizacion de algun state en 
    //particular, lo coloco dentro de los corchetes del segundo parametro
    
    useEffect(()=>{
        //esta logica se ejecuta en la fase de montaje, y opcionalmente en la actualizacion
        console.log('desde useEffect');
        
        //nombre de la bd o key en localstorage, y JSON.stringify(con lo que quiero que se actualice)
        localStorage.setItem('arregloTareas',JSON.stringify(tareas));
    },[tareas]); // lo que digo aqui es que 


    const handleSubmit = (e)=>{
        e.preventDefault();
        //guardar una tarea en el arreglo de tareas
        setTareas([...tareas,tareaIndividual]);
        //limpiar el input
        setTareaIndividual('');
    }

    const borrarTarea = (contenidoTarea)=>{
        let arregloModificado = tareas.filter((tarea)=>tarea!==contenidoTarea);
        //console.log(arregloModificado);
        setTareas(arregloModificado);
    }

    return (
        <>
            <Form className='container' onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control //formcontrol es el input
                        type="text" 
                        placeholder="Ingrese una tarea" 
                        onChange={e=>setTareaIndividual(e.target.value)}
                        value={tareaIndividual}
                    />
                    <Button variant='info' type='submit' >Agregar</Button>
                </Form.Group>
            </Form>
            <section>
                <ListaTareas tareas={tareas} borrarTarea={borrarTarea}/>
            </section>
        </>
    );
};

export default FormTareas;