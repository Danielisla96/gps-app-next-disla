import { useMap } from 'react-map-gl';
import { Amplify } from 'aws-amplify';
import { Button } from '@aws-amplify/ui-react';
import { MapView } from '@aws-amplify/ui-react-geo';

import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react-geo/styles.css';

import awsExports from '../src/aws-exports';
import { Card } from '@nextui-org/react';

Amplify.configure(awsExports);


const GpsMap = () => {
  return (
    <Card className='w-full h-[700px]' >
        <MapView>

        </MapView>
    </Card>
  )
}

export default GpsMap