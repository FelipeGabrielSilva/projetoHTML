import { Flex, Box, Text } from "@chakra-ui/react";

export default function QuemSomos() {
  return (
    <Flex flexDir="column" w="100%" h="auto" bg="#427D9D">
      <Box display="flex" flexDir="column" w="70%" p="5em" gap="1em">
        <Text fontSize="2xl" fontWeight="bold" textAlign="justify" gap="8px">
          Na [Nome da Sua Empresa], nossa história é marcada por uma dedicação
          implacável à excelência e uma paixão inabalável por atender às
          necessidades de nossos clientes. Desde [ano de fundação], temos
          trilhado um caminho de constante evolução e crescimento, consolidando
          nossa reputação como líderes em [área de atuação] e como parceiros de
          confiança em nossa indústria.
        </Text>
        <Text fontSize="xl" textAlign="justify">
          Na [Nome da Sua Empresa], nossa história é marcada por uma dedicação
          implacável à excelência e uma paixão inabalável por atender às
          necessidades de nossos clientes. Desde [ano de fundação], temos
          trilhado um caminho de constante evolução e crescimento, consolidando
          nossa reputação como líderes em [área de atuação] e como parceiros de
          confiança em nossa indústria.
        </Text>
        <Text fontSize="xl" textAlign="justify">
          Visualizamos um mundo onde a inovação tecnológica e a excelência
          operacional se fundem para criar um ambiente onde as possibilidades
          são infinitas. Na [Nome da Sua Empresa], estamos determinados a sermos
          pioneiros nesse futuro.
        </Text>
        <Text fontSize="xl" textAlign="justify">
          Nossa equipe é o coração da [Nome da Sua Empresa]. Composta por
          profissionais apaixonados e experientes, estamos unidos por nossa
          visão e compromisso com a excelência. Somos movidos pela determinação
          de superar desafios e de levar nossa empresa e nossos clientes a novas
          alturas.
        </Text>
        <Text fontSize="xl" textAlign="justify">
          Agradecemos por nos escolher como seu parceiro. Na [Nome da Sua
          Empresa], estamos ansiosos para escrever o próximo capítulo de nossa
          história de sucesso, junto com você. Seja bem-vindo à nossa jornada!
        </Text>
      </Box>
    </Flex>
  );
}
