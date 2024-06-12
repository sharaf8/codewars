function isObject(object) {
    return object !== null && typeof object === 'object';
  }
  
  function extend(...args) {
    const result = {};
  
    for (const obj of args) {
      if (isObject(obj)) {
        for (const key in obj) {
          if (obj.hasOwnProperty(key) && !result.hasOwnProperty(key)) {
            result[key] = obj[key];
          }
        }
      }
    }
  
    return result;
  }
  