import React from 'react'
import { useState } from 'react';

export const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [Alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit =(e) => {
    e.preventDefault();

    console.log(nombreMascota);
    console.log(nombrePropietario);
    console.log(email);
    console.log(Alta);
    console.log(sintomas);
  }
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5' >
      {/*titulo de la seccion del formulario*/}
      <h3 className='font-black text-3xl text-center'>Seguimiento Pacientes</h3>
      {/*descripcion de la seccion formulario*/}
      <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y{' '}
      <span className='text-indigo-600 font-bold'>Administralos</span></p>
      {/* formulario*/}
      <form 
      onSubmit={handleSubmit}
      className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input 
          id='mascota'
          type='text'
          placeholder='Nombre de la mascota'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={nombreMascota}
          onChange={(e) => setNombreMascota(e.target.value)}
          required
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
          <input 
          id='propietario'
          type='text'
          placeholder='Nombre del responsable/dueño'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={nombrePropietario}
          onChange={(e) => setNombrePropietario(e.target.value)}
          required
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
          <input 
          id='email'
          type='email'
          placeholder='Email'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input 
          id='alta'
          type='date'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={Alta}
          onChange={(e) => setAlta(e.target.value)}
          required          
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <input 
          id='sintomas'
          type='text'
          placeholder='Sintomas'
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          required
          />
        </div>
        <input type="submit" 
        className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
        value={'Agregar paciente'} />
      </form>q
    </div>
  );
};

