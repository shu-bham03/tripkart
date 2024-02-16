import CoHead from "@/app/shared/navbar/cohead";
import FooterPage from "@/app/shared/navbar/footer";
import NavbarPage from "@/app/shared/navbar/page";
import Link from "next/link";

const DetailsPage = () => {
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
        <div className="container-xl flex justify-center items-center   mx-4 sm:mx-4 md:mx-16 lg:mx-24 xl:mx-24">
          <div className="flex justify-center text-center">
            <Link href="/pages/paymentpage">
              <img src="/images/tick1.svg" alt="" />
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
              <img src="/images/empty.svg" alt="" />
              <p className=" text-[12px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px]">
                Payment
              </p>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="bg-[#F3F9FC] xl:p-20 flex flex-wrap justify-between mt-[50px] mx-4 sm:mx-4 md:mx-16 lg:mx-16 xl:mx-16">
        <div className=" p-2 xl:p-2 w-full md:w-1/2 lg:w-1/2">
          <div className="text-[18px] xl:text-[22px]">
            <h2 className="font-semibold">Visa Type</h2>
            {/* <input
              type="text"
              placeholder="Select Stay Duration"
              className="border-[1.8px] border-black p-5 mt-2 rounded-lg w-full"
            /> */}
            <select className="w-full border-[1.8px] text-[#757575] border-black p-3 mt-2 rounded-lg">
              <option>Select Stay Duration</option>
              <option>1 Week</option>
              <option>1 Month</option>
              <option>6 Month</option>
              <option>1 Year</option>
            </select>
          </div>
          <div className="mt-20 text-[18px] xl:text-[22px]">
            <h2 className="font-semibold">Contact Information</h2>
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" mt-3 border-[1.8px] border-black p-3 rounded-lg w-full"
            />
          </div>
          <div className="flex mt-10">
            <input
              type="text"
              value=""
              placeholder="+91"
              name=""
              id=""
              className="border-[1.8px] rounded-lg border-black w-[70px] text-[20px] xl:w-20 p-3  "
            />
            <input
              type="text"
              placeholder="Enter Mobile No"
              name=""
              id=""
              className="flex-grow border-[1.8px] rounded-lg border-black p-3 text-[16px] ml-3"
            />
          </div>
        </div>

        <div className=" text-[18px] xl:text-[25px] mt-10 p-1 mx-4 leading-10 md:mx-0 lg:mx-0 xl:mx-0 md:w-1/2 lg:w-1/2 xl:w-1/3">
          <p className="font-semibold">
            &#8377; 3800
            <br />
            Per Traveller
          </p>
          <p className="mt-[20px]">
            <span>Processing time:</span> 10 to 15 Working Days*
          </p>
          <p>
            <span className="font-semibold">Stay period:</span> Up to 59 Days*.
          </p>
          <p>
            <span className="font-semibold">Validity (Business Visa):</span> 6
            Months/1 Year*
          </p>
          <p>
            <span className="font-semibold">Entry:</span> Single/Multiple
          </p>
          <p>
            <span className="font-semibold">Purpose:</span> Tourist/Business
          </p>
          <p>
            <span className="font-semibold">Validity:</span> 30 Days
          </p>
        </div>
      </div>

      <div
        className="bg-[#F3F9FC] 
       mt-[80px] p-2 sm-p-2 xl:p-20 mx-4 sm:mx-4 md:mx-16 lg:mx-16 xl:mx-16"
      >
        <div className="text-[26px] sm:text-[26px] md:text-[28px] lg:text-[28px] xl:text-[34px] font-bold">
          Traveller Names
        </div>

        <form className="mt-[50px] ">
          <div className="flex flex-wrap justify-between   ">
            <div className="w-full xl:w-[40%]  md:w-1/2    ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm sm:text-sm md:text-md lg:text-lg xl:text-[22px] font-semibold mb-2"
                htmlFor="grid-first-name"
              >
                Traveller First Name
              </label>
              <input
                className=" mt-4 appearance-none block w-full  text-gray-700 border  rounded-lg p-4  focus:outline-none focus:bg-white placeholder:text-[22px]"
                id="grid-first-name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-full xl:w-[40%]  md:w-1/2    ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm sm:text-sm md:text-md lg:text-lg xl:text-[22px] font-semibold mb-2"
                htmlFor="grid-first-name"
              >
                Traveller Last Name
              </label>
              <input
                className=" mt-4 appearance-none block w-full  text-gray-700 border  rounded-lg p-4  focus:outline-none focus:bg-white placeholder:text-[22px]"
                id="grid-first-name"
                type="text"
                placeholder=" LastName"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between mt-8   ">
            <div className="w-full xl:w-[40%]  md:w-1/2    ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm sm:text-sm md:text-md lg:text-lg xl:text-[22px] font-semibold mb-2"
                htmlFor="grid-first-name"
              >
                Traveller Age
              </label>
              <input
                className=" mt-4 appearance-none block w-full  text-gray-700 border  rounded-lg p-4  focus:outline-none focus:bg-white placeholder:text-[22px]"
                id="grid-first-name"
                type="text"
                placeholder=" Age"
              />
            </div>
            <div className="w-full xl:w-[40%] xl:p-2 md:w-3/2">
              <label
                className="block uppercase tracking-wide text-gray-700text-sm sm:text-sm md:text-md lg:text-lg xl:text-[22px] font-semibold mb-2"
                htmlFor="grid-last-name"
              >
                Traveller Gender
              </label>
              <select
                name=""
                id=""
                className="w-full text-[22px] text-gray-700 mt-4 appearance-none block w-full  text-gray-700 border border-gray-200 rounded-lg text-[18px] p-4 rounded-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Select Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
              </select>
            </div>
          </div>
        </form>

        <div className=" mt-[30px] xl:mt-[80px] flex justify-between   flex-wrap">
          <div className="xl:w-[35%]">
            <h2 className="text-[32px]  font-semibold">Upload Decuments</h2>
            <div>
              <h2 className="text-[22px] mt-[40px]  font-medium">
                Traveller Passport Front
              </h2>
              <input
                type="file"
                name=""
                id=""
                className="border mt-3 rounded xl:p-4  bg-white w-[70%] sm:w-[70%] md:w-[70%] xl:w-full lg:w-full"
              />
            </div>
            <div>
              <h2 className="text-[22px] mt-[40px] font-medium">
                Traveller Passport Back
              </h2>
              <input
                type="file"
                className=" mt-2 rounded border xl:p-4 bg-white w-[70%] sm:w-[70%] md:w-[70%] xl:w-full lg:w-full"
                name=""
                id=""
              />
            </div>
            <div>
              <h2 className="text-[22px] mt-[40px]  font-medium">
                Traveller Photograph
              </h2>
              <input
                type="file"
                name=""
                id=""
                className="mt-2 border rounded xl:p-4 bg-white w-[70%] sm:w-[70%] md:w-[70%] xl:w-full lg:w-full"
              />
            </div>
          </div>
          <div className="border  p-8 bg-[white] shadow-xl xl:w-[45%] rounded-[10px] mt-[20px] md:mt-[20px]">
            <h2 className="font-semibold text-center text-[25px] tracking-7">
              STEPS TO GET VISA
            </h2>
            <div className="p-[20px]">
              <div className="flex justify-between mt-[20px] mt-[40px]">
                <div className="mr-[25px]">
                  <img
                    src="/images/upload.png"
                    className="w-[200px] sm:w-[200px] md:w-[200px] xl:w-[80px] lg:w-[80px]"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[22px]">
                    Upload Documents
                  </h3>
                  <p>
                    Upload soft copy of below mentioned documents and get your
                    visa
                  </p>
                </div>
              </div>
              <div className="flex mt-[30px]">
                <div className="mr-[25px]">
                  <img
                    src="/images/pay.png"
                    alt=""
                    className="w-[200px] sm:w-[200px] md:w-[200px] xl:w-[80px] lg:w-[80px]"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[20px]">Pay Online</h3>
                  <p>Complete your purchase using a paymode of your choice.</p>
                </div>
              </div>
              <div className="flex mt-[30px]">
                <div className="mr-[25px]">
                  <img
                    src="/images/getvisa.png"
                    alt=""
                    className="w-[200px] sm:w-[200px] md:w-[200px] xl:w-[80px] lg:w-[80px]"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[20px]">Get Your Visa</h3>
                  <p>Keep track of your visa status and get visa on mail.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[white] shadow-lg border rounded-[10px] mt-[50px] sm:mt-[50px]   mx-0 sm:mx-2 md:mx-4 lg:mx-0 xl:mx-0 ">
          <div className="">
            <h2 className="text-[25px] font-medium p-2">Price Summary</h2>
            <hr />
            <div className="flex justify-between text-[22px] pl-5 p-2 pr-5">
              <p>Visa Price:</p>
              <p>&#8377; 3500</p>
            </div>
            <hr />
            <div className="flex justify-between text-[22px] pl-5 p-2 pr-5">
              <p>Courier changes:</p>
              <p>&#8377; 0</p>
            </div>
            <hr />
            <div className="flex justify-between text-[22px] pl-5 p-2 pr-5">
              <p>Service Fee:</p>
              <p>&#8377; 300</p>
            </div>
            <hr />
            <div className="flex justify-between text-[22px] pl-5 p-2 pr-5">
              <p>GST:</p>
              <p>&#8377; 0</p>
            </div>
            <hr />
            <div className="flex justify-between text-[22px] pl-5 p-2 pr-5">
              <p>Total Price:</p>
              <p>&#8377; 3800</p>
            </div>
            <button className="bg-[#FA6E36] text-white text-[22px] rounded-[10px] font-semibold w-full p-4">
              Proceed To Payment
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-[#F3F9FC] 
       mt-[80px] p-2 sm-p-2 xl:p-10 mx-4 sm:mx-4 md:mx-16 lg:mx-16 xl:mx-16"
      >
        <div className="mt-10">
          <div className="p-6  mx-4 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4">
            <h2 className="text-[25px] font-medium">List of Documents</h2>
            <div className="mt-[30px] p-3">
              <ul>
                <li className="text-[18px]">
                  • Original Passport with at least 6 months validity and a
                  minimum of 3 blank pages
                </li>
                <li className="mt-[10px] text-[18px]">
                  • 2 recent color photographs.
                </li>
                <li className="mt-[10px] text-[18px]">
                  • Personal Covering letter (For Employed-Plain paper/
                  Self-Employed-Letterhead)
                </li>
                <li className="mt-[10px] text-[18px]">
                  • Original updated Bank Statements with sufficient bank
                  balance (last 6 months)
                </li>
                <li className="mt-[10px] text-[18px]">
                  • Confirmed return flight ticket
                </li>
                <li className="mt-[10px] text-[18px]">• Hotel reservation</li>
                <li className="mt-[10px] text-[18px]">
                  • Supporting Financial Documents such as Fixed Deposits,
                  Property Investments, Other Investments, etc. (Optional)
                </li>
              </ul>
              <p className="bg-[#ffff00] mt-[50px] p-[7px] font-medium text-center">
                Kindly note: The Govt is very strict on the photograph
                requirement; please ensure that your photos are as per the
                specifications.
              </p>
            </div>
          </div>
          <div className="mt-[30px]  ">
            <div className="mx-0 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4 xl:p-5">
              <h2 className="text-[26px] font-semibold">
                Supporting documents as per your occupation, and type of visit:
              </h2>
              <div className="">
                <h3 className="bg-[#eeeeee]  text-[22px] p-[3px] mt-[40px] font-bold xl:pl-[30px]">
                  If Employed:
                </h3>
                <p className="bg-[white] p-2 mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-0 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] xl:pr-[50px] xl:pl-[30px]">
                  Original Leave sanctioned certificate with company seal and
                  signature
                </p>
              </div>
              <div>
                <h3 className="bg-[#eeeeee]  p-[3px] mt-[20px] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold xl:pl-[30px]">
                  If Self-Employed:
                </h3>
                <p className="bg-[white] xl:p-2 mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-0 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] xl:pr-[50px] xl:pl-[30px]">
                  Business Registration License / MOA / Partnership deed,
                  Company’s updated bank statement for the last 6 months.
                </p>
              </div>
              <div>
                <h3 className="bg-[#eeeeee]  p-[3px] mt-[20px] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold xl:pl-[30px]">
                  If Retired:
                </h3>
                <p className="bg-[white] xl:p-2 mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-0 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] xl:pr-[50px] xl:pl-[30px]">
                  Proof of retirement like pension book, statement, etc.
                </p>
              </div>
              <div>
                <h3 className="bg-[#eeeeee]  ]p-[3px] mt-[20px] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold xl:pl-[30px]">
                  If Student:
                </h3>
                <p className="bg-[white] xl:p-2 mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-0 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] xl:pr-[50px] xl:pl-[30px]">
                  School / College / Institute ID Card, Bonafide certificate.
                </p>
              </div>
              <div>
                <h3 className="bg-[#eeeeee] p-[3px] mt-[20px] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold xl:pl-[30px]">
                  If Minor:
                </h3>
                <p className="bg-[white] xl:p-2 mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-0 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] xl:pr-[50px] xl:pl-[30px]">
                  Birth Certificate; No Objection Certificate from the parents /
                  non-accompanying parent on Rs 100/- stamp paper; ID proof of
                  parents like passport or PAN card.
                </p>
              </div>
              <div>
                <h3 className="bg-[#eeeeee]  p-[3px] mt-[20px] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold xl:pl-[30px]">
                  If Visiting a friend or relative:
                </h3>
                <p className="bg-[white] xl:p-2 mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-0 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] xl:pr-[50px] xl:pl-[30px]">
                  Original Invitation letter; Inviter’s ID proof like Passport,
                  valid Japan visa/Resident Permit; Address proof like any
                  Electricity bill, any Utility bill, etc.
                </p>
              </div>
              <div>
                <h3 className="bg-[#eeeeee]  p-[3px] mt-[20px] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold xl:pl-[30px]">
                  If Sponsored:
                </h3>
                <p className="bg-[white] xl:p-2 mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-0 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] xl:pr-[50px] xl:pl-[30px]">
                  Sponsorship letter; Sponsor’s national ID proof like Passport,
                  PAN card, or Resident permit; Updated bank statement for last
                  6 months
                </p>
              </div>
              <div>
                <h3 className="bg-[#eeeeee]  p-[3px] mt-[20px] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold xl:pl-[30px]">
                  For Business Visa:
                </h3>
                <p className="bg-[white] xl:p-2 mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-0 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] xl:pr-[50px] xl:pl-[30px]">
                  Original Invitation letter from host Company stating the
                  purpose of the trip, business details, etc; Original Letter of
                  Guarantee & a certified copy of the incorporation register or
                  an overview of the company/organization. (If an inviting
                  company is bearing the expenses); Covering letter from Indian
                  company on company letterhead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
  );
};

export default DetailsPage;
