const Card = require("../models/card");
const { totalCount } = require("../utils/constants");

exports.findAll = (req, res) => {
  const perPage = req.query.per || 10;
  const page = req.query.page || 1;
  const search = req.query.search || '';
  let total_count = totalCount;

  const searchRule = { $regex: search, $options: "i" };
  const condition = search ? { $or: [
      { full_name: searchRule },
      { card_number: searchRule }
    ] } : {};

  Card.count({}, (err, count) => {
    total_count = count;
  });
  Card.find(condition, null, { skip: parseInt(page) === 1 ? 0 : perPage * page, limit: perPage })
    .then((data) => {
      res.send({ cards: data, meta: { page, total_count } });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};

exports.findById = (req, res) => {
  Card.findById({ _id: req.params.id }, req.body)
    .then((data) => {
      res.send({ card: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
