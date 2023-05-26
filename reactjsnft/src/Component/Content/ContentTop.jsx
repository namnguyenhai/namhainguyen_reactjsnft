import { styled } from "styled-components";
import { ButtonText } from "Component/Button";
import { Cart } from "Component/Card";
import BRPurleImage from "images/content/contenttop/rec.svg";
const StyledContentTop = styled.div`
    display: flex;
    height: 40%;
    width: 100%;
    background-color: #CAEAE6;
    
    padding: 20px;
    box-sizing: border-box;
    gap: 20px;
    .div__left__contenttop{
        width: 70%;
        border-radius: 12px;
        background-image: url(${BRPurleImage});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        gap: 20px;
        padding: 50px 120px 30px 100px ;
        box-sizing: border-box;
    }
    .div__right__contenttop{
        width: 30%;
        display: flex;
        flex-flow: row wrap;
        column-gap: 20px;
        
    }
    .cart{
        margin: 4px;
        flex: 0 1 calc(50%-8px);
    }
    .p--contenttop-banner{
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 3.37em;
        color: rgba(255, 255, 255, 1);
    }
    .flex--row--bbanner{
        display: flex;
        gap: 20px;
    }
`
export const ContentTop = () => {
    return <StyledContentTop>
        <div className="div__left__contenttop">
            <p className="p--contenttop-banner">Discover, Create and<br />Sell Your Own NFT</p>
            <div className="flex--row--bbanner">
                <ButtonText text={"Discover"} width={"128px"} height={"46px"} bg_color={"white"} text_color={"#5429FF"} border_color={"White"} radius={"40px"} weight={700} size={"16px"}></ButtonText>
                <ButtonText text={"Create"} width={"128px"} height={"46px"} bg_color={"transparent"} text_color={"#FFFFFF"} border_color={"#FFFFFF"} radius={"40px"} weight={700} size={"16px"}></ButtonText>
            </div>
        </div>
        <div className="div__right__contenttop">
            <div className="cart" >
                <Cart tittle={"Revenue"} amount={"5.00"} percent={12.3} width={"130px"} height={"130px"} padding={"10px"} height_button={"30px"} width_button={"100px"}></Cart>
            </div>
            <div className="cart" >
                <Cart tittle={"Revenue"} amount={"5.00"} percent={12.3} width={"130px"} height={"130px"} padding={"10px"} height_button={"30px"} width_button={"100px"}></Cart>
            </div>
            <div className="cart" >
                <Cart tittle={"Revenue"} amount={"5.00"} percent={12.3} width={"130px"} height={"130px"} padding={"10px"} height_button={"30px"} width_button={"100px"}></Cart>
            </div>
            <div className="cart" >
                <Cart tittle={"Revenue"} amount={"5.00"} percent={12.3} width={"130px"} height={"130px"} padding={"10px"} height_button={"30px"} width_button={"100px"}></Cart>
            </div>

        </div>
    </StyledContentTop>
}