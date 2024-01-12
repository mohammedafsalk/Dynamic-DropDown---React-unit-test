const db = require("../models");

async function getData(req, res, next) {
  try {
    const { data } = req.params;
    console.log(data);
    let obj = {
      country: db.Countries,
      states: db.States,
      blocks: db.Blocks,
      villages: db.Villages,
      city: db.City,
    };

    if (obj[data.toLowerCase()]) {
      const items = await obj[data.toLowerCase()]?.findAll();

      const values = items.map((item) => item.dataValues);

      return res.json({ success: true, values });
    } else {
      return res.json({ success: false, message: "Item not found" });
    }
  } catch (error) {
    console.log(error.toString());
    next(error);
  }
}

module.exports = { getData };
