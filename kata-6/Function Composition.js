function compose(f,g) {
    return function(...args){
      return f(g(...args));
    }
  }
  
  const add = x => x + 1;
  const sq = x => x * x;
  
  const addOneAndaddOneAndSquare  = compose(sq, add);
  