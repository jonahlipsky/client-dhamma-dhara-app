export const getAllTodos = () => (
  fetch(process.env.REACT_APP_API_ROOT_URL + '/todos')
    .then(response => response.json())
    .then(data => {
      return data
    })
)