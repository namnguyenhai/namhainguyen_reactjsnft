import { styled } from "styled-components"

const StyledImage = styled.div`
    width: 56px;
    height: 56px;
`

export const CircleLogo = ({imagePath}) => {
    return <StyledImage imagePath={imagePath}><img src={imagePath} alt="" /></StyledImage>
}