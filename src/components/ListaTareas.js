import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <ListGroup as="ul" className='container'>
            {
                props.tareas.map((item, posicion)=><ItemTarea key={posicion} tarea={item}/>)
            }
        </ListGroup>
    );
};

export default ListaTareas;