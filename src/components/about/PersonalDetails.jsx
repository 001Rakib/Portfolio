const PersonalDetails = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20 flex justify-around">
      <div className="font-roboto-condense">
        <h1 className="text-3xl font-bold">Personal Details</h1>
        <p>I am Rakib, Learning full stack web development.</p>
      </div>
      <div className="font-roboto-condense">
        <p>
          <span className="font-bold pr-10">Date of Birth </span>
          <span className="font-bold">:</span>{" "}
          <span className="font-bold text-gray-600 pl-5">5 April 2005</span>
        </p>
        <p>
          <span className="font-bold pr-2">Spoken Language </span>
          <span className="font-bold">:</span>{" "}
          <span className="font-bold text-gray-600 pl-5">English, Bangla</span>
        </p>
        <p>
          <span className="font-bold pr-[52px]">Nationality </span>
          <span className="font-bold">:</span>{" "}
          <span className="font-bold text-gray-600 pl-5">Bangladesh</span>
        </p>
        <p>
          <span className="font-bold pr-[72px]">Interest </span>
          <span className="font-bold">:</span>{" "}
          <span className="font-bold text-gray-600 pl-5">
            Playing Cricket, Reading Religious Books
          </span>
        </p>
      </div>
    </div>
  );
};

export default PersonalDetails;
