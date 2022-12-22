const pool = require('../pg');

class BlogsModel {
  async testDb() {
    const client = await pool.connect();
    try {
      const sql = `SELECT NOW()`;
      const { rows } = await client.query(sql);
      return rows;
    } catch (err) {
      throw new Error(`An Error found in blog_table ${err}`);
    } finally {
      client.release();
    }
  }

  async getAllBlogs() {
    const client = await pool.connect();
    try {
      const sql = `select id, title, description from blog_table`;
      const { rows } = await client.query(sql);
      return rows;
    } catch (err) {
      throw new Error(`An Error found in blog_table ${err}`);
    } finally {
      client.release();
    }
  }

  async getBlog(id) {
    const client = await pool.connect();
    try {
      const sql = 'select * from blog_table where id=$1';
      const { rows } = await client.query(sql, [id]);
      return rows;
    } catch (err) {
      throw new Error(
        `An Error found while getting blog data from blog_table ${err}`
      );
    } finally {
      client.release();
    }
  }

  async createBlog(title, desc, content) {
    const client = await pool.connect();
    try {
      const sql =
        'INSERT INTO blog_table (title, description, content) VALUES ($1, $2, $3) returning *';
      const { rows } = await client.query(sql, [title, desc, content]);
      return rows;
    } catch (err) {
      throw new Error(`An Error found while inserting blog_table ${err}`);
    } finally {
      client.release();
    }
  }

  async deleteBlog(id) {
    const client = await pool.connect();
    try {
      const sql = 'delete from blog_table where id=$1 returning *';
      const { rows } = await client.query(sql, [id]);
      return rows;
    } catch (err) {
      throw new Error(
        `An Error found while Deleting row from blog_table ${err}`
      );
    } finally {
      client.release();
    }
  }
}

module.exports = BlogsModel;
