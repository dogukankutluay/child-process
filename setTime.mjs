var ids = {};
var id = 0;
export default {
  cpCb: (message) => ids[message.id](message),
  setTime: (childProcess, duration, cb) => {
    const nowId = id++;
    childProcess.send({ duration, id: nowId });
    ids[nowId] = cb;
  },
};
