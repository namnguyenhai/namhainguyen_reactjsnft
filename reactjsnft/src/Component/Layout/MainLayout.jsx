import { styled } from "styled-components"
import { SlideBar } from "Component/SlideBar"
const StyledMainLayout = styled.div`
    background-color:  #CAEAE6;
    width: 100vw;
    height: 100vh;
    .sliderBar_Position{
        width: 25%;
        height: 100vh;
        
    }
    .content_Position{
        width: 100%;
        background-color: #e681e6;
        height: 90%;
        
    }
    .content_Top{
        width: 100%;
        background-color: red;
        height: 10%;
        
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
export const MainLayout = ({imagePath,main_Tittle,sub_Tittle}) => {
    return <StyledMainLayout>
        <div className="flex--row">
            <div className="sliderBar_Position">
                <SlideBar imagePath={imagePath} main_Tittle={main_Tittle} sub_Tittle={sub_Tittle}></SlideBar>
            </div>
            <div className="flex--column">
                <div className="content_Top">1</div>
                <div className="content_Position">2</div>
            </div>
        </div>

    </StyledMainLayout>
}