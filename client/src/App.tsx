import { Container, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

export const BASE_URL = "http://localhost:4000/api/"
function App() {

  return (
      <>
        <Navbar/>
        <Stack h="75vh" w="100vw" justify="center" align="center">
          <Container>
            <TodoForm/>
            <TodoList/>
          </Container>  
        </Stack>
      </>
    )
}

export default App
