"use client"

import { Amplify } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@nextui-org/button';
import { Title, Bold } from "@tremor/react";
import AreaChartComponent from '@/components/area_chart_component';
Amplify.configure(awsconfig);

export function AboutPage({ signOut, user }: WithAuthenticatorProps) {
	return (
	<div>
        <Bold className="block w-full">Hola {user?.attributes?.email}</Bold>
        <Title className="block w-full mt-2">Esta es la página de About</Title>
        <Button className="block w-full mt-2" color="secondary" onClick={signOut}>Sign out</Button>
    </div>
	);
  }
  
  export default withAuthenticator(AboutPage);