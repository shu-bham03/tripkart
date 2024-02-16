import VisaPage from "../pages/visapage/page";
import "../pages/detailspage/page";
import "../routes/routes.css";
import { Router, useRouter } from "next/router";
const AllPage = () => {
  // const router = useRouter();

  // const openDetails = () => {
  //   router.push("/pages/detailspage");
  // };
  return (
    <div className="container-xl flex justify-center items-center   mx-4 sm:mx-4 md:mx-16 lg:mx-24 xl:mx-24">
      <div className="flex justify-center text-center">
        <a href="">
          <input
            type="checkbox"

            // className="rounded-full h-6 w-6 border-gray-300 focus:ring-indigo-500"
            // style={{ borderRadius: "100%"}}
          />
          <p>Home</p>
        </a>

        <span className="mr-[-70px]">━━━━━━━━━━━━━━━━━━━━</span>
        <a href="/pages/detailspage">
          <input type="checkbox" className="text-center" />
          <p>Application Details</p>
        </a>
        <span className="ml-[-40px]">━━━━━━━━━━━━━━━━━━━━</span>
        <a href="/pages/paymentpage">
          <input type="checkbox" className="text-center" />
          <p>Payment</p>
        </a>
      </div>
    </div>
  );
};

export default AllPage;
