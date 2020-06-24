import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch'

const Index = () => {
    return(
        <Layout>
            {/* <Link href={'/'}><a>Home</a></Link>
            <Link href={'/about'}><a>About</a></Link>
            <Link href={'/contact'}><a>Contact</a></Link> */}
            <h1>Good morning!</h1>
        </Layout>    
        
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