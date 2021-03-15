const ghpages = require("gh-pages");
require("dotenv").config();

ghpages.clean();
ghpages.publish(
  "dist",
  {
    user: {
      name: "jamesinaxx",
      email: "grassojames5@gmail.com",
    },
    message: "Built and deployed github pages",
  },
  function (err) {
    console.error(err);
  }
);
