import { styled } from "styled-components"
import { ContentTop } from "."
const StyledContent= styled.div`
    width: 100%;
    background-color: #e681e6;
    height: 90%;
`
export const Content = () =>{
    return <StyledContent>
        <ContentTop></ContentTop>
    </StyledContent>
}