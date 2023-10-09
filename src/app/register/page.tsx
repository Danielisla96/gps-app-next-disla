"use client"
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { Button } from '@nextui-org/button';
import awsconfig from '../../aws-exports';
import { Title, Bold } from "@tremor/react";
import {Divider, Input} from "@nextui-org/react";
import '@aws-amplify/ui-react/styles.css';
import RegisterForm from '@/components/register_form';

// Amplify configuration
Amplify.configure(awsconfig);

function RegisterPage({ signOut, user }: WithAuthenticatorProps) {
	return (
		<div>

		<div className="flex flex-wrap justify-center p-1"> 
			<h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] text-3xl md:text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Bienvenido&nbsp;</h1>
			<h1 className="tracking-tight inline font-semibold text-[2.5rem] text-3xl md:text-3xl lg:text-5xl">a WavesByte&nbsp;</h1>
		</div>

		<div className="flex flex-wrap justify-center">
			<h1 className='tracking-tight inline font-semibold text-[2.5rem] text-1xl md:text-3xl lg:text-2xl bg-clip-text'>{user?.attributes?.email}</h1>
			<Divider className='mt-4' />
		</div>

		

		<div className="flex flex-wrap justify-center p-4 mb-4"> 
				<h1 className="tracking-tight inline font-semibold text-[2.5rem] text-3xl lg:text-5xl">Registra tu&nbsp;</h1>
				<h1 className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">Dispositivo&nbsp;</h1>
		</div>

		
		<div>
			<RegisterForm />
		</div>
		


		</div>
	);
}

export default withAuthenticator(RegisterPage);
