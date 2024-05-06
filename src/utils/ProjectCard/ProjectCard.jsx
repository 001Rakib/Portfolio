/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import TechBadge from "../badge/TechBadge";

const ProjectCard = ({
  image,
  projectName,
  altText,
  techUsed,
  gitHubLink,
  liveLink,
}) => {
  return (
    <div className="shadow-lg shadow-slate-400 text-center">
      <Card sx={{ width: 4 / 4 }}>
        <CardMedia
          className="px-2 pt-1"
          component={"img"}
          image={image}
          alt={altText}
        ></CardMedia>
        <CardContent>
          <Typography>
            <span className="font-bold font-roboto-condense">
              {projectName}
            </span>
          </Typography>
          <div className="flex justify-center items-center gap-4 my-2">
            <Link
              to={gitHubLink}
              className="border border-black px-2 py-1 rounded-md"
            >
              <FaGithub className="text-4xl"></FaGithub>
            </Link>
            <Link
              to={liveLink}
              className="border border-black px-2 py-1 rounded-md"
            >
              <span className="font-semibold font-roboto-condense">
                Live Link
              </span>
            </Link>
          </div>
          <Divider className="font-semibold">
            <Chip label="Technology" size="medium" />
          </Divider>
          <div>
            <span className="flex flex-wrap gap-2 justify-center">
              {techUsed.map((tech) => (
                <TechBadge key={tech} technology={tech}></TechBadge>
              ))}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
