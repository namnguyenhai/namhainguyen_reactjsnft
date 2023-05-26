import { styled } from "styled-components";
import { CardTopCreator } from "Component/Card";
const StyledContentBottom = styled.div`
    width: 100%;
    height: 60%;
    background-color: #e19292;
    display: flex;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    .div__left__contentbottom{
        width: 70%;
        background-color: #5c5cf2;
    }
    .div__right__contentbottom{
        width: 30%;
        /* background-color: #459445; */
    }
`
export const ContentBottom = () => {
    return <StyledContentBottom>
        <div className="div__left__contentbottom">
            <p>Trending Auctions</p>
        </div>
        <div className="div__right__contentbottom">
            <CardTopCreator></CardTopCreator>
        </div>
    </StyledContentBottom>
}