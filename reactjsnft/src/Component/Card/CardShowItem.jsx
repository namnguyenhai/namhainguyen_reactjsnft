import { styled } from "styled-components";
import { Avatar } from "Component/Image";
import { PTag } from "Component/CustomHTMLTag";
import Etherumb from "images/content/contentbottom/ethereum.svg"
const StyledCardShowItem = styled.div`
    width: 350px;
    height: 350px;
    background-color: white;
    padding: 2%;
    border-radius: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .flex--row--item--spacebw{
        display: flex;
        height: 50%;
        width: 100%;
        justify-content: space-between;
        
    }
    /* .img--height{
        height: 50%;
        width: 100%;
        
    } */
    .flex--row--itemsimple{
        display: flex;
        gap: 5px;
    }
    .flex--colum--iteminfo{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    .flex--colum--iteminfo--spacebw{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`
export const CardShowItem= ({src,text,bid,imageavatar,shortname,numberlikes, numeth}) => {
    return <StyledCardShowItem>
        <div >
            <Avatar src={src} width={"100%"} height={"100%"} ></Avatar>
        </div>
        <div className="flex--row--item--spacebw">
            <div className="flex--colum--iteminfo">
                <PTag text={text} size={"1.5em"} weight={700} colortext={"#27262E"}></PTag>
                <div className="flex--row--itemsimple">
                    <Avatar src={imageavatar} width={"28px"} height={"28px"}></Avatar>
                    <PTag text={shortname} size={"1em"} weight={400} colortext={"#747475"}></PTag>
                </div>
                <PTag text={bid} size={"1em"} weight={700} colortext={"#747475"}></PTag>
            </div>
            <div className="flex--colum--iteminfo--spacebw">
                <PTag text={numberlikes} weight={400} size={"1em"} colortext={"#747475"}></PTag>
                <div className="flex--row--itemsimple">
                    <Avatar src={Etherumb}></Avatar>
                    <PTag text={numeth} weight={700} size={"1em"} colortext={"#27262E"}></PTag>
                    <PTag text={"ETH"} weight={400} size={"1em"} colortext={"#747475"}></PTag>
                    
                </div>
            </div>
        </div>
    </StyledCardShowItem>
}