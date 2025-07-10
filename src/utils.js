function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  function canPlace(zoo, row, col, cells) {
    return cells.every(([dr, dc]) => {
      const r = row + dr;
      const c = col + dc;
      return (
        r >= 0 &&
        c >= 0 &&
        r < zoo.length &&
        c < zoo[0].length &&
        zoo[r][c] === 1
      );
    });
  }
  
  function placeResource(zoo, row, col, cells, id) {
    cells.forEach(([dr, dc]) => {
      zoo[row + dr][col + dc] = id;
    });
  }
  
  module.exports = { deepClone, canPlace, placeResource };
  