import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { Model } from "sequelize";
import { Sequelize, type ModelCtor } from "sequelize-typescript";

dotenv.config();

export const db = new Sequelize(process.env.POSTGRES_PRIVATE_URL as string, {
  dialect: "postgres",
  timezone: "-06:00",
  logging: false,
});

const modelsPath = path.join(__dirname, "models");

const modelDirs = fs
  .readdirSync(modelsPath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const loadModels = async (dirs: string[], modelsDir: string) => {
  const models: ModelCtor[] = [];
  for (const dir of dirs) {
    try {
      const modelIndexPath = path.join(modelsDir, dir, "index.ts");
      const modelModule = await import(modelIndexPath);
      const model = modelModule.default;

      if (model && model.prototype instanceof Model) {
        models.push(model);
      } else {
        console.error(
          `Directory ${dir} does not export a valid model with the name ${dir}`
        );
      }
    } catch (err) {
      console.error(`Error importing model from directory ${dir}:`, err);
    }
  }
  db.addModels(models);
};

const initializeSequelize = async () => {
  try {
    await loadModels(modelDirs, modelsPath);
    await db.authenticate();
    console.log("Database connected successfully.");
  } catch (err) {
    console.error("Error initializing Sequelize:", err);
  }
};

initializeSequelize();
