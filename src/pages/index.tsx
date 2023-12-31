import Head from "next/head";
import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Founders from "@/components/Founders";
import Footer from "@/components/Footer";
import Access from "@/components/Access";
import Raise from "@/components/Raise";

const Home = () => {
  return (
    <>
      <Head>
        <title>Capital - The Bank Account for Modern Companies</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box>
        <Box h='1000px' overflowY='hidden'>
          <Container maxW='8xl'>
            <VStack color='white' mt='40px' spacing='0'>
              <HStack justify='center' pb='40px'>
                <Image src='/logo.webp' alt='Company logo' width={28} height={28} />
                <Text fontSize='16px' fontWeight='bold'>
                  CAPITAL
                </Text>
              </HStack>

              <Box>
                <Text textAlign='center' fontSize='99px' lineHeight='110px'>
                  The bank account for modern companies
                </Text>
              </Box>
            </VStack>

            <VStack mt='-70px'>
              <Image src='/ipad.webp' alt='Product banner' width={1400} height={100} />
            </VStack>
          </Container>
        </Box>

        <Box bgColor='#EFECE6' w='full'>
          <Container maxW='8xl'>
            <VStack py='60px' spacing='20px'>
              <Text w='1250px' textAlign='center' fontSize='90px' lineHeight='110px' color='black'>
                Earn 4% APY on Capital checking accounts
              </Text>

              <Text w='550px' textAlign='center' fontSize='32px' lineHeight='40px' color='#8E8C87'>
                A free, high-yield bank account with automated fundraising built right-in.
              </Text>

              <HStack w='500px' justify='space-around' pt='40px'>
                <Box opacity='0.4' _hover={{ opacity: "0.6" }} transition='ease-in-out all 0.2s'>
                  <Image src='/icon1.webp' alt='Product icon1' width={30} height={30} />
                </Box>
                <Box opacity='0.4' _hover={{ opacity: "0.6" }} transition='ease-in-out all 0.2s'>
                  <Image src='/icon2.webp' alt='Product icon2' width={30} height={30} />
                </Box>
                <Box opacity='0.4' _hover={{ opacity: "0.6" }} transition='ease-in-out all 0.2s'>
                  <Image src='/icon3.webp' alt='Product icon3' width={170} height={170} />
                </Box>
                <Box opacity='0.4' _hover={{ opacity: "0.6" }} transition='ease-in-out all 0.2s'>
                  <Image src='/icon4.webp' alt='Product icon4' width={45} height={45} />
                </Box>
                <Box opacity='0.4' _hover={{ opacity: "0.6" }} transition='ease-in-out all 0.2s'>
                  <Image src='/icon5.webp' alt='Product icon5' width={30} height={30} />
                </Box>
              </HStack>

              <Text
                pt='15px'
                w='50%'
                textAlign='center'
                fontFamily='Bold'
                fontSize='12px'
                fontWeight='bold'
                color='#8E8C87'
                opacity='0.6'
              >
                CAPITAL CUSTOMERS
              </Text>
            </VStack>
          </Container>
        </Box>

        <Raise />
        <Access />
        <Founders />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
