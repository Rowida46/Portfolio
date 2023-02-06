import CustionSocialMediaIcon from "../Components/CustionSocialMediaIcon";
import CustomParagraph from "../Components/CustomParagraph";
import CustomTitle from "../Components/CustomTitle";
import Custom_li from "../Components/Custom_li";
import CustomButton from "../Components/CutomButton";


function FooterSection(props) {
    return (
        <footer className="bg-dark ">
            <div className="container ">
                <div className="row">
                    {/* Contact */}
                    <div className="col-4">
                        <div className="container mt-2 pt-3">
                            <CustionSocialMediaIcon src="https:/www.svgrepo.com/show/25177/quora.svg" />
                            <CustionSocialMediaIcon src="https://github.com/Rowida46/TIL/blob/rowida/CSS&HTML/lab1/src/img/linkedin.png?raw=true" />
                            <CustionSocialMediaIcon src="https://github.com/Rowida46/TIL/raw/rowida/CSS%26HTML/lab1/src/img/twitter.png" />
                        </div>
                        <div className="mt-3">
                            <CustomTitle text="Contact Us" color="white" />
                        </div>
                    </div>

                    <div className="col-4 text-center pt-4 mt-4">
                        <CustomButton />
                    </div>
                    <div className="col-4 pt-4 mt-2">
                    <ul className="list-unstyled">
                    <Custom_li text="our Community"/>
                    <Custom_li text="Community"/>
                    <Custom_li/>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>

    )


}

export default FooterSection;