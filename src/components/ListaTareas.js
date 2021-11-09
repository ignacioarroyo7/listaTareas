import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTareas = () => {
    return (
        <ListGroup as="ul" className='container'>
            <ItemTarea className='lead'></ItemTarea>
        </ListGroup>
    );
};

export default ListaTareas;