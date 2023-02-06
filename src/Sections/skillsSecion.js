import CustomProgress from "../Components/CustomProgress";
import CustomTitle from "../Components/CustomTitle";
import CustomParagraph from "../Components/CustomParagraph";



function SkillsSection(props) {

     return (
          <div className="skills ">
               {/* text and header */}
               <div className="container text-centerr">
                    <CustomTitle color="white" text="Skills" />
                    <CustomParagraph color="white" text="The standard chunk of Lorem Ipsum used si
                    nce the 1500s is reproduced below for those interested Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical." />
               </div>
               {/* a sub section that hold paragraph and progress */}
               <div className="container ">
                    <div className="row">
                         {/* text cols*/}
                         <div className="col-lg-4 col-sm-12">
                             <div className="container p-4">
                              <CustomTitle color="white" text="programing"/>
                              <hr></hr>

                              <div className="p-1 ">
                                   <CustomParagraph color="white" text="Python" />
                              </div>

                              <div className="p-1 ">
                                   <CustomParagraph color="white" text="React" />
                              </div>

                              <div className="p-1 ">
                                   <CustomParagraph color="white" text="django" />
                              </div>
                              
                             </div>
                         </div>
                         {/* progress */}
                         <div className="col-lg-8 col-sm-12">
                              <div className=" container p-4">
                                   <div className="p-1 ">
                                        <CustomProgress percent="95%" />
                                   </div>
                                   <div className="p-1 ">
                                        <CustomProgress percent="75%" />
                                   </div>
                                   <div className="p-1 ">
                                        <CustomProgress percent="50%" />
                                   </div>
                                   <div className="p-1 ">
                                        <CustomProgress percent="75%" />
                                   </div>
                                   <div className="p-1 ">
                                        <CustomProgress />
                                   </div>
                                   <div className="p-1 ">
                                        <CustomProgress />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default SkillsSection;

