"use client";

import { Badge, BadgeDelta, Button, Card, Flex, Metric, ProgressBar, Text } from "@tremor/react";
import {
    StatusOnlineIcon,
    ShoppingCartIcon,
    CogIcon,
    ClockIcon,
    MinusCircleIcon,
  } from "@heroicons/react/outline";

// Single KPI card in the demo dashboard with sample inputs
export default function KpiCard() {
  return (
    <Card className="w-full mx-auto">
      <Flex alignItems="start">
        <div>
          <Text>GPS</Text>
          <Metric>LFXL-13</Metric>
        </div>
        <Badge icon={StatusOnlineIcon} color="green">Online</Badge>
      </Flex>
      <div className="p-2 mt-4">
      <Button className="w-full mx-auto m-2" color="sky"> Ver Posición </Button>
      </div>
    </Card>
  );
}
