// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { GMAIL_PASSWORD, GMAIL_USER } from '$env/dynamic/public';
import type { Actions } from './$types';
import nodemailer from 'nodemailer';
export const actions = {
	enviar: async ({ request }) => {
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: '465',
			secure: true,
			auth: {
				user: 'javiervarelalml@gmail.com',
				pass: 'ippzevhnhcyvesdq'
			}
		});

		const mailOptions = {
			from: 'javiervarelalml@gmail.com',
			to: 'javiervarelapozo@yahoo.es',
			subject: 'Sending Email using Node.js',
			text: 'That was easy!'
		};

		try {
			const info = await transporter.sendMail(mailOptions);
			console.log('Email sent: ' + info.response);
		} catch (error) {
			console.log(error);
		}
	}
} satisfies Actions;
