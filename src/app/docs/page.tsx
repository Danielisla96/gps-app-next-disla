"use client"

import { Amplify } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import '@aws-amplify/ui-react/styles.css';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@nextui-org/button';
import { Bold, Title } from '@tremor/react';
Amplify.configure(awsconfig);

export function DocsPage({ signOut, user }: WithAuthenticatorProps) {
	return (
		<>
        <Bold className="block w-full">Hola {user?.attributes?.email}</Bold>
        <Title className="block w-full mt-2">Esta es la página de Docs</Title>
        <Button className="block w-full mt-2" color="secondary" onClick={signOut}>Sign out</Button>
	  </>
	);
  }
  
  export default withAuthenticator(DocsPage);