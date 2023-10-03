"use client"

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@nextui-org/button';
import { Bold, Title } from '@tremor/react';
import AreaChartComponent from '@/components/area_chart_component';
Amplify.configure(awsconfig);



export function HomePage({ signOut, user }: WithAuthenticatorProps) {

	return (

    <section className="w-full">
        <Bold className="block w-full">Hola {user?.attributes?.email}</Bold>
        <Title className="block w-full mt-2">Esta es la página de Home</Title>
        <Button className="block w-full mt-2" color="secondary" onClick={signOut}>Sign out</Button>
        <div className="w-full mt-2">
            <AreaChartComponent />
        </div>
    </section>



	);
  }
  
  export default withAuthenticator(HomePage);
