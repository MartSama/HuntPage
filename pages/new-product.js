import styled from '@emotion/styled'
import Layout from '../src/components/layout/Layout'
const Heading = styled.h1`
  color: red
`


export default function NewProduct() {
    return (
        <div >
            <Layout>
                <Heading>New product</Heading>
            </Layout>
        </div>
    )
}
