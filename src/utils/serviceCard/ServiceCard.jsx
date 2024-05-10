/* eslint-disable react/prop-types */
import { IoIosArrowDroprightCircle } from "react-icons/io";
const ServiceCard = ({ cardTitle, description }) => {
  return (
    <>
      <div className="w-full px-4 mb-8 lg:mb-0 mx-auto max-w-[380px]">
        <div className="max-w-sm lg:max-w-none mx-auto pt-10 px-5 pb-8 bg-gray-100 rounded-3xl">
          <div className="text-center mb-6">
            <h5 className="text-2xl font-semibold text-gray-800 mb-3">
              {cardTitle}
            </h5>
          </div>
          <ul>
            {description.map((item) => (
              <li key={item} className="flex mb-4 items-center">
                <IoIosArrowDroprightCircle className="text-3xl"></IoIosArrowDroprightCircle>
                <span className="ml-2 text-gray-800"> {item} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
