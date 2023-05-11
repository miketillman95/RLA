import '../styles/globals.css'
import '../styles/cart.css'
import '../styles/layout.css'
import React from 'react'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'
import { Layout } from '../components'

export default function App({ Component, pageProps }) {
  return(
  <StateContext>
    <Layout>
      {/* passes children to the main div of to layout to display content throughout the component */}
      <Toaster/>
      <Component {...pageProps} />
    </Layout>
  </StateContext>
)
}