import CustomCard from "../Components/CustomCard";
import CustomTitle from "../Components/CustomTitle";

const color = ["gray", "white", "gray"];

function PortfolioSection(props) {
  return (
    <div className="PortfolioSection m-4 ">
      {/* header */}
      <div className="container text-start">
        <CustomTitle color="gray" text="Portfolio" />
      </div>

      <div className="container mt-4  pt-3">
        <div className="row">
          {color.map(function (clr) {
            console.log({ clr })
            return <CustomCard color={clr} />;
          })}
        </div>

        <div className="row mt-4 mp-2">
          {color.map(function (clr) {
            console.log({ clr })
            return <CustomCard color={clr} />;
          })}

        </div>

      </div>
    </div>
  )
}


export default PortfolioSection;