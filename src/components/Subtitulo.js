import React from 'react';
//rsc para crear un componente funcional, que se usan mas porque cargan mas rapido, tiene que ver con el state
const Subtitulo = (props) => {
    return (
        <h2 className='text-light text-center lead'>Tareas de la comision {props.comision}</h2>
    );
};

export default Subtitulo;