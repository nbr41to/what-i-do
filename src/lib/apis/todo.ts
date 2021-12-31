export const postTodo = async () => {
  const response = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Hello World',
      completed: false,
    }),
  });
  return response.json();
};
