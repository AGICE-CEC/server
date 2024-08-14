import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { Model } from "sequelize";
import { Sequelize, type ModelCtor } from "sequelize-typescript";
import { up as migrateUp } from './migrations/001_add_faq_data';

dotenv.config();

export const db = new Sequelize(process.env.POSTGRES_PRIVATE_URL as string, {
  dialect: "postgres",
  timezone: "-06:00",
  logging: false,
});

const modelsPath = path.join(__dirname, "models");

const modelDirs = fs
  .readdirSync(modelsPath, { withFileTypes: true })
  .filter((dirent) => dirent.isFile())
  .map((dirent) => dirent.name);

const loadModels = async (dirs: string[], modelsDir: string) => {
  const models: ModelCtor[] = [];
  for (const dir of dirs) {
    console.log(dir)
    try {
      const modelPath = path.join(modelsDir, dir);  // Construct the path directly from the filename
      const modelModule = await import(modelPath);  // Import the module
      const model = modelModule.default;

      if (model && model.prototype instanceof Model) {
        models.push(model);  // Add the model to the array if valid
      } else {
        console.error(
          `File ${dir} does not export a valid model`
        );
      }
    } catch (err) {
      console.error(`Error importing model from directory ${dir}:`, err);
    }
  }
  console.log(models)
  db.addModels(models);
};

export const initializeSequelize = async () => {
  console.log(modelDirs)
  try {
    await loadModels(modelDirs, modelsPath);
    await db.authenticate();
    await db.sync({ force: false }); // Use force: true to drop and recreate the tables
    console.log("Database connected successfully.");

    //run migrations
    await  migrateUp(db.getQueryInterface());
    console.log('Migration run successfully');
    
  } catch (err) {
    console.error("Error initializing Sequelize:", err);
  }
};
