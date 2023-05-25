import { styled } from "styled-components";
import { CircleLogo } from "Component/Logo";
import { NavLink } from "react-router-dom";
import { CardBalance } from "Component/Card";
import IconSquare from "images/navitem/square.svg";
import Shop from "images/navitem/shop.svg";
import Hammer from "images/navitem/hammer.svg";
import DoubleCircle from "images/navitem/doublecircle.svg";
import Wallet from "images/navitem/wallet.svg";
import Favorite from "images/navitem/heart.svg";
import History from "images/navitem/history.svg";
import Setting from "images/navitem/setting.svg";
import Lightmode from "images/navitem/lightmode.svg";



const StyledDiv = styled.div`
    height: 100%;
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    background-color: white;
    .tittle--height{
        height: 10%;
    }
    .dashboard--height{
        height: 60%;
    }
    .balance--height{
        /* position: relative; */
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .flex--row--side{
        display: flex;
        gap: 20px;
        width: 100%;
        margin-bottom: 40px;
    }
    .flex--column2{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .flex--column--logo{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .flex--column--dashboard{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
        
    }
    p{
        color: rgba(39, 38, 46, 1);
        margin: 0;
        padding: 0;
    }
    .main_Tittle{
        font-size: 28px;
        font-weight: 700;
    }
    .sub_Tittle{
        font-size: 10px;
        font-weight: 700;
        color: rgba(122, 121, 125, 1);
    }
    .p--format{
        font-size: 12px;
        font-weight: 700;
    }
  
`
const StyleNavItem = styled.div`

    width: 100%;
    display: flex;
    gap: 20px;
    a {
        text-decoration: unset;
        color: #7A797D;
    }
    .tittle{
        font-size: 16px;
        font-weight: 700;
    }
`
const NavItem = ({iconItem,textItem,toLink}) => {
    return <StyleNavItem>
        <img src={iconItem} alt="" />
        <NavLink to={toLink} className="tittle">{textItem}</NavLink>
    </StyleNavItem>
}
export const SlideBar = ({imagepath1,main_Tittle,sub_Tittle}) =>{
    return <StyledDiv imagepath1={imagepath1}>
        <div className="flex--column2">
            <div className="flex--row--side tittle--height">
                <CircleLogo imagepath1={imagepath1}></CircleLogo>
                <div className="flex--column--logo">
                    <p className="main_Tittle">{main_Tittle}</p>
                    <p className="sub_Tittle">{sub_Tittle}</p>
                </div>
            </div>
            <div className="flex--column--dashboard dashboard--height">
                <NavItem iconItem={IconSquare} textItem={"DashBoard"} to={"/"}></NavItem>
                <NavItem iconItem={Shop} textItem={"Market"} to={"/"}></NavItem>
                <NavItem iconItem={Hammer} textItem={"Active Bids"} to={"/"}></NavItem>
                <p className="p--format">PROFILE</p>
                <NavItem iconItem={DoubleCircle} textItem={"My Porfolio"} to={"/"}></NavItem>
                <NavItem iconItem={Wallet} textItem={"Wallet"} to={"/"}></NavItem>
                <NavItem iconItem={Favorite} textItem={"Favorites"} to={"/"}></NavItem>
                <NavItem iconItem={History} textItem={"History"} to={"/"}></NavItem>
                <NavItem iconItem={Setting} textItem={"Settings"} to={"/"}></NavItem>
                <p className="p--format">OTHER</p>
                <NavItem iconItem={Lightmode} textItem={"Light Mode"} to={"/"}></NavItem>
            </div>
            <div className="balance--height">
                <CardBalance className="balance"></CardBalance>
            </div>
        </div>
    </StyledDiv>
}