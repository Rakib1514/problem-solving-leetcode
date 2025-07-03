(init = 5), (calls = ["increment", "reset", "decrement"]);

var createCounter = function (init) {
  let x = init;

  return {
    increment: () => {
      x++;
      return x;
    },
    reset: () => {
      x = init;
      return x;
    },

    decrement: () => {
      x--;
      return x;
    },
  };
};

const counter = createCounter(5);

const result = [counter.increment(), counter.reset(), counter.decrement()];

console.log(result);

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 *
 *
 * Output: [6,5,4]
 */
