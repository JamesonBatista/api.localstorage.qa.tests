const express = require("express");
const swaggerUi = require("swagger-ui-express");
const document = require("./swagger.json");
const { body, validationResult } = require("express-validator");
require("./config/init.js");

// routers
const usersRoutes = require("./routes/users.js");
const productsRoutes = require("./routes/productsRouter.js");
const projectsRoutes = require("./routes/projects.js");
const eventsRoutes = require("./routes/events.js");
const approvalRoutes = require("./routes/approval.js");

const app = express();
app.use(express.json());
const PORT = 3000;

const jwt = require("jsonwebtoken");
const { getData } = require("./localStorage.js");

// router users
app.use("/users", usersRoutes);

// products
app.use("/products", productsRoutes);

// projects
app.use("/projects", projectsRoutes);

// events
app.use("/events", eventsRoutes);

// Approval
app.use("/approval", approvalRoutes);

// challengers
app.get("/validation/level1", (req, res) => {
  const lv = getData("lv1");
  res.status(200).json(lv);
});
app.get("/validation/level2", (req, res) => {
  const lv = getData("lv2");
  res.status(200).json(lv);
});
app.get("/validation/level3", (req, res) => {
  const lv = getData("lv3");
  res.status(200).json(lv);
});
app.get("/validation/level4", (req, res) => {
  const lv = getData("lv4");
  res.status(200).json(lv);
});
app.get("/validation/level5", (req, res) => {
  const lv = getData("lv5");
  res.status(200).json(lv);
});
app.get("/validation/level6", (req, res) => {
  const lv = getData("lv6");
  res.status(200).json(lv);
});
app.get("/validation/level7", (req, res) => {
  const lv = getData("lv7");
  res.status(200).json(lv);
});
app.get("/validation/level8", (req, res) => {
  const lv = getData("lv8");
  res.status(200).json(lv);
});
app.get("/validation/level9", (req, res) => {
  const lv = getData("lv9");
  res.status(200).json(lv);
});
app.get("/validation/level10", (req, res) => {
  const lv = getData("lv10");
  res.status(200).json(lv);
});

// token
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Simulação de validação de usuário
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = `Bearer ${generateToken(user)}`;
    res.status(201).json({ token });
  } else {
    res.status(401).send({ error: "Credenciais inválidas" });
  }
});

app.post("/login-headers", (req, res) => {
  const { username, password } = req.body;
  
if(!req.headers['authorization'] || !req.header['authorization']){
  return res.status(401).json({message: "not authorization"})
}
  // Simulação de validação de usuário
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = `Bearer ${generateToken(user)}`;
    res.status(201).json({ token });
  } else {
    res.status(401).send({ error: "Credenciais inválidas" });
  }
});

// token hard
app.post("/login-hard", (req, res) => {
  const { username, password } = req.body;

  // Simulação de validação de usuário
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = `Bearer ${generateToken(user)}`;
    const _token = {
      data: [
        {
          form: [
            {
              cam: [
                {
                  in: [
                    {
                      gen: [
                        {
                          form_token: [
                            {
                              in_token: [
                                {
                                  gen_token: [
                                    {
                                      refresh: [
                                        {
                                          bearer: [
                                            {
                                              refresh_token: [
                                                {
                                                  show: {
                                                    token: token,
                                                    message:
                                                      "Achou que seria fácil né chegar no token ..hahaha",
                                                  },
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
    res.status(201).json(_token);
  } else {
    res.status(401).send({ error: "Credenciais inválidas" });
  }
});
/// swagger
app.use("/api", swaggerUi.serve, swaggerUi.setup(document));
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
  console.log("Dados de usuários carregados no localStorage.");
  console.log(`Swagger docs available at http://localhost:${PORT}/api`);
});

const users = [
  { id: 1, username: "admin", password: "admin" }, // Usuário exemplo
];
const secretKey = "your_secret_key";
function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
  };
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
}
