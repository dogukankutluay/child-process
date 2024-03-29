import createTime from "./setTime.mjs";

export default {
  time: (childProcess) => (req, res) => {
    createTime.setTime(
      childProcess,
      parseInt(req.query.duration),
      (message) => {
        res.send(message);
      }
    );
  },
};
