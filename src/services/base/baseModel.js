const fs = require("fs/promises");

class baseModels {
  setPathDb(pathDb) {
    this.pathDb = pathDb;
  }
  async getAll() {
    try {
      if (this.pathDb) {
        const result = await fs.readFile(this.pathDb, "utf-8");
        return JSON.parse(result);
      } else {
        throw "not set path db";
      }
    } catch (error) {
      throw error;
    }
  }
  async getOne(entityId) {
    try {
      if (this.pathDb) {
        const data = await this.getAll();
        const find = data.find((item) => item.id === entityId);
        return find;
      } else {
        throw "not set path db";
      }
    } catch (error) {
      throw error;
    }
  }
  async create(entity) {
    try {
      if (this.pathDb) {
        const data = await this.getAll();
        data.push(entity);
        await fs.writeFile(this.pathDb, JSON.stringify(data), "utf-8");
        return entity;
      } else {
        throw "not set path db";
      }
    } catch (error) {
      throw error;
    }
  }
  async update(id, entity) {
    try {
      if (this.pathDb) {
        const data = await this.getAll();
        const filteData = data.filter((item) => item.id !== id);
        if (data.length !== filteData.length) {
          filteData.push(entity);
          await fs.writeFile(this.pathDb, JSON.stringify(filteData), "utf-8");
          return filteData;
        }
      } else {
        throw "not set path db";
      }
      return false;
    } catch (error) {
      throw error;
    }
  }
  async deleted(id) {
    try {
      if (this.pathDb) {
        const data = await this.getAll();
        const filteData = data.filter((item) => item.id !== id);
        if (data.length !== filteData.length) {
          await fs.writeFile(this.pathDb, JSON.stringify(filteData), "utf-8");
          return filteData;
        }
      } else {
        throw "not set path db";
      }
      return false;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = baseModels;
