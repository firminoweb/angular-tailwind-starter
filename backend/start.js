const app = require('./index.js');
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
