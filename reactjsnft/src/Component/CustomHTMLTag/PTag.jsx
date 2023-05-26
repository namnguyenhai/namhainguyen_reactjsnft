import { styled } from "styled-components"

const StyledP_tag = styled.p`
    padding: 0;
    margin: 0;
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    color: ${props => props.colortext};
`
export const PTag = ({text, size, weight, colortext }) => {
    return <StyledP_tag text={text} size={size} weight={weight} colortext={colortext}>{text}</StyledP_tag>
}