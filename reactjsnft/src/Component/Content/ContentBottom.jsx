import { styled } from "styled-components";
import { CardTopCreator } from "Component/Card";
import { PTag } from "Component/CustomHTMLTag";
import { CardShowItem } from "Component/Card";
import Monkey1 from "images/content/contentbottom/monkey1.svg";
import AvatarOwn1 from "images/content/contentbottom/avatarown1.svg";
import Monkey2 from "images/content/contentbottom/monkey2.svg";
import AvatarOwn2 from "images/content/contentbottom/avatarown2.svg";
const StyledContentBottom = styled.div`
    width: 100%;
    height: 60%;
    /* background-color: #e19292; */
    display: flex;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    .div__left__contentbottom{
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        /* background-color: #5cbdd3; */
    }
    .div__right__contentbottom{
        width: 30%;
    }
    .flex--row--headcont{
        display: flex;
        justify-content: space-between;
        
    }
    .flex--row--li{
        display:  flex;
        gap: 30px;
    }
    .flex--row-warp{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
`

const ItemNFT = [
    {
        imagesnft: Monkey1,
        text: "Ape In Love",
        bid: "Current Bid",
        avatar: AvatarOwn1,
        shortname: "@johnti60",
        numberlikes: "21,5K Likes",
        numbereth: "9.10"
    },
    {
        imagesnft: Monkey2,
        text: "Smilling Ape",
        bid: "Current Bid",
        avatar: AvatarOwn2,
        shortname: "@m_alisson",
        numberlikes: "21,5K Likes",
        numbereth: "6.12"
    }
]

export const ContentBottom = () => {
    return <StyledContentBottom>
        <div className="div__left__contentbottom">
            <div className="flex--row--headcont">
                <PTag text={"Trending Auctions"} size={"1.5em"} weight={700} colortext={"#27262E"}></PTag>
                <div className="flex--row--li">
                    <PTag text={"Art"} size={"0.9em"} weight={500} colortext={"#7A797D"}></PTag>
                    <PTag text={"Music"} size={"0.9em"} weight={500} colortext={"#7A797D"}></PTag>
                    <PTag text={"Collectibles"} size={"0.9em"} weight={500} colortext={"#7A797D"}></PTag>
                    <PTag text={"Utility"} size={"0.9em"} weight={500} colortext={"#7A797D"}></PTag>
                </div>
            </div>
            <div className="flex--row-warp">
                {
                    ItemNFT.map((item,index) => <CardShowItem key={index} src={item.imagesnft} text={item.text} bid={item.bid} imageavatar={item.avatar} shortname={item.shortname} numberlikes={item.numberlikes} numeth={item.numbereth}></CardShowItem>)
                }
            </div>
            {/* <CardShowItem src={Monkey1} text={"Ape In Love"} bid={"Current Bid"} imageavatar={AvatarOwn1} shortname={"@johnti60"} numberlikes={"21,5K Likes"} numeth={"9.10"}></CardShowItem> */}
        </div>

        <div className="div__right__contentbottom">
            <CardTopCreator></CardTopCreator>
        </div>
    </StyledContentBottom>
}