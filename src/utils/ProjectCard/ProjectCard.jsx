/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProjectCard = ({ image, projectName, altText }) => {
  return (
    <div>
      <Card sx={{ width: 4 / 4, maxHeight: 700 }}>
        <CardMedia
          className="px-2 pt-1"
          component={"img"}
          image={image}
          alt={altText}
          height={"194px"}
        ></CardMedia>
        <CardContent>
          <Typography>
            <h1 className="font-bold font-roboto-condense">{projectName}</h1>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
