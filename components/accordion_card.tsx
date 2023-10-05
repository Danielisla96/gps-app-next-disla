import React from "react";

import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";
import { Button, Callout, Card } from "@tremor/react"
import { Metric, Title, Subtitle, Bold, Italic, Text } from "@tremor/react";
import { CheckCircleIcon, MapIcon, PlusCircleIcon } from "@heroicons/react/outline";


export default function AccordionCard() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (

<Accordion variant="shadow">
    <AccordionItem key="1" aria-label="Accordion 1" title="Ver dispositivos" subtitle="4 dispositivos online" startContent={
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src="/maps.png"
          />
        }>
    <div className="w-full md:pr-2">
    <Card decoration="top" decorationColor="blue"> 
        <Metric>🟢 Tienes {4} dispositivos conectados</Metric>
        <Callout className="mt-4" title="Ver todos los dispositivos en un mismo mapa." icon={MapIcon} color="slate">
            Puedes ver todos los dispositivos en tiempo real y en un mismo mapa.
        </Callout>
        
        <div className="flex justify-center items-center mt-4">
            <Button className="block w-full mt-2" color="blue"> Ver todos los dispositivos </Button>
        </div>
    </Card>
    </div>
    </AccordionItem>
    <AccordionItem key="2" aria-label="Accordion 2" title="Registra un dispositivo" subtitle="4 dispositivos registrados" startContent={
          <Avatar
            isBordered
            color="secondary"
            radius="lg"
            src="/register.png"
          />
        }>
    <div className="w-full md:pl-2">
    <Card decoration="top" decorationColor="violet"> 
        <Metric>🚘 Registra un nuevo dispositivo</Metric>
        <Callout className="mt-4" title="Registrar un nuevo dispositivo." icon={PlusCircleIcon} color="slate">
            Compra un dispositivo GPS WavesByte y registralo en la plataforma.
        </Callout>
        
        <div className="flex justify-center items-center mt-4">
            <Button className="block w-full mt-2" color="violet"> Registra un nuevo dispositivo </Button>
        </div>
    </Card>
    </div>
    </AccordionItem>
  </Accordion>



    );
}
