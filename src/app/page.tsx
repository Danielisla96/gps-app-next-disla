"use client";

// External libraries
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { Button } from '@nextui-org/button';

// Internal imports
import awsconfig from '../aws-exports';
import { Title, Bold, Card } from "@tremor/react";

// Styles
import '@aws-amplify/ui-react/styles.css';
import KpiCard from '@/components/kpi_card';
import AccordionCard from '@/components/accordion_card';
import { Divider } from "@tremor/react";

// Amplify configuration
Amplify.configure(awsconfig);

function HomePage({ signOut, user }: WithAuthenticatorProps) {
    return (
        <div className="p-0">
		
		<div className="flex flex-wrap justify-center p-1"> 
			<h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] text-3xl md:text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Bienvenido&nbsp;</h1>
			<h1 className="tracking-tight inline font-semibold text-[2.5rem] text-3xl md:text-3xl lg:text-5xl">a WavesByte&nbsp;</h1>
		</div>

		<div className="flex flex-wrap justify-center">
			<h1 className='tracking-tight inline font-semibold text-[2.5rem] text-1xl md:text-3xl lg:text-2xl bg-clip-text'>{user?.attributes?.email}</h1>
		</div>


			<div className="flex flex-wrap justify-center mt-4 mb-4 p-1">

			<AccordionCard />

			</div>

			<Divider />


			<div className="flex flex-wrap justify-center p-1 mb-4"> 
				<h1 className="tracking-tight inline font-semibold text-[2.5rem] text-3xl lg:text-5xl">Tablero en&nbsp;</h1>
				<h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Tiempo Real&nbsp;</h1>
			</div>
            
            <div className="flex flex-wrap justify-center">

                <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/6 p-1 mb-4">
                    <KpiCard />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/6 p-1 mb-4">
                    <KpiCard />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/6 p-1 mb-4">
                    <KpiCard />
                </div>
				<div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/6 p-1 mb-4">
                    <KpiCard />
                </div>
            </div>

            <Button className="block w-full mt-2" color="secondary" onClick={signOut}>Cerrar Sesión</Button>
        </div>
    );
}

export default withAuthenticator(HomePage);
