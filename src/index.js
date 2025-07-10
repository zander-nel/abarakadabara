const fs = require("fs");
const path = require("path");
const { basicPlacement } = require("./planner");

const levelData = require("../data/level1.json");
const resources = require("../data/resources.json");

// Map resources by ID for fast access
const resourcesMap = {};
resources.resources.forEach(r => {
  resourcesMap[r.resource_id] = r;
});

const result = basicPlacement(levelData, resourcesMap);

const output = {
  level: levelData.level,
  zoo_size: levelData.zoo_size,
  resources: levelData.resources,
  zoo: result.zoo
};

fs.writeFileSync(
  path.join(__dirname, "../output/level1-output.json"),
  JSON.stringify(output, null, 2)
);

console.log("✅ Zoo planning complete. Output saved.");
