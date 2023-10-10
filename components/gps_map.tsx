import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Amplify } from 'aws-amplify';
import { MapView } from '@aws-amplify/ui-react-geo';
import { Marker } from 'react-map-gl';

import type { MapRef } from 'react-map-gl';

import '@aws-amplify/ui-react-geo/styles.css';

import awsExports from '../src/aws-exports';
import { Card } from '@nextui-org/react';

Amplify.configure(awsExports);

export default function InitialViewport() {
    const mapRef = useRef<MapRef>();

    const patenteData = "LFXL-13"; 
    const fechaActualizacion = "09/10/2023 00:00:00";

    const [lat, setLat] = useState(-33.60871038427122);
    const [lng, setLng] = useState(-70.71127775616908);

    useEffect(() => {
        const interval = setInterval(() => {
            const newLat = lat + 0.0001;
            const newLng = lng + 0.0001;
    
            setLat(newLat);
            setLng(newLng);
            
            // Asegurándonos de que estamos usando las coordenadas correctas para flyTo
            mapRef.current?.flyTo({ center: [newLng, newLat], zoom: 15 });
        }, 2000);
    
        return () => clearInterval(interval);
    }, [lat, lng]);
    

    return (
        <Card> 
            <div>
                <MapView
                    ref={mapRef}
                    attributionControl={false}
                    initialViewState={{
                        latitude: lat,
                        longitude: lng,
                        zoom: 15,
                    }}
                >
                    <Marker latitude={lat} longitude={lng} color='#000000'/>
                    
                    <Card className='absolute top-4 left-4 p-4 shadow-md'>
                        <h3 className="font-bold">Patente: {patenteData}</h3>
                        <p>Fecha de actualización: {fechaActualizacion}</p>
                    </Card>
                </MapView>
            </div>
        </Card>
    );
}
