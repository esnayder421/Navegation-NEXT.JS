import {useRouter} from 'next/router'
import fetch from 'isomorphic-fetch'
import Container from '../../components/container';

const UserProfile = ({user}) =>{
    
    const router = useRouter();
    const {id} = router.query;
    return (
        <Container>
            <div className='row' >
                <div className='col-md-6 offset-md-3' >
                    <div className='card' >
                        <div className='card-header text-center' >
                         <img src={user.avatar} style={{borderRadius: '50%'}} ></img>
                        </div> 
                        <div className='card-body text-center' >
                            <h3>
                                {user.id}. {user.first_name} {user.last_name}
                            </h3>
                            <p> {user.email} </p>
                        </div> 
                    </div>
                </div>
            </div>
        </Container>
    )
}

UserProfile.getInitialProps = async (contexto) =>{
    const res = await fetch(`https://reqres.in/api/users/${contexto.query.id}`)
    const resJson = await res.json()

    return {user: resJson.data}
}


export default UserProfile;