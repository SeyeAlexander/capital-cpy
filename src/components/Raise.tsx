import { Box, Container, Flex, Text, VStack, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, useAnimation, isValidMotionProp, useMotionValue, useScroll } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// const TextSection = ({ text }: { text: string }) => {

// const texts = ["Section 1", "Section 2", "Section 3", "Section 4"];

// const Raise = () => {
//   const [index, setIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const controls = useAnimation();

//   useEffect(() => {
//     if (!containerRef.current) {
//       return;
//     }

//     const handleScroll = () => {
//       if (containerRef.current) {
//         const containerHeight = containerRef.current.offsetHeight;
//         const newIndex = Math.floor(containerRef.current.scrollTop / containerHeight);
//         setIndex(newIndex);
//       }
//     };

//     containerRef.current.addEventListener("scroll", handleScroll);

//     return () => {
//       if (!containerRef.current) {
//         return;
//       }
//       containerRef.current.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (!containerRef.current) {
//       return;
//     }

//     controls.start({
//       y: index * -100,
//       transition: { duration: 0.5 },
//     });
//   }, [controls, index]);

//   return (
//     <Box ref={containerRef} height='100vh' overflow='scroll'>
//       {texts.map((text, i) => (
//         <motion.div
//           key={i}
//           animate={controls}
//           initial={{ y: 100 }}
//           style={{
//             width: "100%",
//             height: "100vh",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transform: `translateY(${100 * i}%)`,
//           }}
//         >
//           <Box>
//             <Text fontSize='2xl' textAlign='center' color='white'>
//               {text}
//             </Text>
//           </Box>
//         </motion.div>
//       ))}
//     </Box>
//   );
// };

//   return (
//     <ChakraBox
//       animate={{ opacity: 1 }}
//       initial={{ opacity: 0 }}
//       //@ts-ignore
//       transition={{ duration: 1 }}
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Box>
//         <Text fontSize='2xl' textAlign='center' color='white'>
//           {text}
//         </Text>
//       </Box>
//     </ChakraBox>
//   );
// };

const Raise = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sect = ["Section 1", "Section 2", "Section 3", "Section 4"];
  const [index, setIndex] = useState(0);
  const [section, setSection] = useState(sect[0]);

  const ChakraBox = chakra(motion(Box), {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const handleScroll = () => {
    // const newIndex = Math.floor(window.scrollY / window.innerHeight);

    if (containerRef.current) {
      const newIndex = Math.floor(
        containerRef.current.scrollTop / containerRef.current.offsetHeight
      );
      setIndex(newIndex);
      setSection(sect[newIndex]);
    }
  };

  return (
    <ChakraBox
      height='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
      overflow='hidden'
      ref={containerRef}
      onWheel={handleScroll}
    >
      <Text fontSize='2xl' textAlign='center' color='white'>
        {section}
      </Text>
    </ChakraBox>
  );
};

export default Raise;

// const Raise = () => {
//   const ChakraStack = chakra(motion(VStack), {
//     shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
//   });

//   const ChakraText = chakra(motion(Text), {
//     shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
//   });

//   return (
//     <Container maxW='8xl' h='100vh'>
//       <Flex justify='center' w='full' h='full' pt='50px' pb='80px'>
//         <Flex gap='55px' align='flex-end' direction='row' w='92%' h='full'>
//           <VStack justify='center' borderRadius='15px' bg='#EFECE6' p='30px' w='45%' h='full'>
//             <Text>VIDEO</Text>
//           </VStack>

//           <VStack align='flex-start' w='50%'>
//             <VStack align='flex-start' w='full'>
//               <Text fontSize='90px' color='#EFECE6'>
//                 Raise
//               </Text>

//               <Text pb='10px' w='301px' fontSize='20px' color='#EFECE6'>
//                 Automate the entire fundraising process from open to close
//               </Text>

//               <Text pb='10px' fontSize='20px' w='470px' color='#EFECE6' opacity='0.8'>
//                 Set the details of your round, generate a SAFE*, choose fiat or crypto (or both),
//                 invite investors, sign all documents, immediately send or spend funds from your new
//                 Capital business checking account.
//               </Text>

//               <Text fontSize='12px' color='#EFECE6' opacity='0.8'>
//                 * All rounds use the standard Y Combinator SAFE
//               </Text>
//             </VStack>

//             <VStack align='flex-start' w='full'>
//               <Text fontSize='90px' color='#EFECE6'>
//                 Earn
//               </Text>

//               <Text pb='10px' w='301px' fontSize='20px' color='#EFECE6'>
//                 Fund your account by raising on Capital or transferring funds from an existing
//                 external account
//               </Text>

//               <Box pb='10px' fontSize='20px' w='470px' color='#8E8C87'>
//                 <Text as='span'>
//                   Every founder on Capital gets an FDIC-insured business checking account that{" "}
//                   <Text as='u' color='white'>
//                     earns 4% APY,
//                   </Text>{" "}
//                   with standard account and routing numbers, to store and deposit unlimited funds,
//                   for free.
//                 </Text>
//               </Box>
//             </VStack>

//             <VStack align='flex-start' w='full'>
//               <Text fontSize='90px' color='#EFECE6'>
//                 Spend
//               </Text>

//               <Text pb='10px' w='340px' fontSize='20px' color='#EFECE6'>
//                 Activate a virtual debit card with just a tap to spend your funds anywhere
//               </Text>

//               <Text pb='10px' fontSize='20px' w='460px' color='#EFECE6' opacity='0.8'>
//                 Founders who bank with Capital can use their funds as soon as they hit their
//                 account. Add your card to ApplePay for faster mobile payment. Be careful, spending
//                 money has never been this easy.
//               </Text>
//             </VStack>

//             <VStack align='flex-start' w='full'>
//               <Text fontSize='90px' color='#EFECE6'>
//                 Send
//               </Text>

//               <Text pb='10px' w='410px' fontSize='20px' color='#EFECE6'>
//                 Build trust with your partners by easily paying them from your Capital bank account
//               </Text>

//               <Text pb='10px' fontSize='20px' w='409px' color='#EFECE6' opacity='0.8'>
//                 Pay contractors and vendors with ease. Just enter the recipient’s details to send
//                 domestic wires or ACH payments, all for free.
//               </Text>
//             </VStack>
//           </VStack>
//         </Flex>
//       </Flex>
//     </Container>
//   );
// };

// export default Raise;
