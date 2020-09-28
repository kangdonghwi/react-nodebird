const express = require("express");
const path = require("path");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const postsRouter = require("./routes/posts");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");

const db = require("./models");
const passportConfig = require("./passport");

dotenv.config();

const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

passportConfig();

app.use(
  cors({
    origin: true,
    credentials: true, //쿠키 전달
  })
);

app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //form을 처리.프론트에서 보낸걸 body.req로 넣어준다.

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/", (req, res) => {
  res.send("hello api");
});

app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/posts", postsRouter);
app.listen(3065);
