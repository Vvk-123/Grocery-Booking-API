import app from "./app";
import sequelize from "./db/db";
const PORT = 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
