import { styled } from "styled-components"
import { ContentTop } from "."
import { ContentBottom } from "."

const StyledContent= styled.div`
    width: 100%;
    
    height: 90%;
`
export const Content = () =>{
    return <StyledContent>
        <ContentTop></ContentTop>
        <ContentBottom></ContentBottom>
        
    </StyledContent>
}