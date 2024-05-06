/* eslint-disable react/prop-types */
const TechBadge = ({ technology }) => {
  return (
    <div>
      <span className="border border-blue-400 rounded-sm px-2 text-center font-roboto-condense bg-blue-100">
        {technology}
      </span>
    </div>
  );
};

export default TechBadge;
