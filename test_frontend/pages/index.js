// import Link from 'next/link'
import Layout from 'components/Layout'
import fetch from 'isomorphic-unfetch'
import Rates from '../components/Rates'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

const Index = (props) => {
    return(
        <>
        <Layout>
            {/* <Link href={'/'}><a>Home</a></Link>
            <Link href={'/about'}><a>About</a></Link>
            <Link href={'/contact'}><a>Contact</a></Link> */}
            <h1>USD Exchange Rates</h1>
            <Rates rates={props.data}></Rates>
        </Layout>    
       <style jsx>{`
    h1, {
    font-family: 'Open Sans';
    color: grey
    }`}</style> 
    </>
    )
}

Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await res.json();
    return {
        data: data
    }


}



export default Index