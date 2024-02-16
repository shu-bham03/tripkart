import Link from "next/link";
import "./page2.css";
import "../../../app/globals.css";

const DetailsPage = () => {
  return (
    <div>
      <div className="visaApplicationPage">
        <div className="frameParent">
          <div className="frameGroup">
            <div className="frameContainer">
              <div className="heading4VisaTypeParent">
                <div className="heading4">Visa Type</div>
                {/* <div className="labelSelectStayDurationParent">
                  <div className="labelSelect">Select Stay Duration</div>
                  <img className="frameChild" alt="" src="/vector-67.svg" />
                </div> */}
                <select className="labelSelectStayDurationParent" name="" id="">
                  <option>Choose Type</option>
                  <option>Immigrant Visas</option>
                  <option>Business Visa</option>
                  <option>Journalist Visa</option>
                  <option>Tourist Visa</option>
                  <option>Student Visa</option>
                  <option>Employment Visa</option>
                  <option>Transit Visa</option>
                  <option>Film Visa</option>
                </select>
              </div>
              <div className="heading4VisaTypeParent">
                <div className="heading41">Contact Information</div>
                <div className="frameDiv">
                  <div className="labelSelectStayDurationWrapper">
                    {/* <div className="labelSelect">Enter Your Email</div> */}
                    <input
                      className="labelSelect"
                      type="text"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="frameParent1">
                    <div className="labelSelectStayDurationGroup">
                      <div>+91</div>
                      <img className="frameItem" alt="" src="/vector-67.svg" />
                    </div>
                    <div className="labelSelectStayDurationWrapper">
                      <input
                        type="number"
                        className="labelSelect"
                        placeholder="Enter Mobile No"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frameParent2">
              <div className="frameParent3">
                <div className="vectorParent">
                  <img className="vectorIcon" alt="" src="/vector.svg" />
                  <div className="strongSample"> 3800</div>
                </div>
                <div className="smallFor">Per Traveller</div>
              </div>
              <div className="processingTime10To15WorkParent">
                <div className="processingTime10">
                  Processing time: 10 to 15 Working Days*
                </div>
                <div className="stayPeriodUpContainer">
                  <span className="stayPeriodUpContainer1">
                    <p className="stayPeriodUpTo59Days">
                      <b className="stayPeriod">{`Stay period: `}"</b>
                      <span>Up to 59 Days*.</span>
                    </p>
                    <p className="stayPeriodUpTo59Days">
                      <b>Validity (Business Visa)</b>
                      <span className="stayPeriod">: 6 Months/1 Year*</span>
                    </p>
                    <p className="stayPeriodUpTo59Days">
                      <b className="stayPeriod">Entry:</b>
                      <span> Single/Multiple</span>
                    </p>
                    <p className="stayPeriodUpTo59Days">
                      <b className="stayPeriod">Purpose:</b>
                      <span> Tourist/Business</span>
                    </p>
                    <p className="stayPeriodUpTo59Days">
                      <b>Validity:</b>
                      <span className="stayPeriod"> 30 Days</span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangleParent">
            <div className="groupChild" />
            <div className="frameParent4">
              <div className="frameParent5">
                <div className="frameWrapper">
                  <div className="heading4TravellerNamesWrapper">
                    <div className="heading42">Traveller Names</div>
                  </div>
                </div>
                <div className="frameParent6">
                  <div className="divcolLg4Parent">
                    <div className="divcolLg4">
                      <div className="labelTraveller1FirstNameParent">
                        <div className="labelTraveller">
                          Traveller First Name
                        </div>
                        <div className="input">
                          <div className="firstName">First Name</div>
                        </div>
                      </div>
                    </div>
                    <div className="divcolLg4">
                      <div className="labelTraveller1FirstNameGroup">
                        <div className="labelTraveller">
                          Traveller Last Name
                        </div>
                        <div className="input">
                          <div className="firstName">Last Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divcolLg4Group">
                    <div className="divcolLg42">
                      <div className="labelTraveller1FirstNameParent">
                        <div className="labelTraveller">Traveller Age</div>
                        <div className="input2">
                          <div className="age">Age</div>
                        </div>
                      </div>
                    </div>
                    <div className="divcolLg4">
                      <div className="labelTraveller1FirstNameParent">
                        <div className="labelTraveller">Traveller Gender</div>
                        <div className="input">
                          <div className="selectGender">Select Gender</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frameParent7">
                <div className="frameParent5">
                  <div className="heading4TravellerNamesWrapper">
                    <div className="heading43">Upload Documents</div>
                  </div>
                  <div className="frameParent9">
                    <div className="labelTraveller1PassportFParent">
                      <div className="labelTraveller4">
                        Traveller Passport Front
                      </div>
                      <div className="input4">
                        <div className="inputParent">
                          <div className="input5">
                            <div className="chooseFile">Choose File</div>
                          </div>
                          <div className="noFileChosen">No file chosen</div>
                        </div>
                      </div>
                    </div>
                    <div className="labelTraveller1PassportFParent">
                      <div className="labelTraveller4">
                        Traveller Passport Back
                      </div>
                      <div className="input4">
                        <div className="inputParent">
                          <div className="input5">
                            <div className="chooseFile">Choose File</div>
                          </div>
                          <div className="noFileChosen">No file chosen</div>
                        </div>
                      </div>
                    </div>
                    <div className="labelTraveller1PassportFParent">
                      <div className="labelTraveller4">
                        Traveller Photograph
                      </div>
                      <div className="input4">
                        <div className="inputParent">
                          <div className="input5">
                            <div className="chooseFile">Choose File</div>
                          </div>
                          <div className="noFileChosen">No file chosen</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divflightPay">
                  <div className="heading5">STEPS TO GET VISA</div>
                  <div className="frameParent10">
                    <div className="listItemUploadpngParent">
                      <img
                        className="listItemUploadpng"
                        alt=""
                        src="/list--item--uploadpng@2x.png"
                      />
                      <div className="listItemUploadDocumentsParent">
                        <b className="listItem">Upload Documents</b>
                        <div className="listItemContainer">
                          <span className="stayPeriodUpContainer1">
                            <p className="stayPeriodUpTo59Days">
                              Upload soft copy of below
                            </p>
                            <p className="stayPeriodUpTo59Days">
                              mentioned documents and get
                            </p>
                            <p className="stayPeriodUpTo59Days">your visa</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="listItemPaypngParent">
                      <img
                        className="listItemUploadpng"
                        alt=""
                        src="/list--item--paypng@2x.png"
                      />
                      <div className="listItemUploadDocumentsParent">
                        <b className="listItem1">Pay Online</b>
                        <div className="listItemContainer2">
                          <span className="stayPeriodUpContainer1">
                            <p className="stayPeriodUpTo59Days">
                              Complete your purchase using a
                            </p>
                            <p className="stayPeriodUpTo59Days">
                              paymode of your choice.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="listItemGetvisapngParent">
                      <img
                        className="listItemUploadpng"
                        alt=""
                        src="/list--item--getvisapng@2x.png"
                      />
                      <div className="listItemUploadDocumentsParent">
                        <b className="listItem2">Get Your Visa</b>
                        <div className="listItemContainer4">
                          <span className="stayPeriodUpContainer1">
                            <p className="stayPeriodUpTo59Days">
                              Keep track of your visa status and
                            </p>
                            <p className="stayPeriodUpTo59Days">
                              get visa on mail.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button">
              <b className="proceedToPayment">Proceed To Payment</b>
            </div>
            <div className="divflightPay1">
              <div className="heading51">Price Summary</div>
              <div className="listItem3">
                <div className="visaPrice">Visa Price:</div>
                <div className="bfloatRight">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="vectorGroup">
                    <img className="vectorIcon1" alt="" src="/vector.svg" />
                    <div className="div">3500</div>
                  </div>
                </div>
              </div>
              <div className="listItem4">
                <div className="courierCharges">Courier charges:</div>
                <div className="bfloatRight1">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="vectorContainer">
                    <img className="vectorIcon1" alt="" src="/vector.svg" />
                    <div className="div">0</div>
                  </div>
                </div>
              </div>
              <div className="listItem5">
                <div className="serviceFee">Service Fee:</div>
                <div className="bfloatRight2">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="vectorParent1">
                    <img className="vectorIcon1" alt="" src="/vector.svg" />
                    <div className="div">300</div>
                  </div>
                </div>
              </div>
              <div className="listItem6">
                <div className="gst">GST:</div>
                <div className="bfloatRight1">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="vectorParent2">
                    <img className="vectorIcon1" alt="" src="/vector.svg" />
                    <div className="div">0</div>
                  </div>
                </div>
              </div>
              <div className="listItem7">
                <div className="totalPrice">Total Price :</div>
                <div className="bfloatRight4">
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="vectorParent3">
                    <img className="vectorIcon1" alt="" src="/vector.svg" />
                    <div className="div">3800</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangleGroup">
            <div className="groupItem" />
            <div className="groupDiv">
              <div className="heading4ListOfDocumentsParent">
                <div className="heading44">List of Documents</div>
                <div className="orderedListItemOriginalParent">
                  <div className="orderedListContainer">
                    <span className="stayPeriodUpContainer1">
                      <ul className="originalPassportWithAtLeas">
                        <li>
                          Original Passport with at least 6 months validity and
                          a minimum of 3 blank pages
                        </li>
                      </ul>
                    </span>
                  </div>
                  <div className="orderedListContainer">
                    <span className="stayPeriodUpContainer1">
                      <ul className="originalPassportWithAtLeas">
                        <li>2 recent color photographs. </li>
                      </ul>
                    </span>
                  </div>
                  <div className="orderedListContainer">
                    <span className="stayPeriodUpContainer1">
                      <ul className="originalPassportWithAtLeas">
                        <li>
                          Personal Covering letter (For Employed-Plain paper/
                          Self-Employed-Letterhead)
                        </li>
                      </ul>
                    </span>
                  </div>
                  <div className="orderedListContainer">
                    <span className="stayPeriodUpContainer1">
                      <ul className="originalPassportWithAtLeas">
                        <li>
                          Original updated Bank Statements with sufficient bank
                          balance (last 6 months)
                        </li>
                      </ul>
                    </span>
                  </div>
                  <div className="orderedListContainer">
                    <span className="stayPeriodUpContainer1">
                      <ul className="originalPassportWithAtLeas">
                        <li>Confirmed return flight ticket</li>
                      </ul>
                    </span>
                  </div>
                  <div className="orderedListContainer">
                    <span className="stayPeriodUpContainer1">
                      <ul className="originalPassportWithAtLeas">
                        <li>Hotel reservation</li>
                      </ul>
                    </span>
                  </div>
                  <div className="orderedListContainer12">
                    <span className="stayPeriodUpContainer1">
                      <ul className="originalPassportWithAtLeas">
                        <li>
                          Supporting Financial Documents such as Fixed Deposits,
                          Property Investments, Other Investments, etc.
                          (Optional)
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
              <div className="kindlyNoteTheGovtIsVeryWrapper">
                <div className="kindlyNoteThe">
                  Kindly note: The Govt is very strict on the photograph
                  requirement; please ensure that your photos are as per the
                  specifications.
                </div>
              </div>
            </div>
            <div className="heading4SupportingDocumenParent">
              <div className="heading45">
                Supporting documents as per your occupation, and type of visit:
              </div>
              <div className="frameParent11">
                <div className="heading4TravellerNamesWrapper">
                  <div className="ifEmployedWrapper">
                    <b className="ifEmployed">If Employed:</b>
                  </div>
                  <div className="originalLeaveSanctionedCertWrapper">
                    <div className="originalLeaveSanctioned">
                      Original Leave sanctioned certificate with company seal
                      and signature
                    </div>
                  </div>
                </div>
                <div className="heading4TravellerNamesWrapper">
                  <div className="ifEmployedWrapper">
                    <b className="ifEmployed">If Self-Employed:</b>
                  </div>
                  <div className="originalLeaveSanctionedCertWrapper">
                    <div className="businessRegistrationLicenseContainer">
                      <span className="stayPeriodUpContainer1">
                        <p className="stayPeriodUpTo59Days">
                          Business Registration License / MOA / Partnership
                          deed,
                        </p>
                        <p className="stayPeriodUpTo59Days">
                          Company’s updated bank statement for the last 6
                          months.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="heading4TravellerNamesWrapper">
                  <div className="ifEmployedWrapper">
                    <b className="ifEmployed">If Retired:</b>
                  </div>
                  <div className="originalLeaveSanctionedCertWrapper">
                    <div className="businessRegistrationLicenseContainer">
                      Proof of retirement like pension book, statement, etc.
                    </div>
                  </div>
                </div>
                <div className="heading4TravellerNamesWrapper">
                  <div className="ifEmployedWrapper">
                    <b className="ifEmployed">If Student:</b>
                  </div>
                  <div className="originalLeaveSanctionedCertWrapper">
                    <div className="schoolCollegeContainer">
                      <span className="stayPeriodUpContainer1">
                        <p className="stayPeriodUpTo59Days">
                          School / College / Institute ID Card,
                        </p>
                        <p className="stayPeriodUpTo59Days">
                          Bonafide certificate.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="heading4TravellerNamesWrapper">
                  <div className="ifEmployedWrapper">
                    <b className="ifEmployed">If Minor:</b>
                  </div>
                  <div className="originalLeaveSanctionedCertWrapper">
                    <div className="businessRegistrationLicenseContainer">
                      <span className="stayPeriodUpContainer1">
                        <p className="stayPeriodUpTo59Days">
                          Birth Certificate;
                        </p>
                        <p className="stayPeriodUpTo59Days">
                          No Objection Certificate from the parents /
                          non-accompanying parent on Rs 100/- stamp paper;
                        </p>
                        <p className="stayPeriodUpTo59Days">
                          ID proof of parents like passport or PAN card.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="heading4TravellerNamesWrapper">
                  <div className="ifEmployedWrapper">
                    <b className="ifEmployed">
                      If Visiting a friend or relative:
                    </b>
                  </div>
                  <div className="originalLeaveSanctionedCertWrapper">
                    <div className="businessRegistrationLicenseContainer">
                      <span className="stayPeriodUpContainer1">
                        <p className="stayPeriodUpTo59Days">
                          Original Invitation letter;
                        </p>
                        <p className="stayPeriodUpTo59Days">
                          Inviter’s ID proof like Passport, valid Japan
                          visa/Resident Permit;
                        </p>
                        <p className="stayPeriodUpTo59Days">
                          Address proof like any Electricity bill, any Utility
                          bill, etc.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="heading4TravellerNamesWrapper">
                  <div className="ifEmployedWrapper">
                    <b className="ifEmployed">If Sponsored:</b>
                  </div>
                  <div className="originalLeaveSanctionedCertWrapper">
                    <div className="businessRegistrationLicenseContainer">
                      <span className="stayPeriodUpContainer1">
                        <p className="stayPeriodUpTo59Days">
                          Sponsorship letter;
                        </p>
                        <p className="stayPeriodUpTo59Days">
                          Sponsor’s national ID proof like Passport, PAN card,
                          or Resident permit;
                        </p>
                        <p className="stayPeriodUpTo59Days">
                          Updated bank statement for last 6 months
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="heading4TravellerNamesWrapper">
                  <div className="ifEmployedWrapper">
                    <b className="ifEmployed">For Business Visa:</b>
                  </div>
                  <div className="originalLeaveSanctionedCertWrapper">
                    <div className="originalInvitationLetterContainer2">
                      <span className="stayPeriodUpContainer1">
                        <p className="stayPeriodUpTo59Days">
                          Original Invitation letter from host Company stating
                          the purpose of the trip, business details, etc;
                        </p>
                        <p className="stayPeriodUpTo59Days">
                          `Original Letter of Guarantee & a certified copy of
                          the incorporation register or an overview of the
                          company/organization. (If an inviting company is
                          bearing the`"
                        </p>
                        <p className="stayPeriodUpTo59Days">expenses);</p>
                        <p className="stayPeriodUpTo59Days">
                          Covering letter from Indian company on company
                          letterhead.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="groupParent">
            <div className="listItemLinkParent">
              <img
                className="listItemLink"
                alt=""
                src="/list--item--link.svg"
              />
              <img
                className="listItemLink1"
                alt=""
                src="/list--item--link.svg"
              />
              <img
                className="listItemLink2"
                alt=""
                src="/list--item--link.svg"
              />
              <img
                className="listItemLink3"
                alt=""
                src="/list--item--link.svg"
              />
              <div className="heading46">CUSTOMER CARE 24/7</div>
              <img className="linkIcon" alt="" src="/link.svg" />
              <div className="linkGotContainer">
                <span className="stayPeriodUpContainer1">
                  <p className="stayPeriodUpTo59Days">Got Questions ?</p>
                  <p className="stayPeriodUpTo59Days">Whats App</p>
                </span>
              </div>
              <div className="linkSmall">+91 8808869169</div>
              <div className="heading47">Contact Info</div>
              <div className="address4thContainer">
                <span className="stayPeriodUpContainer1">
                  <p className="stayPeriodUpTo59Days">
                    4th Floor, Office no 408, Kubera
                  </p>
                  <p className="stayPeriodUpTo59Days">
                    Towers, Himayat Nagar, Hyderabad
                  </p>
                  <p className="stayPeriodUpTo59Days">Telangana-500027</p>
                </span>
              </div>
            </div>
            <div className="heading4CompanyParent">
              <div className="heading48">Company</div>
              <div className="aboutUs">About us</div>
              <div className="termsOfUse">Terms of Use</div>
              <div className="privacyPolicy">Privacy Policy</div>
              <div className="giveUsFeedbacks">Give Us Feedbacks</div>
            </div>
            <div className="heading4OtherServicesParent">
              <div className="heading49">Other Services</div>
              <div className="investorRelations">Investor Relations</div>
              <div className="rewardsProgram">Rewards Program</div>
              <div className="pointsplus">PointsPLUS</div>
              <div className="partners">Partners</div>
              <div className="listMyHotel">List My Hotel</div>
            </div>
            <div className="heading4SupportParent">
              <div className="heading410">Support</div>
              <div className="account">Account</div>
              <div className="legal">Legal</div>
              <div className="contact">Contact</div>
              <div className="affiliateProgram">Affiliate Program</div>
              <div className="privacyPolicy1">Privacy Policy</div>
            </div>
            <div className="heading4MailingListParent">
              <div className="heading411">Mailing List</div>
              <div className="signUpForContainer">
                <span className="stayPeriodUpContainer1">
                  <p className="stayPeriodUpTo59Days">
                    Sign up for our mailing list to get latest
                  </p>
                  <p className="stayPeriodUpTo59Days">updates and offers.</p>
                </span>
              </div>
              <div className="formInput">
                <div className="divplaceholder">
                  <div className="yourEmail">Your Email</div>
                </div>
              </div>
              <div className="formButton">
                <div className="subscribe">Subscribe</div>
              </div>
            </div>
          </div>
          <div className="divcopyRight">
            <div className="divcolMd12">
              <div className="thetripkartAllRights">
                © 2023 TheTripKart. All rights reserved. 
              </div>
              <div className="designedAndDevelopedContainer">
                <span className="stayPeriodUpContainer1">
                  <span>Designed and Developed by </span>
                  <span className="inspiringWave">INSPIRING WAVE</span>
                </span>
              </div>
            </div>
            <div className="pngTk1235">
              <div className="groupContainer">
                <div className="groupParent1">
                  <div className="groupParent2">
                    <img
                      className="groupInner"
                      alt=""
                      src="/group-1000003598.svg"
                    />
                    <div className="groupParent3">
                      <div className="theParent">
                        <div className="the">
                          <span>T</span>
                          <span className="he">HE</span>
                        </div>
                        <img
                          className="groupIcon"
                          alt=""
                          src="/group-1000003591.svg"
                        />
                      </div>
                      <img
                        className="tripkartIcon"
                        alt=""
                        src="/tripkart.svg"
                      />
                    </div>
                  </div>
                  <img className="image19Icon" alt="" src="/image-19@2x.png" />
                </div>
                <div className="tailoredJourney">
                  Tailored JournEY - Endless Memories
                </div>
              </div>
              <img className="vectorIcon6" alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
        <div className="colorLogoTk" />
        <div className="hrParent">
          <div className="hr" />
          <Link href="/pages/page1" className="formCheckdefaultParent">
            <img
              className="formCheckdefault"
              alt=""
              src="/form--checkdefault.svg"
            />
            <div className="text">Home</div>
          </Link>
          <Link href="/" className="formCheckdefaultGroup">
            <img
              className="formCheckdefault"
              alt=""
              src="/form--checkdefault.svg"
            />
            <div className="text">Application Form</div>
          </Link>
          <Link href="/pages/page3" className="formCheckdefaultContainer">
            <img
              className="formCheckdefault"
              alt=""
              src="/form--checkdefault.svg"
            />
            <div className="text">Payment</div>
          </Link>
        </div>
        <div className="divuHeaderSection">
          <div className="divbravoTopbar">
            <div className="before" />
            <div className="linkSupportthetripkartcom">
              support@thetripkart.com
            </div>
            <img className="icon5" alt="" src="/icon.svg" />
            <div className="div5">+91 8808869169</div>
            <div className="before1" />
            <div className="inr">INR</div>
            <img className="icon6" alt="" src="/icon.svg" />
            <img className="linkIcon1" alt="" src="/link.svg" />
            <div className="linkSign">Sign in or Register</div>
            <div className="before2" />
          </div>
          <img
            className="linkThetripkartpng"
            alt=""
            src="/link--thetripkartpng@2x.png"
          />
          <div className="listItem8">Flight</div>
          <div className="listItem9">Hotel</div>
          <div className="listItem10">Holidays</div>
          <div className="listItem11">Events</div>
          <div className="listItem12">Car Rental</div>
          <div className="listItem13">Visa</div>
          <div className="listItem14">Contact</div>
        </div>
      </div>

      {/* ###################### old ###################### */}
      {/* <div className="visa-application-page">
        <div className="frame-parent">
          <div className="frame-group">
            <div className="frame-container">
              <div className="heading-4-visa-type-parent">
                <div className="heading-4">Visa Type</div>
                <div className="label-select-stay-duration-parent">
                  <div className="label-select">Select Stay Duration</div>
                  <img
                    className="frame-child"
                    alt=""
                    src="./public/vector-67.svg"
                  />
                </div>
              </div>
              <div className="heading-4-visa-type-parent">
                <div className="heading-41">Contact Information</div>
                <div className="frame-div">
                  <div className="label-select-stay-duration-wrapper">
                    <div className="label-select">Enter Your Email</div>
                  </div>
                  <div className="frame-parent1">
                    <div className="label-select-stay-duration-group">
                      <div className="label-select">+91</div>
                      <img
                        className="frame-item"
                        alt=""
                        src="./public/vector-67.svg"
                      />
                    </div>
                    <div className="label-select-stay-duration-wrapper">
                      <div className="label-select">Enter Mobile No</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent2">
              <div className="frame-parent3">
                <div className="vector-parent">
                  <img
                    className="vector-icon"
                    alt=""
                    src="./public/vector.svg"
                  />

                  <div className="strong-sample">3800</div>
                </div>
                <div className="small-for">Per Traveller</div>
              </div>
              <div className="processing-time-10-to-15-work-parent">
                <div className="processing-time-10">
                  Processing time: 10 to 15 Working Days*
                </div>
                <div className="stay-period-up-container">
                  <span className="stay-period-up-container1">
                    <p className="stay-period-up-to-59-days">
                      <b className="stay-period">Stay period: </b>
                      <span>Up to 59 Days*.</span>
                    </p>
                    <p className="stay-period-up-to-59-days">
                      <b>Validity (Business Visa)</b>
                      <span className="stay-period">: 6 Months/1 Year*</span>
                    </p>
                    <p className="stay-period-up-to-59-days">
                      <b className="stay-period">Entry:</b>
                      <span> Single/Multiple</span>
                    </p>
                    <p className="stay-period-up-to-59-days">
                      <b className="stay-period">Purpose:</b>
                      <span> Tourist/Business</span>
                    </p>
                    <p className="stay-period-up-to-59-days">
                      <b>Validity:</b>
                      <span className="stay-period"> 30 Days</span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent">
            <div className="group-child"></div>
            <div className="frame-parent4">
              <div className="frame-parent5">
                <div className="frame-wrapper">
                  <div className="heading-4-traveller-names-wrapper">
                    <div className="heading-42">Traveller Names</div>
                  </div>
                </div>
                <div className="frame-parent6">
                  <div className="divcol-lg-4-parent">
                    <div className="divcol-lg-4">
                      <div className="label-traveller-1-first-name-parent">
                        <div className="label-traveller">
                          Traveller First Name
                        </div>
                        <div className="input">
                          <div className="first-name">First Name</div>
                        </div>
                      </div>
                    </div>
                    <div className="divcol-lg-4">
                      <div className="label-traveller-1-first-name-group">
                        <div className="label-traveller">
                          Traveller Last Name
                        </div>
                        <div className="input">
                          <div className="first-name">Last Name</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divcol-lg-4-group">
                    <div className="divcol-lg-42">
                      <div className="label-traveller-1-first-name-parent">
                        <div className="label-traveller">Traveller Age</div>
                        <div className="input2">
                          <div className="age">Age</div>
                        </div>
                      </div>
                    </div>
                    <div className="divcol-lg-4">
                      <div className="label-traveller-1-first-name-parent">
                        <div className="label-traveller">Traveller Gender</div>
                        <div className="input">
                          <div className="select-gender">Select Gender</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent7">
                <div className="frame-parent5">
                  <div className="heading-4-traveller-names-wrapper">
                    <div className="heading-43">Upload Documents</div>
                  </div>
                  <div className="frame-parent9">
                    <div className="label-traveller-1-passport-f-parent">
                      <div className="label-traveller4">
                        Traveller Passport Front
                      </div>
                      <div className="input4">
                        <div className="input-parent">
                          <div className="input5">
                            <div className="choose-file">Choose File</div>
                          </div>
                          <div className="no-file-chosen">No file chosen</div>
                        </div>
                      </div>
                    </div>
                    <div className="label-traveller-1-passport-f-parent">
                      <div className="label-traveller4">
                        Traveller Passport Back
                      </div>
                      <div className="input4">
                        <div className="input-parent">
                          <div className="input5">
                            <div className="choose-file">Choose File</div>
                          </div>
                          <div className="no-file-chosen">No file chosen</div>
                        </div>
                      </div>
                    </div>
                    <div className="label-traveller-1-passport-f-parent">
                      <div className="label-traveller4">
                        Traveller Photograph
                      </div>
                      <div className="input4">
                        <div className="input-parent">
                          <div className="input5">
                            <div className="choose-file">Choose File</div>
                          </div>
                          <div className="no-file-chosen">No file chosen</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divflight-pay">
                  <div className="heading-5">STEPS TO GET VISA</div>
                  <div className="frame-parent10">
                    <div className="list-item-uploadpng-parent">
                      <img
                        className="list-item-uploadpng"
                        alt=""
                        src="./public/list--item--uploadpng@2x.png"
                      />

                      <div className="list-item-upload-documents-parent">
                        <b className="list-item">Upload Documents</b>
                        <div className="list-item-container">
                          <span className="stay-period-up-container1">
                            <p className="stay-period-up-to-59-days">
                              Upload soft copy of below
                            </p>
                            <p className="stay-period-up-to-59-days">
                              mentioned documents and get
                            </p>
                            <p className="stay-period-up-to-59-days">
                              your visa
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="list-item-paypng-parent">
                      <img
                        className="list-item-uploadpng"
                        alt=""
                        src="./public/list--item--paypng@2x.png"
                      />

                      <div className="list-item-upload-documents-parent">
                        <b className="list-item1">Pay Online</b>
                        <div className="list-item-container2">
                          <span className="stay-period-up-container1">
                            <p className="stay-period-up-to-59-days">
                              Complete your purchase using a
                            </p>
                            <p className="stay-period-up-to-59-days">
                              paymode of your choice.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="list-item-getvisapng-parent">
                      <img
                        className="list-item-uploadpng"
                        alt=""
                        src="./public/list--item--getvisapng@2x.png"
                      />

                      <div className="list-item-upload-documents-parent">
                        <b className="list-item2">Get Your Visa</b>
                        <div className="list-item-container4">
                          <span className="stay-period-up-container1">
                            <p className="stay-period-up-to-59-days">
                              Keep track of your visa status and
                            </p>
                            <p className="stay-period-up-to-59-days">
                              get visa on mail.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button" id="buttonContainer">
              <b className="proceed-to-payment">Proceed To Payment</b>
            </div>
            <div className="divflight-pay1">
              <div className="heading-51">Price Summary</div>
              <div className="list-item3">
                <div className="visa-price">Visa Price:</div>
                <div className="bfloat-right">
                  <img className="icon" alt="" src="./public/icon.svg" />

                  <div className="vector-group">
                    <img
                      className="vector-icon1"
                      alt=""
                      src="./public/vector.svg"
                    />

                    <div className="div">3500</div>
                  </div>
                </div>
              </div>
              <div className="list-item4">
                <div className="courier-charges">Courier charges:</div>
                <div className="bfloat-right1">
                  <img className="icon" alt="" src="./public/icon.svg" />

                  <div className="vector-container">
                    <img
                      className="vector-icon1"
                      alt=""
                      src="./public/vector.svg"
                    />

                    <div className="div">0</div>
                  </div>
                </div>
              </div>
              <div className="list-item5">
                <div className="service-fee">Service Fee:</div>
                <div className="bfloat-right2">
                  <img className="icon" alt="" src="./public/icon.svg" />

                  <div className="vector-parent1">
                    <img
                      className="vector-icon1"
                      alt=""
                      src="./public/vector.svg"
                    />

                    <div className="div">300</div>
                  </div>
                </div>
              </div>
              <div className="list-item6">
                <div className="gst">GST:</div>
                <div className="bfloat-right1">
                  <img className="icon" alt="" src="./public/icon.svg" />

                  <div className="vector-parent2">
                    <img
                      className="vector-icon1"
                      alt=""
                      src="./public/vector.svg"
                    />

                    <div className="div">0</div>
                  </div>
                </div>
              </div>
              <div className="list-item7">
                <div className="total-price">Total Price :</div>
                <div className="bfloat-right4">
                  <img className="icon" alt="" src="./public/icon.svg" />

                  <div className="vector-parent3">
                    <img
                      className="vector-icon1"
                      alt=""
                      src="./public/vector.svg"
                    />

                    <div className="div">3800</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-group">
            <div className="group-item"></div>
            <div className="group-div">
              <div className="heading-4-list-of-documents-parent">
                <div className="heading-44">List of Documents</div>
                <div className="ordered-list-item-original-parent">
                  <div className="ordered-list-container">
                    <span className="stay-period-up-container1">
                      <ul className="original-passport-with-at-leas">
                        <li>
                          Original Passport with at least 6 months validity and
                          a minimum of 3 blank pages
                        </li>
                      </ul>
                    </span>
                  </div>
                  <div className="ordered-list-container">
                    <span className="stay-period-up-container1">
                      <ul className="original-passport-with-at-leas">
                        <li>2 recent color photographs. </li>
                      </ul>
                    </span>
                  </div>
                  <div className="ordered-list-container">
                    <span className="stay-period-up-container1">
                      <ul className="original-passport-with-at-leas">
                        <li>
                          Personal Covering letter (For Employed-Plain paper/
                          Self-Employed-Letterhead)
                        </li>
                      </ul>
                    </span>
                  </div>
                  <div className="ordered-list-container">
                    <span className="stay-period-up-container1">
                      <ul className="original-passport-with-at-leas">
                        <li>
                          Original updated Bank Statements with sufficient bank
                          balance (last 6 months)
                        </li>
                      </ul>
                    </span>
                  </div>
                  <div className="ordered-list-container">
                    <span className="stay-period-up-container1">
                      <ul className="original-passport-with-at-leas">
                        <li>Confirmed return flight ticket</li>
                      </ul>
                    </span>
                  </div>
                  <div className="ordered-list-container">
                    <span className="stay-period-up-container1">
                      <ul className="original-passport-with-at-leas">
                        <li>Hotel reservation</li>
                      </ul>
                    </span>
                  </div>
                  <div className="ordered-list-container12">
                    <span className="stay-period-up-container1">
                      <ul className="original-passport-with-at-leas">
                        <li>
                          Supporting Financial Documents such as Fixed Deposits,
                          Property Investments, Other Investments, etc.
                          (Optional)
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
              <div className="kindly-note-the-govt-is-very-wrapper">
                <div className="kindly-note-the">
                  Kindly note: The Govt is very strict on the photograph
                  requirement; please ensure that your photos are as per the
                  specifications.
                </div>
              </div>
            </div>
            <div className="heading-4-supporting-documen-parent">
              <div className="heading-45">
                Supporting documents as per your occupation, and type of visit:
              </div>
              <div className="frame-parent11">
                <div className="heading-4-traveller-names-wrapper">
                  <div className="if-employed-wrapper">
                    <b className="if-employed">If Employed:</b>
                  </div>
                  <div className="original-leave-sanctioned-cert-wrapper">
                    <div className="original-leave-sanctioned">
                      Original Leave sanctioned certificate with company seal
                      and signature
                    </div>
                  </div>
                </div>
                <div className="heading-4-traveller-names-wrapper">
                  <div className="if-employed-wrapper">
                    <b className="if-employed">If Self-Employed:</b>
                  </div>
                  <div className="original-leave-sanctioned-cert-wrapper">
                    <div className="business-registration-license-container">
                      <span className="stay-period-up-container1">
                        <p className="stay-period-up-to-59-days">
                          Business Registration License / MOA / Partnership
                          deed,
                        </p>
                        <p className="stay-period-up-to-59-days">
                          Company’s updated bank statement for the last 6
                          months.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="heading-4-traveller-names-wrapper">
                  <div className="if-employed-wrapper">
                    <b className="if-employed">If Retired:</b>
                  </div>
                  <div className="original-leave-sanctioned-cert-wrapper">
                    <div className="business-registration-license-container">
                      Proof of retirement like pension book, statement, etc.
                    </div>
                  </div>
                </div>
                <div className="heading-4-traveller-names-wrapper">
                  <div className="if-employed-wrapper">
                    <b className="if-employed">If Student:</b>
                  </div>
                  <div className="original-leave-sanctioned-cert-wrapper">
                    <div className="school-college-container">
                      <span className="stay-period-up-container1">
                        <p className="stay-period-up-to-59-days">
                          School / College / Institute ID Card,
                        </p>
                        <p className="stay-period-up-to-59-days">
                          Bonafide certificate.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="heading-4-traveller-names-wrapper">
                  <div className="if-employed-wrapper">
                    <b className="if-employed">If Minor:</b>
                  </div>
                  <div className="original-leave-sanctioned-cert-wrapper">
                    <div className="business-registration-license-container">
                      <span className="stay-period-up-container1">
                        <p className="stay-period-up-to-59-days">
                          Birth Certificate;
                        </p>
                        <p className="stay-period-up-to-59-days">
                          No Objection Certificate from the parents /
                          non-accompanying parent on Rs 100/- stamp paper;
                        </p>
                        <p className="stay-period-up-to-59-days">
                          ID proof of parents like passport or PAN card.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="heading-4-traveller-names-wrapper">
                  <div className="if-employed-wrapper">
                    <b className="if-employed">
                      If Visiting a friend or relative:
                    </b>
                  </div>
                  <div className="original-leave-sanctioned-cert-wrapper">
                    <div className="business-registration-license-container">
                      <span className="stay-period-up-container1">
                        <p className="stay-period-up-to-59-days">
                          Original Invitation letter;
                        </p>
                        <p className="stay-period-up-to-59-days">
                          Inviter’s ID proof like Passport, valid Japan
                          visa/Resident Permit;
                        </p>
                        <p className="stay-period-up-to-59-days">
                          Address proof like any Electricity bill, any Utility
                          bill, etc.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="heading-4-traveller-names-wrapper">
                  <div className="if-employed-wrapper">
                    <b className="if-employed">If Sponsored:</b>
                  </div>
                  <div className="original-leave-sanctioned-cert-wrapper">
                    <div className="business-registration-license-container">
                      <span className="stay-period-up-container1">
                        <p className="stay-period-up-to-59-days">
                          Sponsorship letter;
                        </p>
                        <p className="stay-period-up-to-59-days">
                          Sponsor’s national ID proof like Passport, PAN card,
                          or Resident permit;
                        </p>
                        <p className="stay-period-up-to-59-days">
                          Updated bank statement for last 6 months
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="heading-4-traveller-names-wrapper">
                  <div className="if-employed-wrapper">
                    <b className="if-employed">For Business Visa:</b>
                  </div>
                  <div className="original-leave-sanctioned-cert-wrapper">
                    <div className="original-invitation-letter-container2">
                      <span className="stay-period-up-container1">
                        <p className="stay-period-up-to-59-days">
                          Original Invitation letter from host Company stating
                          the purpose of the trip, business details, etc;
                        </p>
                        <p className="stay-period-up-to-59-days">
                          Original Letter of Guarantee & a certified copy of the
                          incorporation register or an overview of the
                          company/organization. (If an inviting company is
                          bearing the
                        </p>
                        <p className="stay-period-up-to-59-days">expenses);</p>
                        <p className="stay-period-up-to-59-days">
                          Covering letter from Indian company on company
                          letterhead.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="group-parent">
            <div className="list-item-link-parent">
              <img
                className="list-item-link"
                alt=""
                src="./public/list--item--link.svg"
              />

              <img
                className="list-item-link1"
                alt=""
                src="./public/list--item--link.svg"
              />

              <img
                className="list-item-link2"
                alt=""
                src="./public/list--item--link.svg"
              />

              <img
                className="list-item-link3"
                alt=""
                src="./public/list--item--link.svg"
              />

              <div className="heading-46">CUSTOMER CARE 24/7</div>
              <img className="link-icon" alt="" src="./public/link.svg" />

              <div className="link-got-container">
                <span className="stay-period-up-container1">
                  <p className="stay-period-up-to-59-days">Got Questions ?</p>
                  <p className="stay-period-up-to-59-days">Whats App</p>
                </span>
              </div>
              <div className="link-small">+91 8808869169</div>
              <div className="heading-47">Contact Info</div>
              <div className="address-4th-container">
                <span className="stay-period-up-container1">
                  <p className="stay-period-up-to-59-days">
                    4th Floor, Office no 408, Kubera
                  </p>
                  <p className="stay-period-up-to-59-days">
                    Towers, Himayat Nagar, Hyderabad
                  </p>
                  <p className="stay-period-up-to-59-days">Telangana-500027</p>
                </span>
              </div>
            </div>
            <div className="heading-4-company-parent">
              <div className="heading-48">Company</div>
              <div className="about-us">About us</div>
              <div className="terms-of-use">Terms of Use</div>
              <div className="privacy-policy">Privacy Policy</div>
              <div className="give-us-feedbacks">Give Us Feedbacks</div>
            </div>
            <div className="heading-4-other-services-parent">
              <div className="heading-49">Other Services</div>
              <div className="investor-relations">Investor Relations</div>
              <div className="rewards-program">Rewards Program</div>
              <div className="pointsplus">PointsPLUS</div>
              <div className="partners">Partners</div>
              <div className="list-my-hotel">List My Hotel</div>
            </div>
            <div className="heading-4-support-parent">
              <div className="heading-410">Support</div>
              <div className="account">Account</div>
              <div className="legal">Legal</div>
              <div className="contact">Contact</div>
              <div className="affiliate-program">Affiliate Program</div>
              <div className="privacy-policy1">Privacy Policy</div>
            </div>
            <div className="heading-4-mailing-list-parent">
              <div className="heading-411">Mailing List</div>
              <div className="sign-up-for-container">
                <span className="stay-period-up-container1">
                  <p className="stay-period-up-to-59-days">
                    Sign up for our mailing list to get latest
                  </p>
                  <p className="stay-period-up-to-59-days">
                    updates and offers.
                  </p>
                </span>
              </div>
              <div className="form-input">
                <div className="divplaceholder">
                  <div className="your-email">Your Email</div>
                </div>
              </div>
              <div className="form-button">
                <div className="subscribe">Subscribe</div>
              </div>
            </div>
          </div>
          <div className="divcopy-right">
            <div className="divcol-md-12">
              <div className="thetripkart-all-rights">
                © 2023 TheTripKart. All rights reserved. 
              </div>
              <div className="designed-and-developed-container">
                <span className="stay-period-up-container1">
                  <span>Designed and Developed by </span>
                  <span className="inspiring-wave">INSPIRING WAVE</span>
                </span>
              </div>
            </div>
            <div className="png-tk-1235">
              <div className="group-container">
                <div className="group-parent1">
                  <div className="group-parent2">
                    <img
                      className="group-inner"
                      alt=""
                      src="./public/group-1000003598.svg"
                    />

                    <div className="group-parent3">
                      <div className="the-parent">
                        <div className="the">
                          <span>T</span>
                          <span className="he">HE</span>
                        </div>
                        <img
                          className="group-icon"
                          alt=""
                          src="./public/group-1000003591.svg"
                        />
                      </div>
                      <img
                        className="tripkart-icon"
                        alt=""
                        src="./public/tripkart.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="image-19-icon"
                    alt=""
                    src="./public/image-19@2x.png"
                  />
                </div>
                <div className="tailored-journey-">
                  Tailored JournEY - Endless Memories
                </div>
              </div>
              <img className="vector-icon6" alt="" src="./public/vector.svg" />
            </div>
          </div>
        </div>
        <div className="color-logo-tk"></div>
        <div className="hr-parent">
          <div className="hr"></div>
          <div className="form-checkdefault-parent">
            <img
              className="form-checkdefault"
              alt=""
              src="./public/form--checkdefault.svg"
            />

            <div className="text">Home</div>
          </div>
          <div className="form-checkdefault-group">
            <img
              className="form-checkdefault"
              alt=""
              src="./public/form--checkdefault.svg"
            />

            <div className="text">Application Form</div>
          </div>
          <div className="form-checkdefault-container">
            <img
              className="form-checkdefault"
              alt=""
              src="./public/form--checkdefault.svg"
            />

            <div className="text">Payment</div>
          </div>
        </div>
        <div className="divu-header-section">
          <div className="divbravo-topbar">
            <div className="before"></div>
            <div className="link-supportthetripkartcom">
              support@thetripkart.com
            </div>
            <img className="icon5" alt="" src="./public/icon.svg" />

            <div className="div5">+91 8808869169</div>
            <div className="before1"></div>
            <div className="inr">INR</div>
            <img className="icon6" alt="" src="./public/icon.svg" />

            <img className="link-icon1" alt="" src="./public/link.svg" />

            <div className="link-sign">Sign in or Register</div>
            <div className="before2"></div>
          </div>
          <img
            className="link-thetripkartpng"
            alt=""
            src="./public/link--thetripkartpng@2x.png"
          />

          <div className="list-item8">Flight</div>
          <div className="list-item9">Hotel</div>
          <div className="list-item10">Holidays</div>
          <div className="list-item11">Events</div>
          <div className="list-item12">Car Rental</div>
          <div className="list-item13">Visa</div>
          <div className="list-item14">Contact</div>
        </div>
      </div> */}
    </div>
  );
};

// export default DetailsPage;
