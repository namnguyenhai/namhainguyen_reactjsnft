import { styled } from "styled-components";
import { PTag } from "Component/CustomHTMLTag";
import { Avatar } from "Component/Image";
import { ButtonText } from "Component/Button";
import Avatar1img from "images/content/contentbottom/avatar1.svg";
const StyledCardTopCreator = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
    padding: 5%;
    box-sizing: border-box;
    .flex__row--between--crea{
        display: flex;
        justify-content: space-between;
    }
    .p--fm--crea{
        padding: 0;
        margin: 0;
    }
    .flex--column--nameuser{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 20%;
    }
`
const StyledRowUser = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    gap: 30px;
    justify-content: flex-start;
    align-items: center;
`
const RowUser = ({number, avatar_img, name_user, short_name}) => {
    return <StyledRowUser number={number}>
        <PTag text={number} size={"1em"} weight={700} colortext={"#27262E"}></PTag>
        <Avatar src={avatar_img} width={44} height={44}></Avatar>
        <div className="flex--column--nameuser">
            <PTag text={name_user} size={"1em"} weight={700} colortext={"#27262E"}></PTag>
            <PTag text={short_name} size={"0.75em"} weight={400} colortext={"#747475"}></PTag>
        </div>
        <ButtonText text={"Follow"} width={"4.8em"} height={"2em"} bg_color={"#BBAAFF"} text_color={"#5429FF"} border_color={"White"} radius={"20px"} weight={500} size={"0.75em"}></ButtonText>
    </StyledRowUser>
}
export const CardTopCreator = () => {
    return <StyledCardTopCreator>
        <div className="flex__row--between--crea">
            <PTag text={"Top Creator"} size={"1.5em"} weight={700} colortext={"black"}></PTag>
            <PTag text={"See all"} size={"1em"} weight={500} colortext={"#747475"}></PTag>
        </div>
        <div>
            {/* <RowUser number={1} avatar_img={Avatar1img} name_user={"Michel"} short_name={"Siu"}></RowUser> */}
            {/* <RowUser number={1} avatar_img={Avatar1img} name_user={"Micheldasdsadsdsad"} short_name={"Siu"}></RowUser> */}
        </div>
    </StyledCardTopCreator>
}