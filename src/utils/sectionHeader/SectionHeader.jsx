/* eslint-disable react/prop-types */
const SectionHeader = ({ sectionTitle }) => {
  return (
    <div>
      <h1 className="text-center text-xl font-bold font-roboto-condense my-5">
        <span className="text-green-500 bg-green-100 px-4 py-2 rounded-md">
          {sectionTitle}
        </span>
      </h1>
    </div>
  );
};

export default SectionHeader;
