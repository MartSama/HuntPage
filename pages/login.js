import styled from '@emotion/styled'
import Layout from '../src/components/layout/Layout'
const Heading = styled.h1`
  color: red
`


export default function Login() {
    return (
        <div >
            <Layout>
                <Heading>LogIn</Heading>
            </Layout>
        </div>
    )
}
