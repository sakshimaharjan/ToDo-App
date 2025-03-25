const db = require("../config/database");

class Todo {
  static async findAll() {
    const [rows] = await db.query("SELECT * FROM todos");
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query("SELECT * FROM todos WHERE id = ?", [id]);
    return rows[0];
  }

  static async create({ title, description, userId }) {
    const [result] = await db.query(
      "INSERT INTO todos (title, description, userId) VALUES (?, ?, ?)",
      [title, description, userId]
    );
    return { id: result.insertId, title, description, userId };
  }

  static async update(id, data) {
    const { title, description, userId } = data;
    await db.query(
      "UPDATE todos SET title = ?, description = ?, userId = ? WHERE id = ?",
      [title, description, userId, id]
    );
    return this.findById(id);
  }

  static async delete(id) {
    await db.query("DELETE FROM todos WHERE id = ?", [id]);
    return { message: "Todo deleted successfully" };
  }
}

module.exports = Todo;
