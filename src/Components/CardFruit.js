import {
Box,
Button,
NumberInput,
NumberInputField,
NumberInputStepper,
 NumberIncrementStepper,
 NumberDecrementStepper,
Image,
  } from '@chakra-ui/react';
  import {useCart} from 'react-use-cart';
const CardFruit = (props) =>{
  const {addItem} = useCart ();

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={props.image} alt={props.image} />
        <Box>
          R${props.price}
        </Box>

      <Box display='flex' mt='2' alignItems='center'>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {props.title}
        </Box>
        <Box>
          {props.des}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>
      </Box>
      <NumberInput defaultValue={0} min={0} 
>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
      <Button onClick={() =>addItem (props.item)}
   size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
>
  Adicionar
</Button>
    </Box>
  )
}    

export default CardFruit