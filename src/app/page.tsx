"use client";

// External libraries
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { Button } from '@nextui-org/button';

// Internal imports
import awsconfig from '../aws-exports';
import { Title, Bold } from "@tremor/react";

// Styles
import '@aws-amplify/ui-react/styles.css';
import AreaChartComponent from '../../components/area_chart_component';
import KpiCard from '@/components/kpi_card';

// Amplify configuration
Amplify.configure(awsconfig);

function HomePage({ signOut, user }: WithAuthenticatorProps) {
    return (
        <div className="p-4">
            <Bold className="block w-full mb-2">Hola {user?.attributes?.email}</Bold>
            <Title className="block w-full mb-4">Esta es la página de Home</Title>
            
            <div className="flex flex-wrap justify-center mb-4">

                <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/6 p-2">
                    <KpiCard />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/6 p-2">
                    <KpiCard />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/6 p-2">
                    <KpiCard />
                </div>
				<div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/6 p-2">
                    <KpiCard />
                </div>
            </div>

            <Button className="block w-full mt-2" color="secondary" onClick={signOut}>Cerrar Sesión</Button>
        </div>
    );
}

export default withAuthenticator(HomePage);
