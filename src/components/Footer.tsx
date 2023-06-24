import { Box, Button, Container, Center, Divider, HStack, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex w='100%' position='fixed' left='0' bottom='15px' align='center' justify='center'>
      <Container maxW='8xl'>
        <HStack
          w='92%'
          mx='auto'
          bg='#1A1A1ACC'
          borderRadius='13px'
          justify='space-between'
          pl='16px'
          pr='10px'
          py='8px'
        >
          <HStack spacing='18px'>
            <Link href='/'>
              <Box _hover={{ cursor: "pointer" }} transition='ease-in-out all 0.4s'>
                <Image src='/logo.webp' alt='Footer icon1' width={25} height={25} />
              </Box>
            </Link>

            <Center height='20px' opacity='0.8' px='5px'>
              <Divider orientation='vertical' />
            </Center>

            <Flex
              align='center'
              justify='center'
              p='8px'
              borderRadius='10px'
              bg='black'
              w='32px'
              h='32px'
              _hover={{ bg: "white", cursor: "pointer" }}
              transition='ease-in-out all 0.4s'
            >
              <Image src='/footicon1l.webp' alt='Footer icon2' width={16} height={16} />
            </Flex>

            <Flex
              align='center'
              justify='center'
              p='8px'
              // border='1px'
              // borderColor='gray'
              borderRadius='10px'
              bg='black'
              w='32px'
              h='32px'
              _hover={{ bg: "white", cursor: "pointer" }}
              transition='ease-in-out all 0.4s'
            >
              <Image src='/footicon2l.webp' alt='Footer icon3' width={20} height={20} />
            </Flex>

            <Flex
              align='center'
              justify='center'
              p='8px'
              borderRadius='10px'
              bg='black'
              w='32px'
              h='32px'
              _hover={{ bg: "white", cursor: "pointer" }}
              transition='ease-in-out all 0.4s'
            >
              <Image src='/footicon3l.webp' alt='Footer icon4' width={20} height={20} />
            </Flex>

            <Flex
              align='center'
              justify='center'
              p='8px'
              borderRadius='10px'
              bg='black'
              w='32px'
              h='32px'
              _hover={{ bg: "white", cursor: "pointer" }}
              transition='ease-in-out all 0.4s'
            >
              <Image src='/footicon4l.webp' alt='Footer icon5' width={20} height={20} />
            </Flex>
          </HStack>

          <HStack
            color='#8E8C87'
            spacing='30px'
            fontSize='17px'
            fontFamily='Bold'
            fontWeight='medium'
          >
            <Text _hover={{ color: "white", cursor: "pointer" }} transition='ease-in-out all 0.4s'>
              Twitter
            </Text>
            <Text _hover={{ color: "white", cursor: "pointer" }} transition='ease-in-out all 0.4s'>
              Founders
            </Text>
            <Text _hover={{ color: "white", cursor: "pointer" }} transition='ease-in-out all 0.4s'>
              Team
            </Text>
            <Text _hover={{ color: "white", cursor: "pointer" }} transition='ease-in-out all 0.4s'>
              FAQs
            </Text>

            <Button colorScheme='red' w='88px' borderRadius='9px'>
              <Text>Start</Text>
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Flex>
  );
};

export default Footer;
