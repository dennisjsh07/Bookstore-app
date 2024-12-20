const zod = require("zod");

const createBook = zod.object({
  title: zod.string(),
  description: zod.string(),
  category: zod.string(),
  trending: zod.boolean(),
  coverImage: zod.string(),
  oldPrice: zod.number(),
  newPrice: zod.number(),
});

module.exports = { createBook };
