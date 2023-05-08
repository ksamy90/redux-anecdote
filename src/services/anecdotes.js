import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  console.log(response.data);
  return response.data;
};

const editNote = async (id) => {
  const data = (await axios.get(baseUrl)).data;
  const findDote = data.find((note) => note.id === id);
  const object = { ...findDote, votes: findDote.votes + 1 };
  const response = await axios.put(`${baseUrl}/${id}`, object);
  return response.data;
};

export default { getAll, createNew, editNote };
