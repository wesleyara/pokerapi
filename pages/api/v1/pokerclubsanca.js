import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import fs from "fs";

import server from "../../../data/server.json";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);

  const response = {
    id: server.length + 1,
    pontuation: req.body.pontuation,
    date: req.body.date,
    game: Number(req.body.game) < 10 ? `0${Number(req.body.game)}` : req.body.game,
  };

  const { method } = req;

  const validGame = server.filter(
    (item) => item.game === response.game
  );

  if (method === "POST") {
    if (validGame.length > 0) {
      res.status(400).json({
        error: "Já existe um registro para essa data",
      });
    } else {
      const concat = [...server, response];

      fs.writeFile("data/server.json", JSON.stringify(concat), (err) => {
        err && console.log(err);
      });
    }
  }

  res.json(server);
}
