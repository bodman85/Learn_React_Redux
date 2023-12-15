import {
  Flex,
  Wrap,
  WrapItem,
  Heading,
  Box,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { ImageSlider } from "../components/ImageSlider";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ProjectsAPI } from "../api/projects";

export function LatestProjects() {
  const [projects, setProjects] = useState();
  const { t, i18n } = useTranslation("home");

  useEffect(() => {
    (async () => {
      const projectsResponse = await ProjectsAPI.fetchAll();
      setProjects(projectsResponse);
    })();
  }, []);

  const renderProject = ({ id, images, title, desc, technologies }) => {
    console.log(desc);
    return (
      <WrapItem key={id} flexDir={"column"}>
        <ImageSlider imageList={images.map(img => img.downloadURL)} />
        <Heading size="md" color="secondary" mt={3}>
          <Box
            display={"inline-block"}
            bg="primary.dark"
            w={25}
            h={1}
            mr={3}
            verticalAlign="middle"
          />
          {title}
        </Heading>
        <Text>{desc[i18n.language]}</Text>
        <Wrap mt={"2"} maxW={"350"}>
          {technologies.map((tech) => (
            <WrapItem key={tech}>
              <Badge color="white" bg={tech}>
                {tech}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </WrapItem>
    );
  };
  return (
    <Flex direction={"column"} w="100%">
      <Heading>{t("latestProjects")}</Heading>
      <Wrap mt={10} spacing={16}>
        {projects?.map(renderProject)}
      </Wrap>
    </Flex>
  );
}
