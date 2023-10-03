"use client"

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@nextui-org/button';
import { Bold, Title } from '@tremor/react';
Amplify.configure(awsconfig);



export function HomePage({ signOut, user }: WithAuthenticatorProps) {

	return (
		<>
			<Bold>Hola {user?.attributes?.email}</Bold>
			<Title>Esta es la página de Home</Title>
			<Button color="secondary" onClick={signOut}>Sign out</Button>
	  	</>
	);
  }
  
  export default withAuthenticator(HomePage);
