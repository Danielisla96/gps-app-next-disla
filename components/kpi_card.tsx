import { Badge, Card, Flex, Metric, Text, Button, CategoryBar, Title } from "@tremor/react";
import { StatusOnlineIcon, ChartBarIcon, UserCircleIcon, RssIcon } from "@heroicons/react/outline";
import AvatarCar from "./avatar_car";
import { useEffect, useState } from "react";



export default function KpiCard() {

      // Define el estado inicial y la función de actualización para 'velocity'
  const [velocity, setVelocity] = useState(0);

  // useEffect para actualizar la velocidad cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      // Genera un número aleatorio entre 0 y 100
      const newVelocity = Math.floor(Math.random() * 101);
      setVelocity(newVelocity);
    }, 5000); // 5000 milisegundos (5 segundos)

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []); // El array vacío indica que este useEffect se ejecutará sólo una vez (como componentDidMount)



  return (
    <Card className="w-full mx-auto p-4">
      <div className="flex justify-between items-center w-full">
        <div className="space-y-3">
          <Text>GPS</Text>
          <Metric>LFXL-13</Metric>
          <Text>Actualización: Hace 50 segundos.</Text>
          <Badge icon={RssIcon} color="violet">Signal: 100%</Badge>
          <div>
            <Badge icon={UserCircleIcon} color="sky">Conductor: Si</Badge>
          </div>
          
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 pr-2 -mt-10">
            <AvatarCar />
            <Badge icon={StatusOnlineIcon} color="green">Online</Badge>
        </div>


      </div>

      <Card className="my-4"> 
        <Flex justifyContent="start" alignItems="baseline" className="space-x-1">
            <Title>Velocidad: {String(velocity) + "km/hr"}</Title>
        </Flex>
        <CategoryBar
            values={[30, 45, 15, 10]}
            colors={["emerald", "yellow", "orange", "red"]}
            markerValue={velocity}
            tooltip={String(velocity) + "km/hr"}
            className="mt-2"
        />
      </Card>
      
      <div className="p-2 mt-4">
        <Button className="w-full mx-auto m-2" color="sky"> Ver Posición </Button>
      </div>
    </Card>
  );
}
