import React, { useState } from 'react';
import '../contador/contador.css'


function Contador() {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count +1);
    };

    const decrementar = () => {
        setCount(count-1);
    };

    return (
        <>
            <div className='container'>
                <div className='telaContador'>
                    {count}
                </div>
                <div className='botoes'>
                    <button onClick={incrementar}>Fazer incremento</button>
                    <button onClick={decrementar}>Fazer decremento</button>
                </div>
            </div>
        </>
    );

}


export default Contador;