import Container from '../components/container'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Users from '../components/users'

const index = (props) => {
    //console.log(props)
    return (

    <div>
        <Head>
            <title>NexProyect</title>
        </Head>
        <Container>
        <h1> Next </h1>
        <Users users={props.users} />
        </Container>  
    </div>     
         
    )
};

index.getInitialProps = async (contexto) =>{
    const res = await fetch('https://reqres.in/api/users')
    const resJson = await res.json()
    console.log(resJson)
    return {users: resJson.data}
}



export default index