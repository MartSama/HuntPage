import styled from '@emotion/styled'
import Layout from '../src/components/layout/Layout'
const Heading = styled.h1`
  color: red
`


export default function Trending() {
    return (
        <div >
            <Layout>
                <Heading>Trending</Heading>
            </Layout>
        </div>
    )
}
