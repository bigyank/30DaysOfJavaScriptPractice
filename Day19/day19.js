const notaNum = 2;

function checkifNum(num) {
  if (isNaN(num)) {
    throw new Error('Not a number');
  }
  return 'well done a num';
}
const value = checkifNum(notaNum);
console.log(value);

// finally for cleaning up
function finallyCheck() {
  let contex = null;

  const topass = function(contxValue) {
    if (contxValue < 5) {
      throw new Error('lower Value');
    }
    return contxValue;
  };

  function withContex(passedValue, callback) {
    const oldContex = contex;
    contex = value;
    try {
      const finalValue = callback(passedValue);
      console.log(finalValue);
    } catch (err) {
      console.log(`Exception ${err} occured`);
    } finally {
      contex = oldContex;
      console.log(contex);
    }
  }
  withContex(4, topass);
}
finallyCheck();

// creating custom Error class

class NoSuchUser extends Error {
  constructor(message) {
    super(message);
    this.name = 'NoSuchUser';
  }
}

async function parseInfo() {
  const usersPromise = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then(ele => ele.json());
  const userName = usersPromise.map(ele => {
    if (!ele.nation) {
      throw new NoSuchUser('These values arent available');
    }
    return ele.nation;
  });
  console.log(userName);
}

try {
  parseInfo();
} catch (err) {
  if (err instanceof NoSuchUser) {
    console.log(err.message);
  }
}
