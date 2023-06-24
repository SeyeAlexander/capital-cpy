import { Box, Container, VStack, Text, HStack, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Access = () => {
  return (
    <Box bgColor='#EFECE6' overflow='hidden'>
      <Container maxW='8xl' h='1100px' py='50px'>
        <Flex justify='center' w='full'>
          <Box w='92%'>
            <VStack align='flex-start' w='500px' spacing='30px'>
              <Text fontSize='90px' lineHeight='100px' color='black'>
                Capital wherever you are
              </Text>

              <Text fontSize='20px' color='#8E8C87'>
                Access your Capital account on iOS and web.
              </Text>

              <Image src='/appstore.webp' alt='appstore icon' width={160} height={100} />
            </VStack>

            <HStack w='200%' align='flex-end' spacing='-130px' mt='-350px' ml='-50px'>
              <Image src='/iphone.webp' alt='iphone icon' width={530} height={700} />
              <Image src='/ipad.webp' alt='ipad icon' width={1500} height={1000} />
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Access;
