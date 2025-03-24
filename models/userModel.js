let users = [];
let idCounter = 1;  // to simulate auto-increment ID

module.exports = {
  users,
  getNewId: () => idCounter++,
};
