import {
    Box,
    Image,
   // NumberInput,
   // NumberInputField,
  //  NumberInputStepper,
  //  NumberIncrementStepper,
  //  NumberDecrementStepper,
  //  Flex, 
    //Spacer,
  } from '@chakra-ui/react';

  export default function Boxfruit() {
    //const {text,image,value1, }
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      title: 'Modern home in city center in the heart of historic Los Angeles',
    }
  
    
    return (
<Box maxW='sm' h='400' borderWidth='10px' overflow='hidden' borderColor={'green'}>
        <Image src={property.imageUrl} alt={property.imageAlt} />
  
   <Box p='6'>
    <Box display='flex' alignItems='baseline'></Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {property.title}
          </Box>
  
    </Box>
</Box>
      
    )
  }



  //<NumberInput defaultValue={15} precision={2} step={0.2} min={0}>
  //             <NumberInputField />
     //              <NumberInputStepper>
        //                 <NumberIncrementStepper />
            //             <NumberDecrementStepper />
                 //  </NumberInputStepper>
               // </NumberInput>