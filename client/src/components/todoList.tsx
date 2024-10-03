import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import TodoItem from "./todoItem";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../App";

export type Todo = {
	_id: number;
	body: string;
	completed: boolean;
};

const TodoList = () => {
	const { data:todos, isLoading }= useQuery <Todo[]>({
		queryKey: ["todos"],

		queryFn: async () => {
			try{
				const res = await fetch(BASE_URL + "todos");
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Something went wrong!");
				}

				return data||[];
			}catch (error) {
				console.log(error);
			}
			
		},
	})

	return (
		<>
			<Text fontSize={"4xl"} 
						textTransform={"uppercase"} 
						fontWeight={"bold"}
						bgGradient={"linear(to-r, green.400, blue.500, purple.600)"} 
						textAlign={"center"} 
						my={25} 
						ml={-10}
						bgClip={'text'}>
				Today's Tasks
			</Text>
			{isLoading && (
				<Flex justifyContent={"center"} my={4}>
					<Spinner size={"xl"} />
				</Flex>
			)}
			{!isLoading && todos?.length === 0 && (
				<Stack alignItems={"center"} gap='3'>
					<Text fontSize={"xl"} textAlign={"center"} color={"gray.700"} ml={-7}>
						All tasks completed! 🤞
					</Text>
				</Stack>
			)}
			<Stack gap={3}>
				{todos?.map((todo) => (
					<TodoItem key={todo._id} todo={todo} />
				))}
			</Stack>
		</>
	);
};
export default TodoList;