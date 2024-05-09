/* eslint-disable react/prop-types */
import "./serviceCard.css";
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="size-10 fill-current text-gray-800"
                >
                  <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                </svg>
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
