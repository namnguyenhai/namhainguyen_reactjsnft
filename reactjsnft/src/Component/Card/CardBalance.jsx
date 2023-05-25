import { styled } from "styled-components";
import { ButtonTopUp } from "Component/Button";
import ETH from "images/navitem/eth.svg";
import ETHmini from "images/navitem/ethmini.svg";
const StyledCardBalance = styled.div`
    width: 100%;
    height: 220px;
    background-color: white;
    background-image: url(${ETH}),linear-gradient(62deg, #BBAAFF 0%, #5429FF 100%);
    background-position: 20px 50px,center;
    background-repeat: no-repeat;
    border-radius: 16px;

    .flex--column--balance{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        height: 100%;
    }
    .flex--row--balance{
        display: flex;
        gap: 10px;
        height: 50px;
        margin: 0px;
        justify-content: center;
        align-items: center;

    }
    .p{
        margin: 0px;
        padding: 0px;
    }
    .p1{
        font-size: 12px;
        font-weight: 500;
        color: rgba(224, 222, 229, 1);
    }
    .p2{
        font-size: 30px;
        font-weight: 700;
        color: rgba(255, 255, 255, 1);
    }
    .p3{
        font-size: 12px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
    }
    .circleETH{
        background-color: white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: relative;
    }
    .imgETH{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`
export const CardBalance = () => {
    return <StyledCardBalance >
        
        <div className="flex--column--balance">
            <p className="p1">Your Balance</p>
            <p className="p2">1,034.02</p>
            <div className="flex--row--balance">
                <div className="circleETH">
                    <img className="imgETH" src={ETHmini} alt="" />
                </div>
                <p className="p3">ETH</p>
            </div>
            <ButtonTopUp></ButtonTopUp>
        </div>

    </StyledCardBalance>
}