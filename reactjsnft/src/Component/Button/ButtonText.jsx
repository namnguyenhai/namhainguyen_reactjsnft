import { styled } from "styled-components"

const StyledButtonText = styled.button`
    border: 1px solid;
    color: ${props => props.text_color};
    background-color: ${props => props.bg_color};
    border-color: ${props => props.border_color};
    border-radius: ${props => props.radius};
    width: ${props => props.width};
    height: ${props => props.height};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
`
export const ButtonText = ({text,width,height, bg_color, text_color, border_color, radius, weight, size }) => {
    return <StyledButtonText text={text} width={width} height={height} bg_color={bg_color} text_color={text_color} border_color={border_color} radius={radius} weight={weight} size={size}>
        {text}
    </StyledButtonText>
}