import React from "react";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { PencilAltIcon } from "@heroicons/react/outline";

export default function AvatarCar() {
  return (
    <div className="flex items-center">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
      <Avatar
        isBordered
        size="lg" 
        src="/car.png"
        style={{
          objectFit: "cover",      // Asegura que la imagen cubra el área del avatar
          objectPosition: "center" // Centra la imagen
        }}
        classNames={{
          base: "bg-gradient-to-br from-[#ddd9e6] to-[#ddd9e6]",
          icon: "text-black/80",
        }}
      />
       </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Patente</p>
            <p className="font-semibold">LFXL-13</p>
          </DropdownItem>
          <DropdownItem key="change_image">
            Cambiar Imagen
          </DropdownItem>
          <DropdownItem key="statistics">Estadísticas</DropdownItem>
          <DropdownItem key="cut_engine" color="danger">
            Cortar Corriente
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
