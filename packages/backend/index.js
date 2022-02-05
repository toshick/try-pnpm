const { v4: uuidv4 } = require('uuid');
const dayjs = require('dayjs');
const bbb = () => {
  console.log('------------------------------------------------------------');
  console.log('BBB!', uuidv4());
  console.log('dayjs!', dayjs().toString());
  console.log('------------------------------------------------------------\n');
};

exports.bbb = bbb;
