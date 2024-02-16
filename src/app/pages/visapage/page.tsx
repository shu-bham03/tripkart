"use client";
import FooterPage from "@/app/shared/navbar/footer";
import NavbarPage from "@/app/shared/navbar/page";
import "../../pages/visapage/page1.css";
import Link from "next/link";
import CoHead from "@/app/shared/navbar/cohead";

const VisaPage = () => {
  const items = [
    {
      name: "Australia",
      img: "/images/1665213004-717320astralia20flagpng@2x.png",
    },
    {
      name: "Austria",
      img: "/images/1596005205-47572austriapng@2x.png",
    },
    {
      name: "Bahrain",
      img: "/images/1671258661-931317bahrainpng@2x.png",
    },
    {
      name: "Bangladesh",
      img: "/images/1664717875-230064bangladeshflagpng@2x.png",
    },
    {
      name: "Belgium",
      img: "/images/1671271055-543179belgiumpng@2x.png",
    },
    {
      name: "Bhutan",
      img: "/images/1664719158-105885bhutan20flgpng@2x.png",
    },
    {
      name: "Brazil",
      img: "/images/1595852096-926727brazildownloadpng@2x.png",
    },
    {
      name: "Canada",
      img: "/images/1595853752-428020canadadownloadpng@2x.png",
    },
    {
      name: "Croatia",
      img: "/images/1664033966-987684croatiapng@2x.png",
    },
    {
      name: "Czech",
      img: "/images/1671271728-813732czech20republicjpg@2x.png",
    },
    {
      name: "Denmark",
      img: "/images/1596005383-531254denmarkpng@2x.png",
    },
    {
      name: "Estonia",
      img: "/images/1671272244-468113estoniajpg@2x.png",
    },
    {
      name: "Finland",
      img: "/images/1671272483-559790finlandjpg@2x.png",
    },
    {
      name: "France",
      img: "/images/1665214777-220242franceflagpng@2x.png",
    },
    {
      name: "Georgia",
      img: "/images/1664035443-827277georgiapng@2x.png",
    },
    {
      name: "Germany",
      img: "/images/1671272782-923571germanypng@2x.png",
    },
  ];

  return (
    <div className="container-xl mx-4 sm:mx-4 md:mx-4 lg:mx-16 xl:mx-16">
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
            <Link href="/pages/detailspage">
              {/* <img src="/images/Default.svg" alt="" />
              <p className=" text-[12px] sm:text-[14px] md:text-[14px] lg:text-[18px] xl:text-[18px]">
                Home
              </p> */}
              <img src="/images/tick2.svg" alt="" />
            </Link>

            {/* <span className="mr-[-30px] sm:mr-[-20px] md:mr-[-30px] xl:mr-[-50px] mt-[10px]  xl:ml-[-10px] text-[4px] sm:text-[5px] md:text-[8px] lg:text-[10px] xl:text-[15px]">
              ━━━━━━━━━━━━━━━━━━
            </span>
            <Link href="/pages/detailspage">
              <div className="flex justify-center">
                <img src="/images/empty.svg" alt="" />
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
      <div className="  xl:mt-[20px] flex gap-[20px] justify-between h-auto xl:p-28  h-auto ">
        <div className="card shadow-lg xl:shadow-2xl  rounded-[30px] shadow-dark-200/80  shadow:rounded-full mt-4 w-full xl:w-[680px] sm:w-[1000px] p-5 xl:p-2 border">
          <div className=" flex justify-center">
            <h1 className=" pt-10 text-[17.3px]  font-semibold  xl:text-[25px] ">
              Book on India's Largest Visa Network
            </h1>
          </div>
          <div className=" mt-[20px] xl:mt-[50px] p-10 ">
            <div className=" p-2">
              <p className="text-[18px] text-[#757575]">Select Visa Country</p>
              <select className="mt-3 p-4 xl:text-[20px] font-semibold  w-full  shadow-sm rounded-2">
                <option>Visa Country</option>
                <option>India </option>
                <option>US</option>
                <option>UK</option>
                <option>France</option>
                <option>UAE</option>
              </select>
              <hr />
            </div>
            <div className="mt-6 p-2 ">
              <p className="text-[18px] text-[#757575]"> Select Visa Type</p>
              <select className="mt-3 p-4 xl:text-[20px] font-semibold  w-full">
                <option>Visa Type</option>
                <option>Immigrant Visas</option>
                <option>Business Visa</option>
                <option>Journalist Visa</option>
                <option>Tourist Visa</option>
                <option>Student Visa</option>
                <option>Employment Visa</option>
                <option>Transit Visa</option>
                <option>Film Visa</option>
              </select>
              <hr />
            </div>
            <div className="mt-6 p-2">
              <p className="text-[18px] text-[#757575]">Travellers</p>
              <select
                name=""
                id=""
                className="mt-3 xl:text-[20px] font-semibold w-full text-gray p-4"
              >
                <option>1 Travellers</option>
                <option>2 Travellers</option>
                <option>3 Travellers</option>
                <option>4 Travellers</option>
                <option>5 Travellers</option>
                <option>6 Travellers</option>
                <option>7 Travellers</option>
                <option>8 Travellers</option>
              </select>
              <hr />
            </div>

            <div className="mt-14 p-2 w-full">
              <button className="bg-[#FA6E36] rounded p-4 w-full text-2xl text-white">
                Proceed
              </button>
            </div>
          </div>
        </div>

        <div className="card-img flex justify-center items-center   hidden xl:flex">
          <img src="/images/Vector.svg" alt="" className="w-[700px]" />
        </div>
      </div>

      {/* <div className="container mx-auto auto sm:mx-4 md:mx-4 lg:mx-4 xl:mx-24">
        <div className="">
          <span>Explore Your Destination</span>
        </div>
        <div className="flex xl:flex-wrap  justify-center">
          {items.map((item, index) => (
            <div className="card  w-auto  sm:w-[30px] md:w-[150px] flex justify-center text-center border p-5 m-4">
              <div className="">
                <img src={item.img} alt="" />
                <h4 className="">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
        <div>View All Countries</div>
      </div> */}

      <div className="container-xl mx-4 sm:mx-4 xl:mx-16">
        <div>
          <div className="text-center text-[25px] font-semibold p-2">
            <span className="xl:m-[50px]">━━━━━━━━━━━━━</span> Explore Your
            Destination <span className="xl:m-[50px]">━━━━━━━━━━━━━</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-around  mt-[4%]">
          <div className="flex flex-wrap justify-around ">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-[150px] flex justify-center border rounded-[20px]    xl:w-[15%] p-3 xl:p-4 m-2 xl:m-12 shadow-md xl:shadow-2xl   md:w-[20px] sm:w-[150px] "
              >
                <div className="">
                  <img
                    className="shadow-sm w-[200px] sm:w-[300px] md:w-[200px] lg:w-[700px] xl:w-[100px] h-auto p-3"
                    src={item.img}
                    alt={`Item Photo ${index}`}
                  />
                  <h2 className="text-center font-bold  xl:p-2 xl:text-[25px]">
                    {item.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center text-blue-600">
          <a href="" className="text-[25px] font-bold underline">
            View All Countries
          </a>
        </div>
      </div>

      <div className=" mt-[60px] mx-4  sm:mx-0 md:mx-4 lg:mx-4 xl:mx-16">
        <h2 className="text-[#FA6E36]  text-[23px] sm:text-[30px] md:text-[25px] lg:text-[25px] xl:text-[38px] font-semibold">
          Why book with tripkart.com?
        </h2>
        <div>
          <h3 className="text-[18px] sm:text-[22px] md:text-[25px] lg:text-[25px] xl:text-[32px] font-medium mt-[10px]  xl:mt-[18px]">
            Book Flights, Hotels, Trains, Buses, and Holiday Packages
          </h3>
          <p className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[22px]  mt-[20px] sm:mt-[20px] md:mt-[22px] lg:mt-[25px]  xl:mt-[30px] text-justify">
            We arededicated to providing you with a positive and unforgettable
            experience foryour domestic and internationalpackage at the lowest
            possible price. We keepin touch with our clients while they are on
            vacation via WhatsApp sothatwe can deliver daily schedules,
            accommodate any changes in requirements, andeasily resolve any
            concerns thatmay arise.
          </p>
          <p className="text-[16px]  sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[22px]  mt-[20px] sm:mt-[20px] md:mt-[22px] lg:mt-[25px]  xl:mt-[30px] text-justify">
            Forvisas, we have an experienced team that will not waste your time
            and willimmediately apply for your visa aftercollecting all
            necessary papers. They areso knowledgeable that they will inform you
            of the visa applicationrequirements.
          </p>
          <p className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[22px]  mt-[20px] sm:mt-[20px] md:mt-[22px] lg:mt-[25px]  xl:mt-[30px] text-justify">
            We usea highly secure payment gateway on www.thetripkart.com for our
            customers'transactions. No member of the general public or employee
            of our company willhave access to the payment information of our
            clients. The support team isavailable to assist you with
            unsuccessful transactions or with any questionsregarding payment
            gateways or payments. People can immediately begin reservingtheir
            tickets, and if they need support or assistance, we are available.
          </p>
        </div>

        <div className="mx-4 container-xl  mt-[30px] xl:mt-[100px] sm:mx-4 md:mx-4">
          <table className="text-[16px] xl:text-[22px]">
            <tbody>
              <tr className="  font-semibold  border border-2 border-[#808080] p-[10px]">
                <td className="  border border-2 border-[#808080] p-[10px]">
                  TheTripkart Products
                </td>
                <td className="">Features</td>
              </tr>
              <tr className=" border border-2 border-[#808080] p-[10px]">
                <td className="  border border-2 border-[#808080] p-[10px]">
                  Flights
                </td>
                <td className=" ">
                  Purchase a flight on any domestic or international carrier
                </td>
              </tr>
              <tr className="border border-2 border-[#808080] p-[10px]">
                <td className="border border-2 border-[#808080] p-[10px]">
                  International Airlines
                </td>
                <td>Book a flight from India to any foreign location</td>
              </tr>
              <tr className="border border-2 border-[#808080] p-[10px]">
                <td className="border border-2 border-[#808080] p-[10px]">
                  Domestic Airlines
                </td>
                <td>Purchase economical domestic airline tickets</td>
              </tr>
              <tr className="border border-2 border-[#808080] p-[10px]">
                <td className="border border-2 border-[#808080] p-[10px]">
                  Hotels
                </td>
                <td>
                  Travel to any destination in India and receive special hotel
                  discounts
                </td>
              </tr>
              <tr className="border border-2 border-[#808080] p-[10px]">
                <td className="border border-2 border-[#808080] p-[10px]">
                  Bus Booking
                </td>
                <td>
                  Find state-operated buses, Volvo coaches, etc. between Indian
                  cities
                </td>
              </tr>
              <tr className="border border-2 border-[#808080] p-[10px]">
                <td className="border border-2 border-[#808080] p-[10px]">
                  Holidays
                </td>
                <td>
                  Customized vacation packages that include every attraction in
                  your destination
                </td>
              </tr>
              <tr className="border border-2 border-[#808080] p-[10px]">
                <td className="border border-2 border-[#808080] p-[10px]">
                  International Holiday Packages
                </td>
                <td>
                  Well-researched packages that include all of your
                  destination's top attractions
                </td>
              </tr>
              <tr className="border border-2 border-[#808080] p-[10px]">
                <td className="border border-2 border-[#808080] p-[10px]">
                  India Holiday Packages
                </td>
                <td>
                  From beaches to mountains and deserts, explore India in its
                  entirety
                </td>
              </tr>
              <tr className="border border-2 border-[#808080] p-[10px]">
                <td className="border border-2 border-[#808080] p-[10px]">
                  Outstation Cabs
                </td>
                <td>
                  Taxis for long-distance travel may be reserved without
                  difficulty and at special rates.
                </td>
              </tr>
              <tr className="border border-2 border-[#808080] p-[10px]">
                <td className="border border-2 border-[#808080] p-[10px]">
                  Activities
                </td>
                <td>
                  Activities on Thetripkart range from shopping excursions to
                  heritage walks to adventurous activities to fun activities to
                  sightseeing excursions and much more.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mx-4 mt-[30px]  xl:mt-[100px] sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4">
          <div>
            <h3 className="font-semibold  text-[23px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[28px]">
              Easy Flightsand Hotels
            </h3>
            <p className="text-[16px]  sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[22px] mt-[15px]">
              Lookfor special offers on flights and accommodation. Find
              inexpensive airlinetickets to your desired destination. Choose
              from a large selection of hotels,including budget, mid-range,
              five-star, and boutique establishments. Expandyour options with
              flexi stay, pay directly at the hotel, and assured basicamenities.
              Highly efficient and simple.
            </p>
          </div>
          <div className=" mt-[30px] xl:mt-[60px]">
            <h3 className="text-[23px] font-semibold sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[28px] ">
              Booking FlightSecurely
            </h3>
            <p className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[22px] mt-[15px]">
              Enjoyinsurance against flight cancellations on domestic flights.
              On internationalflight bookings, enjoy fare drop protection,
              same-day cancellation insurance,and hold now, pay later. Excellent
              filters and navigation.
            </p>
          </div>
          <div className="mt-[30px] xl:mt-[60px]">
            <h3 className="text-[23px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[28px] text-[#333] font-semibold">
              CustomisedHolidays
            </h3>
            <p className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[22px] mt-[15px]">
              Plana honeymoon, a weekend break, or an activity involving
              adventure. Choose from avariety of domestic and foreign places
              that are suitable for any type oftraveler. Whether it's flights,
              hotels, a pre-planned itinerary,arrival/departure transportation,
              or sightseeing, you're covered. Attractiveprice and meticulously
              planned trips.
            </p>
          </div>
          <div className=" mt-[30px] xl:mt-[60px]">
            <h3 className="text-[23px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[28px] text-[#333] font-semibold">
              Best Combos
            </h3>
            <p className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[22px] mt-[15px]">
              Yourone-stop shop for the finest combinations of flights, hotels,
              activities, andvacation packages, as well as train and bus
              tickets. TheTripKart's robust searchengine enables pinpoint
              accuracy.
            </p>
          </div>
          <div className=" mt-[30px] xl:mt-[60px]">
            <h3 className="text-[23px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[28px] text-[#333] font-semibold">
              Best Deals forEvery Season
            </h3>
            <p className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[22px] mt-[15px]">
              Withthe start of the holiday season, an upcoming long weekend, or
              a declaredholiday, you can anticipate an enticing discount on
              flights, hotels, andvacations. You are in for a great deal, from
              cash-back incentives topromotional code reductions.
            </p>
          </div>
        </div>
      </div>

      <div className="foot">
        <FooterPage />
      </div>
    </div>
  );
};

export default VisaPage;
