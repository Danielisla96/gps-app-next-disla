"use client"

import { Amplify } from 'aws-amplify';
import { MapView } from '@aws-amplify/ui-react-geo';
import { Marker, FullscreenControl  } from 'react-map-gl';

import '@aws-amplify/ui-react-geo/styles.css';

import awsExports from '../src/aws-exports';
import { Card } from '@nextui-org/react';

Amplify.configure(awsExports);

export default function InitialViewport() {
  return (

    <Card className='h-[600px]'>
    <MapView
      attributionControl={false}
      initialViewState={{
        latitude: -33.60871038427122,
        longitude: -70.71127775616908,
        zoom: 15,
      }}
    >
        <FullscreenControl />
        <Marker latitude={-33.60871038427122} longitude={-70.71127775616908} />
        

    </MapView>
    </Card>
  );
}