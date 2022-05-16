
import {
    Box,
    Flex, 
  } from '@chakra-ui/react';
  import CardFruit from './CardFruit';
  import data from './Fruit';
  import Cart from './Cart';

  export default function Main() {
    return (
     <Flex  display='flex' h='1000' className='backmain'>
           {data.fruitsdata.map((item,index)=>{
                return(
                  <CardFruit
                   defaultValue={item.price} 
                   image={item.image} 
                   title={item.title} 
                   desc={item.desc} 
                   price={item.price} 
                   item={item} 
                   key={index}/>)
               
           })}

              
              <Box w='2040px' h='990px' bg='green '>

      <Cart></Cart>          
    </Box>

     </Flex>
        
      
    )
  }
