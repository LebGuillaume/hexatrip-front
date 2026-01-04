import {
  icons,
  col1,
  col2,
  col3,
  col4,
  colTitles,
  text,
} from "@/utils/footerData";
import logo from "../assets/images/Logo.webp";
const Footer = () => {
  return (
    <div className=" min-h-[30vh] bg-sky-900 text-white pb-12">
      <div className=" align-center pt-6 grid grid-cols-1 lg:grid-cols-5 gap-6 place-it">
        <div className="w-[150px] h-[150px]">
          <img
            src={logo}
            alt="logo-footer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-full lg:col-span-4">{text}</div>
        <div className="w-full h-full flex flex-col md:flex-row lg:flex-col justify-between items-start gap-7">
          <div className=" flex flex-col items-start">
            <span>Safe payment</span>
            <img src={icons.stripe} alt="stripe-logo" className="w-[40px]" />
          </div>
          <div className=" flex flex-col items-start">
            <span>Accepted Payment Types</span>
            <div className=" flex justify-start gap-x-4 flex-wrap">
              <img src={icons.visa} alt="visa-logo" className="w-[40px]" />
              <img src={icons.master} alt="master-logo" className="w-[40px]" />
              <img
                src={icons.bitcoin}
                alt="bitcoin-logo"
                className="w-[40px]"
              />
            </div>
          </div>
          <div className=" flex flex-col items-start">
            <span>Our parteners</span>
            <img src={icons.iata} alt="stripe-logo" className="w-[40px]" />
          </div>
        </div>
        <div className="w-full h-full  flex flex-col md:flex-row lg:col-span-4 justify-between gap-2">
          <div className="leading-10">
            <div className="font-bold underline">{colTitles[0]}</div>
            {col1.map((text, index) => {
              return (
                <div
                  key={index}
                  className="hover:cursor-pointer hover:underline hover-btn"
                >
                  {text}
                </div>
              );
            })}
          </div>
          <div className="leading-10">
            <div className="font-bold underline">{colTitles[1]}</div>
            {col2.map((text, index) => {
              return (
                <div
                  key={index}
                  className="hover:cursor-pointer hover:underline hover-btn"
                >
                  {text}
                </div>
              );
            })}
          </div>
          <div className="leading-10">
            <div className="font-bold underline">{colTitles[2]}</div>
            {col3.map((text, index) => {
              return (
                <div
                  key={index}
                  className="hover:cursor-pointer hover:underline hover-btn"
                >
                  {text}
                </div>
              );
            })}
          </div>
          <div className="leading-10">
            <div className="font-bold underline">{colTitles[3]}</div>
            {col4.map((text, index) => {
              return (
                <div
                  key={index}
                  className="hover:cursor-pointer hover:underline hover-btn"
                >
                  {text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" align-center text-center capitalize mt-12 text-xl">
        <p>Guillaume - {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
