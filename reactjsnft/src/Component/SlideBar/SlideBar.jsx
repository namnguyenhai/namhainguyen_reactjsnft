import { styled } from "styled-components";
import { CircleLogo } from "Component/Logo";
import { NavLink } from "react-router-dom";
import IconSquare from "images/navitem/square.svg";
const StyledDiv = styled.div`
    height: 100%;
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    background-color: white;
    .flex--row{
        display: flex;
        gap: 20px;
        width: 100%;
    }
    .flex--column{
        display: flex;
        flex-direction: column;
    }
    .flex--column--logo{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    p{
        color: black;
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
`
const StyleNavItem = styled.div`
    display: flex;
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
export const SlideBar = ({imagePath,main_Tittle,sub_Tittle}) =>{
    return <StyledDiv imagePath={imagePath}>
        <div className="flex--column">
            <div className="flex--row">
                <CircleLogo imagePath={imagePath}></CircleLogo>
                <div className="flex--column--logo">
                    <p className="main_Tittle">{main_Tittle}</p>
                    <p className="sub_Tittle">{sub_Tittle}</p>
                </div>
            </div>
            <div>
                <NavItem iconItem={IconSquare} textItem={"DashBoard"} to={"/"}></NavItem>
            </div>
        </div>
    </StyledDiv>
}