import CustomParagraph from "../Components/CustomParagraph";
import CustomTitle from "../Components/CustomTitle";
import CustomButton from "../Components/CutomButton";
import DownloadBtn from "../Components/DownloadBtn";



function AboutSection(props){

    return(
       <div className="aboutSection">
            <div className="container p-4">
               <div className="row" >
                    <div className="col-4 m-2">
                        <CustomTitle color="black" text="Rowida Nagah"/>
                    </div>
                    <div className="col-7 mb-sm-2">
                         <CustomParagraph color="black"  text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock but special classes for margin/padding has been added that can do the job and has more options."/>
                         <DownloadBtn color="" />
                    </div>
               </div>
            </div>
       </div>
    )
}


export default AboutSection;