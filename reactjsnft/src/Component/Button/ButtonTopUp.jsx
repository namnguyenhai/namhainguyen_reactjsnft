import { styled } from "styled-components"

const StyledButtonTopUp = styled.button`
    width: 196px;
    height: 49px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 12px;
    border: 1px;

    .p--topup{
        font-size: 14px;
        font-weight: 700;
        
    }
    
    .circle--plus{
        position: relative;
        background-color: rgba(84, 41, 255, 1);
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }
    .p--plus{
        position: absolute;
        color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    /* .p::after{
       content: "\f007";
       font-family: "Font Awesome 5 Free";
       font-weight: 900;
    } */
`

export const ButtonTopUp = () => {
    return <StyledButtonTopUp>
        <div className="circle--plus">
            <p className="p--plus">+</p>
        </div>
        <p className="p--topup">Top Up Balance</p>
    </StyledButtonTopUp>
}