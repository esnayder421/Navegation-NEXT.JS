import Head from 'next/head'

import Navigation from "./navigations";

const Container = (props) => (
    <div>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        </Head>
        <Navigation/>
        <div className='container p-4'>
            {props.children}
        </div>
    </div>
)


export default Container;




