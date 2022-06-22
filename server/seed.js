require("dotenv/config");
const { faker } = require("@faker-js/faker");
const Card = require("./models/card");
const mongoose = require("mongoose");
const { totalCount } = require("./utils/constants");

if (process.env.DB_CONNECTION) {
  mongoose.connect(process.env.DB_CONNECTION);

  Card.deleteMany({});

  let count = 0;

  const seedCards = [];

  for (let i = 0; i < totalCount; i++) {
    const card = new Card({
      full_name: faker.fake("{{name.lastName}} {{name.firstName}}"),
      description: faker.lorem.paragraphs(3, "\n"),
      account: faker.finance.account(16),
      account_name: faker.finance.accountName(),
      cvv: faker.finance.creditCardCVV(),
      expires: faker.date.future(8),
      issuer: faker.finance.creditCardIssuer(),
      card_number: faker.finance.creditCardNumber("63[7-9]#-####-####-###L"),
      currency: faker.finance.currencyCode(),
      amount: faker.finance.amount(5, 1056701, 2, "$ "),
      color: faker.color.rgb({ format: "css" }),
    });
    seedCards.push(card);
    if (count >= totalCount) {
      break;
    }
  }

  const seedDB = async () => {
    await Card.deleteMany({});
    await Card.insertMany(seedCards);
  };

  seedDB().then(() => {
    mongoose.connection.close();
    console.log("DB seed done!");
  });
}
