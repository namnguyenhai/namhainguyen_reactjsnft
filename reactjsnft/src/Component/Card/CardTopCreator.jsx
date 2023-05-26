import { styled } from "styled-components";
import { PTag } from "Component/CustomHTMLTag";
import { Avatar } from "Component/Image";
import { ButtonText } from "Component/Button";
import Avatar1img from "images/content/contentbottom/avatar1.svg";
import Avatar2img from "images/content/contentbottom/avatar2.svg";
import Avatar3img from "images/content/contentbottom/avatar3.svg";
import Avatar4img from "images/content/contentbottom/avatar4.svg";
import Avatar5img from "images/content/contentbottom/avatar5.svg";
import Avatar6img from "images/content/contentbottom/avatar6.svg";
const StyledCardTopCreator = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
    padding: 5%;
    box-sizing: border-box;
    border-radius: 16px;
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
    .flex--column--user{
        height: 80%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        
    }

`
const StyledRowUser = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    gap: 30px;
    justify-content: flex-start;
    align-items: center;
    
    .div1--number{
        width: 10%;
    }
    .div2--info{
        display: flex;
        width: 70%;
        gap: 10px;
        /* word-break: break-word; */
    }
    .div3--follow{
        width: 20%;
    }
`
const RowUser = ({number, avatar_img, name_user, short_name}) => {
    return <StyledRowUser>
        <div className="div1--number">
            <PTag text={number} size={"1em"} weight={700} colortext={"#27262E"}></PTag>
        </div>
        <div className="div2--info">
            <Avatar src={avatar_img} width={44} height={44}></Avatar>
            <div className="flex--column--nameuser">
                <PTag text={name_user} size={"1em"} weight={700} colortext={"#27262E"}></PTag>
                <PTag text={short_name} size={"0.75em"} weight={400} colortext={"#747475"}></PTag>
            </div>
        </div>
        <div className="div3--follow">
            <ButtonText text={"Follow"} width={"6.5em"} height={"3em"} bg_color={"#ab9ce6"} text_color={"#6c4bec"} border_color={"White"} radius={"20px"} weight={500} size={"0.75em"}></ButtonText>
        </div>
    </StyledRowUser>
}
const User = [
    {number: "1.",
     name_user: "Michael Jordan",
     short_name: "@jordan_",
     images_avatar: Avatar1img   
    },
    {number: "2.",
    name_user: "John Tibao",
    short_name: "@johnti60",
    images_avatar: Avatar2img   
    },
    {number: "3.",
    name_user: "Teressa",
    short_name: "@teressa",
    images_avatar: Avatar3img   
    },
    {number: "4.",
    name_user: "Johan Hawn",
    short_name: "@j_hawn",
    images_avatar: Avatar4img   
    },
    {number: "5.",
    name_user: "Maria Alisson",
    short_name: "@m_alisson",
    images_avatar: Avatar5img   
    },
    {number: "6.",
    name_user: "Sam Erricson",
    short_name: "@erricsonsam",
    images_avatar: Avatar6img   
    }
]
export const CardTopCreator = () => {
    return <StyledCardTopCreator>
        <div className="flex__row--between--crea">
            <PTag text={"Top Creator"} size={"1.5em"} weight={700} colortext={"black"}></PTag>
            <PTag text={"See all"} size={"1em"} weight={500} colortext={"#747475"}></PTag>
        </div>
        <div className="flex--column--user" >
            {/* <RowUser number={"1."} avatar_img={Avatar1img} name_user={"Michael Jordan"} short_name={"@jordan_"}></RowUser>
            <RowUser number={"1."} avatar_img={Avatar1img} name_user={"Micheldasdsadsdsad"} short_name={"Siu"}></RowUser> */}
            {
                User.map((item, index) => <RowUser key={index} number={item.number} avatar_img={item.images_avatar} name_user={item.name_user} short_name={item.short_name}></RowUser>)
            }
        </div>
    </StyledCardTopCreator>
}