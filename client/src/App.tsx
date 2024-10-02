import { Button, Container, Stack } from '@chakra-ui/react'
import Navbar from './components/navbar'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

function App() {

  return (
    <Stack h="100vh" w="100vw" justify="center" align="center">
      <Navbar/>
      <Container>
        <TodoForm/>
        <TodoList/>
      </Container>  
    </Stack>
    )
}

export default App
