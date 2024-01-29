import { QuizCategory } from "../types/quiz-types";
import {
  Flex,
  Heading,
  Button,
  RadioGroup,
  SimpleGrid,
  Radio,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";

export function SetQuizCategory(p: {
  categories: QuizCategory[];
  onClickNext: (categoryId: string) => void;
}) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    p.categories[0].id.toString()
  );
  const radioList = p.categories.map((category: QuizCategory) => {
    return (
      <Radio key={category.id} value={category.id.toString()}>
        {category.name}
      </Radio>
    );
  });
  console.log("***", selectedCategoryId);
  return (
    <>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading as="h1" fontSize="2xl" mb={20}>
          Which topic ?
        </Heading>
      </Flex>
      <RadioGroup
        display={"flex"}
        justifyContent={"center"}
        value={selectedCategoryId}
        onChange={setSelectedCategoryId}
      >
        <SimpleGrid columns={[1, 3, 4]} spacing={"4"}>
          {radioList}
        </SimpleGrid>
      </RadioGroup>
      <Button
        onClick={() => p.onClickNext(selectedCategoryId)}
        position={"absolute"}
        top={"90%"}
        right={"10%"}
        rightIcon={<ArrowForwardIcon />}
      >
        Set difficulty
      </Button>
    </>
  );
}
