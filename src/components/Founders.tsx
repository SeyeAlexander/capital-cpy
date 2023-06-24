import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Circle,
  Center,
  Divider,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";

const Founders = () => {
  return (
    <Container maxW='8xl'>
      <Flex justify='center' pt='150px' w='full' pb='80px'>
        <VStack w='92%'>
          <HStack
            spacing='18px'
            justify='space-around'
            fontSize='12px'
            fontFamily='Thin'
            fontWeight='bold'
            px='20px'
            py='9px'
            borderRadius='10px'
            bg='#1A1A1ACC'
            borderBottom='1px'
            borderColor='#8E8C87'
            color='white'
            mb='25px'
            boxShadow='2xl'
            _hover={{ cursor: "pointer" }}
            transition='ease-in-out all 0.4s'
          >
            <Text>CAPITAL</Text>
            <Text>FOUNDER</Text>
            <Text>SERIES</Text>
            <Image src='/arrow.webp' alt='Arrow icon' width={15} height={15} />
          </HStack>

          <Text w='80%' textAlign='center' fontSize='70px' lineHeight='80px' color='white'>
            Banking for the needs of today's founders
          </Text>

          <HStack justify='space-between' w='90%' pt='50px' pb='80px'>
            <VStack w='30%' align='flex-start' spacing='15px'>
              <Box
                w='full'
                h='500px'
                bgImage='/founder1.webp'
                bgRepeat='none'
                bgPos='center'
                bgSize='cover'
              ></Box>

              <Box lineHeight='30px'>
                <Text fontSize='20px' color='white'>
                  Roshan Patel
                </Text>
                <Text fontSize='20px' color='#8E8C87'>
                  Founder of Walnut
                </Text>
              </Box>
            </VStack>

            <VStack w='30%' align='flex-start' spacing='15px'>
              <Box
                w='full'
                h='500px'
                bgImage='/founder2.webp'
                bgRepeat='none'
                bgPos='center'
                bgSize='cover'
              ></Box>

              <Box lineHeight='30px'>
                <Text fontSize='20px' color='white'>
                  Devin Lewtan
                </Text>
                <Text fontSize='20px' color='#8E8C87'>
                  Co-Founder of Mad Realities
                </Text>
              </Box>
            </VStack>

            <VStack w='30%' align='flex-start' spacing='15px'>
              <Box
                w='full'
                h='500px'
                bgImage='/founder3.webp'
                bgRepeat='none'
                bgPos='center'
                bgSize='cover'
              ></Box>

              <Box lineHeight='30px'>
                <Text fontSize='20px' color='white'>
                  Megan Duong
                </Text>
                <Text fontSize='20px' color='#8E8C87'>
                  Co-Founder of Plot
                </Text>
              </Box>
            </VStack>
          </HStack>

          <Box py='70px'>
            <Circle
              size='370px'
              bg='red.500'
              _hover={{ cursor: "pointer" }}
              transition='ease-in-out all 0.4s'
            >
              <Text fontSize='90px' color='white'>
                Start
              </Text>
            </Circle>
          </Box>

          <HStack fontWeight='bold' fontSize='12px' color='#8E8C87' pb='10px'>
            <Text _hover={{ cursor: "pointer" }} transition='ease-in-out all 0.4s'>
              Terms of Use
            </Text>

            <Center height='13px' opacity='0.8' px='10px'>
              <Divider orientation='vertical' />
            </Center>

            <Text _hover={{ cursor: "pointer" }} transition='ease-in-out all 0.4s'>
              Privacy policy
            </Text>

            <Center height='13px' opacity='0.8' px='10px'>
              <Divider orientation='vertical' />
            </Center>

            <Text _hover={{ cursor: "pointer" }} transition='ease-in-out all 0.4s'>
              Contact
            </Text>
          </HStack>

          <Text
            w='57%'
            textAlign='center'
            fontWeight='bold'
            fontSize='12px'
            lineHeight='14px'
            color='#8E8C87'
          >
            Capital Software & Services Inc. is a financial technology company and is not a bank.
            Banking services provided by Blue Ridge Bank, N.A.; Member FDIC. The Capital Software &
            Services Inc. Visa® Debit Card is issued by Blue Ridge Bank, N.A. pursuant to a license
            from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted.
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Founders;
