import { styled } from "styled-components";
import Green_Arrow from "images/Green_Arrow.svg";
import Red_Arrow from "images/Red_Arrow.svg"
const ButtonWrapper = styled.button`
    width: 115px;
    height: 46px;
    border: 2px solid rgba(233, 233, 233, 1);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 12px;
    font-size: 16px;
    img{
        margin-right: 10px;
    }
`

//chidren la phan tu trong the
export const Button = ({percent,children, onClick}) =>{
    return <ButtonWrapper 
    percent={percent}
    onClick={onClick}
    // {...rest}
    >
        <img src={percent < 0 ? Red_Arrow : Green_Arrow  } alt="" />
        {children}
        </ButtonWrapper>
}