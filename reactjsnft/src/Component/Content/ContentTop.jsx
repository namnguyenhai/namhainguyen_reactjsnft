import { styled } from "styled-components"
import BRPurleImage from "images/content/contenttop/rec.svg";
const StyledContentTop = styled.div`
    display: flex;
    height: 40%;
    width: 100%;
    background-color: green;
    .div__left__contenttop{
        width: 60%;
        /* background-image: url(); */
    }
    .div__right__contenttop{
        width: 40%;
    }
`
export const ContentTop = () => {
    return <StyledContentTop>
        <div className="div__left__contenttop">
            1
        </div>
        <div className="div__right__contenttop">
            2
        </div>
    </StyledContentTop>
}