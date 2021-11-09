import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormTareas = () => {
    //crear los state
    const [tareaIndividual, setTareaIndividual] = useState('');
    const [tareas, setTareas] = useState([]);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        //guardar una tarea en el arreglo de tareas
        setTareas([...tareas,tareaIndividual]);
        //limpiar el input
        setTareaIndividual('');
    }

    const borrarTarea = (contenidoTarea)=>{
        let arregloModificado = tareas.filter((tarea)=>tarea!=contenidoTarea);
        console.log(arregloModificado);
        setTareas(arregloModificado);
    }

    return (
        <>
            <Form className='container' onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control 
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