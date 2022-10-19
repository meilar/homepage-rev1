import { Box, Paper, Typography } from "@mui/material";
import { MainLayout } from "../Layouts/MainLayout";
import headshot from "../assets/img/headshot_optimized.jpg";
import img2 from "../assets/img/eilar_computer.jpeg";

export const BioPage = () => {
  return (
    <MainLayout pageTitle="About Me">
      <Box sx={sxRoot}>
        <Box sx={sxPhotos}>
          <Paper elevation={5} sx={sxHeadshot}></Paper>
          <Paper elevation={5} sx={sxElementary}></Paper>
        </Box>
        <Box sx={sxText}>
          <Typography sx={sxParagraph}>
            My passion is to discover new connections and patterns in the world
            around us. After completing a B.A. in Music from Reed College, I
            worked in the Portland, Oregon area non-profit sector. I was an
            operations coordinator at a youth services organization, then ran
            the box office for an orchestra.
          </Typography>
          <Typography sx={sxParagraph}>
            In March 2020, I helped launch Portland Baroque Orchestra's first
            all-digital season. I procured equipment, did pre-production, and
            worked on set as a recording assistant and video editor. In autumn
            2021, I left PBO to pursue further challenges.
          </Typography>
          <Typography sx={sxParagraph}>
            During the first half of 2022, I went through the In 2022, I
            completed the{" "}
            <a href="https://www.epicodus.com">
              Epicodus Full-Stack Developer bootcamp
            </a>
            , in the C#/.Net and React track. I invested 26 weeks and over a
            thousand hours working on projects. The Epicodus curriculum is
            modeled on an Agile development team. We had daily standups and
            retrospectives. The majority of learning time consisted of pair
            programming. We practiced good development practices like version
            control, unit testing, and documentation.
          </Typography>
          <Typography sx={sxParagraph}>
            After Epicodus, I joined Edge Networks as a Software Developer. I do
            full-stack work, contributing to a startup product for the MSP
            sector. The tech stack is Material UI, React, TypeScript, Next.js,
            Postgres.
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};

const sxRoot = {
  // display: "flex",
  // flexDirection: "row",
};

const sxHeadshot = {
  backgroundImage: `url(${headshot})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "400px",
  width: "40vh",
  mb: "2em",
};

const sxElementary = {
  backgroundImage: `url(${img2})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "400px",
  width: "40vh",
  mb: "2em",
};

const sxParagraph = {
  mt: ".5em",
};

const sxPhotos = {
  width: "40%",
};
const sxText = {
  width: "60%",
};
