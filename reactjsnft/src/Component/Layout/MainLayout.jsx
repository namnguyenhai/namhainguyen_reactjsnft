import { styled } from "styled-components";
import { SlideBar } from "Component/SlideBar";
import { Header } from "Component/Header";
import { Content } from "Component/Content";
import Logo1 from 'images/logo.svg';

const StyledMainLayout = styled.div`
    background-color:  #CAEAE6;
    width: 100vw;
    height: 100vh;
    .sliderBar_Position{
        width: 25%;
        height: 100vh;
        
    }

    .flex--row{
        display: flex;
        
    }
    .flex--column{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
   
`
export const MainLayout = () => {
    
    return <StyledMainLayout>
        <div className="flex--row">
            <div className="sliderBar_Position">
                <SlideBar imagepath1={Logo1} main_Tittle={"MyNFT"} sub_Tittle={"NFT Marketplace"}></SlideBar>

            </div>
            <div className="flex--column">
                {/* <div className="content_Top">1</div> */}
                <Header></Header>
                {/* <div className="content_Position">2</div> */}
                <Content></Content>
            </div>
        </div>

    </StyledMainLayout>
}