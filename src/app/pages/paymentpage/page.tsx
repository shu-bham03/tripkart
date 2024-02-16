import CoHead from "@/app/shared/navbar/cohead";
import FooterPage from "@/app/shared/navbar/footer";
import NavbarPage from "@/app/shared/navbar/page";
import Link from "next/link";

const PaymentPage = () => {
  return (
    <div className="container-xl  mx-4 sm:mx-4 md:mx-16 lg:mx-16 xl:mx-16">
      <div>
        <CoHead />
      </div>
      <hr className="mt-5" />
      <div>
        <NavbarPage />
      </div>
      <div>
        <div className=" flex justify-center items-center   mx-4 sm:mx-4 md:mx-16 lg:mx-24 xl:mx-24">
          <div className="flex justify-center text-center">
            <Link href="/">
              <img src="/images/tick3.svg" alt="" />
              {/* <p className=" text-[12px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px]">
                Home
              </p> */}
            </Link>

            {/* <span className="mr-[-30px] sm:mr-[-20px] md:mr-[-30px] xl:mr-[-50px] mt-[10px]  xl:ml-[-10px] text-[4px] sm:text-[5px] md:text-[8px] lg:text-[10px] xl:text-[15px]">
              ━━━━━━━━━━━━━━━━━━
            </span>
            <Link href="/pages/detailspage">
              <div className="flex justify-center">
                <img src="/images/Default.svg" alt="" />
              </div>
              <p className=" text-[12px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px]">
                Application Details
              </p>
            </Link>
            <span className="ml-[-30px] sm:ml-[-30px] md:ml-[-30px] xl:ml-[-50px] mr-[10px] mt-[10px] text-[4px] sm:text-[8px] md:text-[8px] lg:text-[10px] xl:text-[15px]">
              ━━━━━━━━━━━━━━━━━━
            </span>
            <Link href="/pages/paymentpage">
              <img src="/images/Default.svg" alt="" />
              <p className=" text-[12px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px]">
                Payment
              </p>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="mx-4 sm:mx-4 md:mx-16 lg:mx-16 xl:mx-16">
        <div className="text-[12px] xl:text-[25px] mt-[20px] xl:mt-[30px] sm:mt-[20px] md:mt-[30px] lg:mt-[30px] text-[grey]">
          <h2>COUNTRY : Phillippines</h2>
        </div>
        <div className="">
          <h2 className="text-[40px] mt-[30px]  font-bold">Complete Payment</h2>
          <p className="text-[18px] xl:text-[25px] mt-5 text-[grey]">
            Select a payment method. All transactions are safe and secure
          </p>
        </div>
        <div className="flex mt-[90px] flex-wrap justify-between">
          <div className="xl:w-[45%]  md:w-[100%] sm:w-[100%] lg:w-[45%]">
            <div>
              <p className="font-medium text-[16px] xl:text-[20px]">
                Cardholder's Name
              </p>
              <input
                className="w-full mt-2 outline-none  border-b-2 border-[#f7a280] rounded-[5px] bg-[#f2f9fc] p-5"
                type="text"
                placeholder="CARD HOLDER NAME"
              />
            </div>
            <div className="mt-[16px]">
              <p className="font-medium text-[16px] xl:text-[20px]">
                Card Number
              </p>
              <div className="border-b-2 mt-2 flex border-[#f7a280] rounded-[5px] bg-[#f2f9fc] ">
                <img
                  src="/images/mcard.png"
                  className="w-[40px] h-[40px]"
                  alt=""
                />
                <input
                  type="number"
                  className=" p-5 bg-[#f2f9fc] w-full outline-none"
                  placeholder="**** 3456 7890 6473"
                />
              </div>
            </div>
            <div className="mt-[16px] flex xl:flex-wrap   justify-between">
              <div className="m-2">
                <p className="font-medium text-[16px] xl:text-[20px]">Expiry</p>
                <input
                  type="date"
                  className="  w-full outline-none   sm:w-[20px] md:w-full xl:w-[270px] mt-2  border-b-2 border-[#f7a280] rounded-[5px] bg-[#f2f9fc] p-5"
                  placeholder="03 / 25"
                />
              </div>
              <div className="mt-[16px] m-2 ">
                <p className="font-medium text-[16px] xl:text-[20px]">CVC</p>
                <input
                  className="  w-full outline-none  sm:w-[20px] md:w-full xl:w-[270px] xl:mt-2   border-b-2 border-[#f7a280] rounded-[5px] bg-[#f2f9fc] p-5"
                  type="text"
                  placeholder="654"
                  minLength={3}
                  maxLength={3}
                />
              </div>
            </div>
            <div className="mt-[16px]">
              <p className="font-medium text-[16px] xl:text-[20px]">
                Discount Code
              </p>
              <div className=" w-full mt-2 flex justify-between  border-b-2 border-[#f7a280] rounded-[5px] bg-[#f2f9fc]">
                <input
                  type="text"
                  className="transparent-none p-5 w-full outline-none text-[20px] bg-[#f2f9fc]"
                />
                <button className="text-[#fa6e36] p-5 font-bold">Apply</button>
              </div>
            </div>
          </div>

          <div className="bg-[#f2f9fc] mt-[50px] sm:mt-[30px] md:mt-[20px] w-full sm:w-[100%] md-[100%] xl:w-[45%] lg:w-[45%] rounded-[10px] xl:p-5">
            <div className="text-[24px] font-semibold">
              <h2>Price Summary</h2>
            </div>
            <div className="p-[10px] mt-[30px] border-t-2 border-b-2 bg-[white] flex justify-between text-[16px] xl:text-[20px]">
              <span>Visa Price:</span>
              <span>&#8377; 3500</span>
            </div>
            <div className="p-[10px] mt-[20px] border-t-2 border-b-2 bg-[white] flex justify-between text-[16px] xl:text-[20px]">
              <span>Courier charges:</span>
              <span>&#8377; 0</span>
            </div>
            <div className="p-[10px] mt-[20px] border-t-2 border-b-2 bg-[white] flex justify-between text-[16px] xl:text-[20px]">
              <span>Service Fee:</span>
              <img src="" alt="" />
              <span>&#8377; 300</span>
            </div>
            <div className="p-[10px] mt-[20px] border-t-2 border-b-2 bg-[white] flex justify-between text-[16px] xl:text-[20px]">
              <span>GST:</span>
              <span>&#8377; 0</span>
            </div>
            <div className="p-[10px] mt-[20px] border-t-2 border-b-2 bg-[white] flex justify-between text-[16px] xl:text-[20px]">
              <span>Total Price:</span>
              <img src="" alt="" />
              <span>&#8377; 3800</span>
            </div>
          </div>
        </div>

        <div className=" mt-[50px] xl:mt-[100px]">
          <h2 className="text-[17px] xl:text-[25px] font-medium text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h2>
        </div>
        <div className="flex justify-center text-[20px] mt-[50px]">
          <input type="checkbox" className="mr-2 w-4 sm:w-6 md: xl:w-8" />
          <p className="text-[20px] font-medium">
            {" "}
            I Agree to Terms & Conditions
          </p>
        </div>
        <div className=" mt-[20px] xl:mt-[100px] flex justify-center">
          <button className="bg-[#fa6e36] text-white font-bold text-[18px] w-full sm:w-[full] md:w-[full] xl:w-[50%] lg:w-[50%] rounded-[10px] p-4">
            Make Payment
          </button>
        </div>
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
  );
};

export default PaymentPage;
