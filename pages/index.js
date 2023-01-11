import Head from 'next/head'
import Image from 'next/image'
import {client} from '../lib/client'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
return (
<>
    <Head>
		<title>Rowdy LA</title>
		<meta name="description" content="Generated by create next app" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
		<div className= 'center-board'>
		<h1>ROWDY LA IMAGE</h1>
			<div className='home-links'></div>
				<p>Shop</p>
				<p>About</p>
				<p></p>
			</div>
    </main>
</>
)
}

export async function getStaticProps() {

	const products = await client.fetch(`*[_type == 'product']`)

	return {
		props: {products}
	}
}