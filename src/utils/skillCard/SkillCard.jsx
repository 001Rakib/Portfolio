/* eslint-disable react/prop-types */
const SkillCard = ({ icon, title, experience }) => {
  return (
    <div className="flex items-center gap-4 font-roboto-condense my-5 shadow-xl shadow-slate-400 px-4 py-3">
      <div className="text-5xl">{icon}</div>
      <div>
        <h1 className="font-bold">{title}</h1>
        <p>{experience} Experience</p>
      </div>
    </div>
  );
};

export default SkillCard;
