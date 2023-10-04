import React from "react";
import { Avatar } from "@nextui-org/react";

export default function AvatarCar() {
  return (
    <div className="flex items-center">
      <Avatar
        isBordered
        size="lg" 
        src="/car.png"
        style={{
          objectFit: "cover",      // Asegura que la imagen cubra el área del avatar
          objectPosition: "center" // Centra la imagen
        }}
        classNames={{
          base: "bg-gradient-to-br from-[#FFFFFF] to-[#EEEEEE]",
          icon: "text-black/80",
        }}
      />
    </div>
  );
}
