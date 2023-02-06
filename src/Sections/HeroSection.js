import CustomParagraph from "../Components/CustomParagraph";
import CustomTitle from "../Components/CustomTitle";
import CustomButton from "../Components/CutomButton";
import { Player } from '@lottiefiles/react-lottie-player';


function HeroSection(props){

    return(
        
            <div className="heroSection p-4">
                <div className="container heroSectionHead mt-4">
                 <CustomTitle color="white" text="Rowida Nagah"/>
                  <CustomParagraph color="white"  text="lorem app is here for u to fill in the space"/>
                  <CustomButton/>
               </div>
            </div>
    )
}


export default HeroSection;