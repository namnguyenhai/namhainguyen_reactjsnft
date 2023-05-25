import { styled } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "Component/Image";
import Logo1Avatar from "images/header/header12.svg";

const StyledHeader = styled.div`
        width: 100%;
        background-color: rgba(202, 234, 230, 1);
        height: 10%;
        padding: 20px;
        box-sizing: border-box;
        .flex--row--header{
            display: flex;
            justify-content: space-between;
        }
        .flex--row{
            display: flex;
            gap: 24px;
        }
        ::-webkit-input-placeholder{
            color: rgba(185, 184, 188, 1);
        }
        .icon--find{
            color:  rgba(122, 121, 125, 1);
            font-size:25px;
            position: absolute;
            z-index: 19;
            left: 20px;
            top: 18px;
        }
        .icon--bell{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: rgba(122, 121, 125, 1);
            font-size: 20px;
        }
        .div--bell{
            position: relative;
            width: 56px;
            height: 56px;
            background-color: white;
            border-radius: 50%;
            border-color: rgba(233, 233, 233, 1);
        }
        .div--search{
            position: relative;
            width: 500px;
            height: 56px;
        }
        .search{
            position: absolute;
            border-radius: 35px;
            width: 100%;
            height: 100%;
            left: 0;
            text-indent: 50px;
            border: 1px;
            border-color: rgba(255, 255, 255, 1);
;
        }
`


export const Header = () => {
    return <StyledHeader>
        <div className="flex--row--header">
            <div className="div--search">
                <FontAwesomeIcon className="icon--find" icon={faMagnifyingGlass} />
                <input className="search" type="text" placeholder="Search Item, Collection and Account.." />
            </div>
            <div className="flex--row">
                <div className="div--bell">
                    <FontAwesomeIcon className="icon--bell" icon={faBell} />
                </div>
                <Avatar src={Logo1Avatar} width={56} height={56}></Avatar>
            </div>
            
            
        </div>
        

    </StyledHeader>;
}