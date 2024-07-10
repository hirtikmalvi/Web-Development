const sessionIdToUserMapping = new Map();

const setUser = (id, user) => {
  sessionIdToUserMapping.set(id, user);
};

const getUser = (id) => {
  return sessionIdToUserMapping.get(id);
};

module.exports = { setUser, getUser };
