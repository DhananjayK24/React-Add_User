let newId = 11;
const addUser = (name, setUsers, users) => {
  const newUser = { id: newId, username: name, nickname: "Waiting..." };
  console.log("ID: " + newId + "  Name: " + name);
  newId++;
  const updatedUsers = [newUser, ...users];
  setUsers(updatedUsers);
};

export default addUser;
