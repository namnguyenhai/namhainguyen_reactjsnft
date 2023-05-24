import { styled } from "styled-components"

const StyledImage = styled.div`
    width: 56px;
    height: 56px;
`

export const CircleLogo = ({imagepath1}) => {
    return <StyledImage imagepath1={imagepath1}><img src={imagepath1} alt="" /></StyledImage>
}