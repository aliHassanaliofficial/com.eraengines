const app = require('../app'); // <-- Import from root ./app.js

// Optional: only listen if you want to override port (usually not needed if app.js does that)
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server ready on port ${port}`);
});
