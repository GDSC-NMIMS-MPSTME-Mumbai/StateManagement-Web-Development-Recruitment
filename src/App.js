import { useState, useEffect } from 'react';
import { Button, Input, Box, SimpleGrid,Center } from '@chakra-ui/react'

function App() {

  const [data, setData] = useState([{}]);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then((apiData) => {
        setData(apiData);
      })
  }

  const deleteCard = (id) => {
    setData((prevData) => {
      return (prevData.filter((obj) => obj.id != id))
    })
  }

  const handleDelete = () => {
    const id = document.getElementById('id').value;
    deleteCard(id);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <Center paddingTop="10" bg="teal.50">
        <Input bg="white" marginLeft="24" marginRight="4" width="72" type="text" id="id" name="id" placeholder="Enter id of the object to delete"></Input>
        <Button colorScheme="red"  onClick={handleDelete}>Delete</Button>
      </Center>

      <SimpleGrid
        margin="auto"
        bg="teal.50"
        spacing="8"
        p="10"
        rounded="lg"
        color="black"
      >
        {data.map((d) => <Box margin="auto" width="72" boxShadow="lg" p="6" rounded="md" bg="white">
          <p>Title: {d.title}</p>
          <p>Id: {d.id}</p>
          <p>UserId: {d.userId}</p>

        </Box>)}
      </SimpleGrid>
    </div>
  );
}

export default App;
