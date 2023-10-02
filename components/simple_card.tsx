import { Card, Text, Metric } from "@tremor/react";
import React from 'react'

const SimpleCard = () => {
  return (
    <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
        <Text>Sales</Text>
        <Metric>$ 34,743</Metric>
    </Card>
  )
}

export default SimpleCard