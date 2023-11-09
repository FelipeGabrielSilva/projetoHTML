import { Flex, Text, Box } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Flex
        bg="#191717"
        color="#fff"
        w="auto"
        display="flex"
        justifyContent="space-between"
        p="1em 20%"
      >
        <Box display="flex" flexDir="column" gap="8px">
          <Text textTransform="uppercase" fontWeight="bold">
            Redes sociais
          </Text>
          <Box display="flex" alignItems="center">
            <AiFillFacebook />
            <Text>Technoblog</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <AiFillInstagram />
            <Text>Technoblog</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <AiFillTwitterSquare />
            <Text>Technoblog</Text>
          </Box>
        </Box>
        <Box display="flex" flexDir="column">
          <Text textTransform="uppercase" fontWeight="bold">
            Sobre
          </Text>
          <Link to="/QuemSomos">Quem somos</Link>
          <Link to="/FaleConosco">Fale Conosco</Link>
        </Box>
      </Flex>
    </>
  );
}
