import { Badge, Card, Flex, Metric, Text, Button, CategoryBar, Title, Tracker, Color } from "@tremor/react";
import { StatusOnlineIcon, ChartBarIcon, UserCircleIcon, RssIcon, EyeIcon } from "@heroicons/react/outline";
import AvatarCar from "./avatar_car";
import { useEffect, useState } from "react";

export interface Availablility {
    color: Color;
    tooltip: string;
  }

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



  const availability: Availablility[] = [
    { color: "blue", tooltip: "00:00 - 00:59" },
    { color: "blue", tooltip: "01:00 - 01:59" },
    { color: "blue", tooltip: "02:00 - 02:59" },
    { color: "blue", tooltip: "03:00 - 03:59" },
    { color: "blue", tooltip: "04:00 - 04:59" },
    { color: "blue", tooltip: "05:00 - 05:59" },
    { color: "blue", tooltip: "06:00 - 06:59" },
    { color: "blue", tooltip: "07:00 - 07:59" },
    { color: "blue", tooltip: "08:00 - 08:59" },
    { color: "blue", tooltip: "09:00 - 09:59" },
    { color: "blue", tooltip: "10:00 - 10:59" },
    { color: "emerald", tooltip: "11:00 - 11:59" },
    { color: "emerald", tooltip: "12:00 - 12:59" },
    { color: "emerald", tooltip: "13:00 - 13:59" },
    { color: "emerald", tooltip: "14:00 - 14:59" },
    { color: "emerald", tooltip: "15:00 - 15:59" },
    { color: "orange", tooltip: "16:00 - 16:59" },
    { color: "orange", tooltip: "17:00 - 17:59" },
    { color: "emerald", tooltip: "18:00 - 18:59" },
    { color: "red", tooltip: "19:00 - 19:59" },
    { color: "emerald", tooltip: "20:00 - 20:59" },
    { color: "emerald", tooltip: "21:00 - 21:59" },
    { color: "emerald", tooltip: "22:00 - 22:59" },
    { color: "emerald", tooltip: "23:00 - 23:59" },
  ];

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
          <div>
            <Badge icon={EyeIcon} color="gray">Batería: ⚡</Badge>
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
            values={[5, 45, 25, 25]}
            colors={["blue", "emerald", "orange", "red"]}
            markerValue={velocity}
            tooltip={String(velocity) + "km/hr"}
            className="mt-2"
        />
      </Card>


      <Card className="my-4"> 
        <Flex justifyContent="start" alignItems="baseline" className="space-x-1">
            <Title>Max velocidad por hora: 2023-09-04</Title>
        </Flex>
        <Tracker data={availability} className="mt-2" />
      </Card>


      
      <div className="p-2 mt-4">
        <Button className="w-full mx-auto m-2" color="sky"> Ver Posición </Button>
      </div>
    </Card>
  );
}
