"use client"
// External libraries
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { Button } from '@nextui-org/button';

// Internal imports
import awsconfig from '../../aws-exports';
import { Title, Bold } from "@tremor/react";

// Styles
import '@aws-amplify/ui-react/styles.css';
import GpsMap from '@/components/gps_map';

// Amplify configuration
Amplify.configure(awsconfig);

function MapId({ signOut, user }: WithAuthenticatorProps) {
	return (
		<div>
			<GpsMap />
		</div>
	);
}

export default withAuthenticator(MapId);
