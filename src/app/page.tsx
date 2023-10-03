"use client"
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
import AreaChartComponent from '../components/area_chart_component';

// Amplify configuration
Amplify.configure(awsconfig);

function HomePage({ signOut, user }: WithAuthenticatorProps) {
	return (
		<div>
			<Bold className="block w-full">Hola {user?.attributes?.email}</Bold>
			<Title className="block w-full mt-2">Esta es la página de Home</Title>
			<Button className="block w-full mt-2" color="secondary" onClick={signOut}>Sign out</Button>
			<AreaChartComponent />
		</div>
	);
}

export default withAuthenticator(HomePage);
