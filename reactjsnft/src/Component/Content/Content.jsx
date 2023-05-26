import { styled } from "styled-components"
import { ContentTop } from "."
import { ContentBottom } from "."

const StyledContent= styled.div`
    width: 100%;
    background-color: #e681e6;
    height: 90%;
`
export const Content = () =>{
    return <StyledContent>
        <ContentTop></ContentTop>
        <ContentBottom></ContentBottom>
        
    </StyledContent>
}