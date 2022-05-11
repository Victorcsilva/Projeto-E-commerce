
import {
    Box,
    Flex, 
    Spacer,
  } from '@chakra-ui/react';
  import Boxfruit from './Boxfruit';

  export default function Main() {
    
    return (
     <Flex  display='flex' h='1000' className='backmain'>
              <Boxfruit/>
              <Boxfruit/>
              <Boxfruit/>
              <Boxfruit/>
              <Boxfruit/>
              <Boxfruit/>
              <Box w='2040px' h='990px' bg='green '>
    2</Box>

     </Flex>
        
      
    )
  }
