// ID - 560783833607-rukk381st750ikhrbmgfeo906ijtisu7.apps.googleusercontent.com
// id - 560783833607-rukk381st750ikhrbmgfeo906ijtisu7.apps.googleusercontent.com

// SECRET - WURxft_hKgt-asurJ5chGTUl
//        - WURxft_hKgt-asurJ5chGTUl
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

export default () => {
  console.log("google passport Init");
  passport.use(new GoogleStrategy({
    clientID: '560783833607-rukk381st750ikhrbmgfeo906ijtisu7.apps.googleusercontent.com',
    clientSecret: 'WURxft_hKgt-asurJ5chGTUl',
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("google callback 잘들어옴? ", accessToken, refreshToken, profile);
    done(null, profile);
  }
));
}

