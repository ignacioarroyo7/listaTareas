import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';


const ItemTarea = (props) => {
    return (
        <ListGroup.Item as="li" className='d-flex justify-content-between'>
            {props.tarea}
            <Button variant="danger">Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;