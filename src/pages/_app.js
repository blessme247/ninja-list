import Layout from "@/Components/Layout";
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
    return ( 

        <Layout > 
        <Component {...pageProps} />
        </Layout>
    ) 
  }