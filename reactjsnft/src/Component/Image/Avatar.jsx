import { styled } from "styled-components";
// import Logo1Avatar from "images/header/header12.svg";

const Logo = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export const Avatar = ({src,width,height}) => {
    return <Logo src={src} width={width} height={height}></Logo>
}