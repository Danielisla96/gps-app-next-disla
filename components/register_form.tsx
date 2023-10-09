import React from 'react'
import { Button, Card, Input } from '@nextui-org/react'

const RegisterForm = () => {
  return (
    <Card className="p-6 rounded shadow-md w-full max-w-md mx-auto">
        <Input 
            type="email" 
            label="ID WavesByte" 
            className="w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline" 
        />
        <Input 
            type="email" 
            label="Código de Compra" 
            className="w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline" 
        />
        <Input 
            type="email" 
            label="Patente" 
            className="w-full py-2 px-3 mb-4 leading-tight focus:outline-none focus:shadow-outline" 
        />

        <Button 
            color="secondary" 
            className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 w-full"
        >
            Registrar
        </Button>  

        <Button 
            color="danger" 
            className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
            Atrás
        </Button>  
    </Card>
  )
}

export default RegisterForm
