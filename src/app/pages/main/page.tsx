import VisaPage from "../visapage/page";

const Main = () => {
  return (
    <div className="border-red-500 border ">
      {/* <div className="">
        <NavbarPage />
      </div>

      <div>
        <AllPage />
        <div className="border-red-500 border  p-2">
          <VisaPage  />
        </div>
        <div className="border-red-500 border  p-2">
          <DetailsPage />
        </div>
        <div className="border-red-500 border  p-2">
          <PaymentPage />
        </div>
      </div>

      <div>
        <FooterPage />
      </div> */}
      <VisaPage />
    </div>
  );
};

export default Main;
