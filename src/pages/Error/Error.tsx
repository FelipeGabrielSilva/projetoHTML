import { Box, Flex, Text } from "@chakra-ui/react";

export default function Error() {
  return (
    <>
      <Flex w="100%" h="65vh">
        <Box display="flex" h="100%" flexDir="column" p="5em" gap="1em">
          <Text fontSize="3xl" fontWeight="bold">
            Ops, parece que algo de errado! :&#40;
          </Text>

          <Text>Não conseguimos encontrar o que você está procurando.</Text>
        </Box>
      </Flex>
    </>
  );
}
