var express =require('express'); 
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var cors = require('cors');



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(cors());
const PORT = 9000

passport.use(new FacebookStrategy({
    clientID: '1732144017087243',
    clientSecret: 'f5ac4c92c9e65da89d2f492c4be90244',
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("facebook callback 잘들어옴? ", accessToken, refreshToken, profile);
    done(null, profile);
  }
));
passport.use(new GoogleStrategy({
    clientID: '560783833607-k5lvun9d4ghh3sbu4ed0ttcen2psks3r.apps.googleusercontent.com',
    clientSecret: 'pDtk_YvBhlmAFoLWFc-SUQsI',
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("google callback 잘들어옴? ", accessToken, refreshToken, profile);
    done(null, profile);
  }
));
passport.serializeUser(function(user, done) {
  console.log("serializeUser")
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log("deserializeUser")
  done(null, user);
});

app.use(passport.initialize());
//app.use('/', express.static('build'))

///// 테스트 middleware
app.use('/hul/what', (req, res, next) => {
  console.log("/hul/what 들어는 오냐..");
  res.send({ holly: '/hul/what crap'})
  next();
})
app.use('/whereever', (req, res, next) => {
  console.log("/whereever 들어는 오냐..");
  res.send({ holly: '/wherever 되네'})
  next();
})

///// 페북
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook'), 
  (req, res) => {
    console.log("/auth/facebook/callback 콜백", req.user);
    res.send({ result: "facebook 잘됨", req: req.body, user: req.user});
  }
);

///// 구글
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
app.get('/auth/google/callback', passport.authenticate('google'),
  (req, res) => {
    console.log("/auth/google/callback 콜백", req.user);
    //express.static(__dirname + 'test.js')
    res.sendFile('test.html', { root : __dirname});
    return;
    res.send({ result: "google 잘됨", req: req.body, user: req.user});
  }
);

app.listen(PORT, () => console.log(
  `Server is now running on http://localhost:${PORT}`
));