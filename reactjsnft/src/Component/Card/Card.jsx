import styled from "styled-components";
import { Button } from "Component/Button";
import Ether from "images/Ether.svg";
const StyledCard = styled.div`
    padding: 24px;
    width: 164px;
    height: 167px;
    border: 1px solid;
    background-color: #FFFFFF;
    border-radius: 12px;
    color: #747475;
    .tittle{
        color: #747475;
        font-weight: 700;
        font-size: 14px;
        text-align: left;
        margin-bottom: 24px;
    }
    .amount{
        font-size: 24px;
        color: #27262E;
    }
    .ammount-wrapper {
        margin-bottom: 24px;
    }
`
export const Cart = ({tittle,amount,content,percent}) => {
    return <StyledCard>
        <div className="tittle">{tittle}</div>
        {
            amount ? 
            <div className="ammount-wrapper"><img src={Ether} alt="" /> <span className="amount">{amount}</span> ETH
            </div>:
            <div><span>{content}</span> ETH</div>
        }
        <Button percent={percent}>{percent}</Button>
    </StyledCard>
}