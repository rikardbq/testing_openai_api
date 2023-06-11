import { HISTORY } from "./constants";

class ShortTermMemoryBuffer {
  constructor({ key = HISTORY }) {
    this.state = {
      [key]: {}
    }
  }

  get(key) {
    return this.state[key];
  }

  add({ key,  value }) {
    this.state[key] = {
      ...this.state[key],
      ...value,
    }
  }
}


// example history object for user 00012312321
/*
"history_00012312321": {
  human: {
    message: "whatever",
    somethingElse: "whjasdjkasdasd"
  },
  computer: {
    message: "hello world",
    somethingElse: "asdasdasdasdasd",
  }
}
*/

export default ShortTermMemoryBuffer;
