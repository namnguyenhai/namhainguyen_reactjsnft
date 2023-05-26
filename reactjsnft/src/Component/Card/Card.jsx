import styled from "styled-components";
import { Button } from "Component/Button";
import Ether from "images/Ether.svg";
const StyledCard = styled.div`
    padding: ${props => props.padding};
    width: ${props => props.width};
    height: ${props => props.height};
    border: 1px solid;
    background-color: #FFFFFF;
    border-radius: 12px;
    color: #747475;
    .tittle{
        color: #747475;
        font-weight: 700;
        font-size: 14px;
        text-align: left;
        margin-bottom: ${props => props.padding};
    }
    .amount{
        font-size: 24px; 
        color: #27262E;
    }
    .ammount-wrapper {
        margin-bottom: 24px;
    }
`
export const Cart = ({tittle,amount,content,percent,width,height,padding,width_button,height_button}) => {
    return <StyledCard padding={padding} width={width} height={height}>
        <div className="tittle">{tittle}</div>
        {
            amount ? 
            <div className="ammount-wrapper"><img src={Ether} alt="" /> <span className="amount">{amount}</span> ETH
            </div>:
            <div><span>{content}</span> ETH</div>
        }
        <Button percent={percent} width_button={width_button} height_button={height_button}>{percent} %</Button>
    </StyledCard>
}