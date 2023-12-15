import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagENImg from "@/assets/images/flag-en.png";
import flagUaImg from "@/assets/images/flag-ua.png";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t, i18n } = useTranslation("home");

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };
  return (
    <Flex pt={10} pr={10} justify="space-between">
      <Image src={logoImg} h={10} />
      <HStack spacing={1}>
        <Image src={bubbleImg} h={10} />
        <Link
          href="mailto: bogdan.zgurskyi@gmail.com?subject=Contacting you from your React portfolio"
          fontSize="lg"
          fontWeight="bold"
        >
          {t("hireMe")}
        </Link>
        <Image
          onClick={switchLanguage}
          pl={30}
          src={i18n.language === "en" ? flagUaImg : flagENImg}
          h={8}
          cursor="pointer"
        />
      </HStack>
    </Flex>
  );
}
