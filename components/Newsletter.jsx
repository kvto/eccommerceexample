import React from 'react'
import Title from './Title'

const Newsletter = () => {
    return (
        <div className='flex flex-col items-center mx-4 my-36'>
            <Title title="Suscribirse al boletín" description="Suscríbete para recibir ofertas exclusivas, novedades y actualizaciones privilegiadas directamente en tu bandeja de entrada cada semana." visibleButton={false} />
            <div className='flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200'>
                <input className='flex-1 pl-5 outline-none' type="text" placeholder='Ingresa tu correo electronico' />
                <button className='font-medium bg-green-500 text-white px-7 py-3 rounded-full hover:scale-103 active:scale-95 transition'>Obten actualizaciones</button>
            </div>
        </div>
    )
}

export default Newsletter