const { deepClone, canPlace, placeResource } = require("./utils");

function basicPlacement(levelData, resourcesMap) {
  const zoo = deepClone(levelData.zoo);
  const usedResources = [];
  const resourceIds = levelData.resources.filter(id => id !== 1); // ignore pathway

  let row = 0, col = 0;

  for (const resId of resourceIds) {
    const resource = resourcesMap[resId];
    const orientation = resource.orientations[0]; // Just use 1st orientation for now

    // Naive placement scan
    for (let r = 0; r < zoo.length; r++) {
      for (let c = 0; c < zoo[0].length; c++) {
        if (canPlace(zoo, r, c, orientation.cells)) {
          placeResource(zoo, r, c, orientation.cells, resId);
          usedResources.push(resId);
          break;
        }
      }
    }
  }

  return { zoo, usedResources };
}

module.exports = { basicPlacement };