const FooterPage = () => {
  return (
    <div className=" mx-4 sm:mx-4 md:mx-4 lg:mx-0 xl:mx-0 mt-[100px] mb-[50px]">
      <div className="flex justify-between flex-wrap">
        <div>
          <div className="">
            <div className="font-semibold text-center">CUSTOMER CARE 24/7</div>
            <div className="flex justify-center mt-[30px] ">
              <div className="p-3">
                <img
                  src="/images/call.png"
                  alt="hello"
                  className="w-[150px] sm:w-[150px] md:w-[100px] xl:w-[60px]"
                />
              </div>
              <div className="">
                <p>
                  Got Questions ? <br /> Whatsapp
                </p>

                <p className="mt-4 text-orange-500">+91 8808869169</p>
              </div>
            </div>
          </div>
          <div className=" ml-20 text-justify mt-8 mx-4 ">
            <div className="font-semibold ">Contact Info</div>
            <div className="mt-[10px]">
              <h2>
                4th Floor, Office no 408, <br /> Kubera Towers, Himayat Nagar,
                <br />
                Hyderabad Telangana-500027
              </h2>
            </div>
          </div>
        </div>
        <div className="p-2 sm:p-4 md:p-1 lg:p-1 xl:p-1">
          <div className="font-semibold">Company</div>
          <div className="mt-[30px]">
            <ol>
              <li className="mb-[10px]">About us</li>
              <li className="mb-[10px]">Terms of Use</li>
              <li className="mb-[10px]">Privacy Policy</li>
              <li>Give Us Feedbacks</li>
            </ol>
          </div>
        </div>
        <div className="p-2 sm:p-4 md:p-1 lg:p-1 xl:p-1">
          <div className=" font-semibold">Other Services</div>
          <div className="mt-[30px]">
            <ol>
              <li className="mb-[10px]">Investor Relations</li>
              <li className="mb-[10px]">Rewards Program</li>
              <li className="mb-[10px]">PointPLUS</li>
              <li className="mb-[10px]">Patners</li>
              <li>List My Hostel</li>
            </ol>
          </div>
        </div>

        <div className="">
          <h1 className="font-semibold">Support</h1>
          <div className="mt-[30px]">
            <ol>
              <li className="mb-[10px]">Account</li>
              <li className="mb-[10px]">Legal</li>
              <li className="mb-[10px]">Contact</li>
              <li className="mb-[10px]">Affiliate Program</li>
              <li className="mb-[10px]">Privacy Policy</li>
            </ol>
          </div>
        </div>

        <div className=" ">
          <div className="font-semibold">Mailing List</div>
          <div className="mt-[30px]">
            <p>
              Sign up for our mailing list to get latest <br /> updates and
              offers.
            </p>
            <div className="mt-[10px]">
              <input
                type="text"
                placeholder="Your Email"
                className="w-[150px] border border-[4] p-[10px] m-[10px]"
              />
              <button className="border p-[10px] bg-[#1D508D] text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[10px] ml-[80px] mb-[20px]  mt-[70px]">
        <img src="/images/facebook.png" alt="" className="w-[50px]" />
        <img src="/images/tweet.png" alt="" className="w-[50px]" />
        <img src="/images/insta.png" alt="" className="w-[50px]" />
        <img src="/images/linked.png" alt="" className="w-[50px]" />
      </div>
      <hr />
      <div className="mt-[30px] ml-[50px]">
        <div className="flex ">
          <img
            src="/images/link--thetripkartpng@2x.png"
            alt=""
            className="w-[150px]"
          />
        </div>
        <div className="flex justify-between mt-[20px] ml-[20px]">
          <p className="text-[#88929d]">
            © 2023 TheTripKart. All rights reserved.
          </p>
          <p>
            Designed and Developed by{" "}
            <span className="text-[#297cbb]">INSPIRING WAVE</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
