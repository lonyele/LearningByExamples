import * as passport from 'passport';

const FacebookStrategy = require('passport-facebook').Strategy;

export default () => {
  console.log("facebook passport Init");
  passport.use(new FacebookStrategy(
    {
      clientID: '1732144017087243',
      clientSecret: 'f5ac4c92c9e65da89d2f492c4be90244',
      callbackURL: "/auth/facebook/callback"
    },
    function(accessToken: any, refreshToken: any, profile: any, done: any) {
      console.log("facebook callback 잘들어옴? ", accessToken, refreshToken, profile);
      done(null, profile);
    }
  ));

  passport.serializeUser(function(user: any, done: any) {
    if (user.provider && user.provider === 'facebook') {
      console.log("facebook serializerUser", user);
    } else if (user.strategy && user.strategy === 'localStrategy') {
      console.log("local의 serializeUser", user);  
    } else {
      console.log("else serializerUser  what????? ", user);
    }
    
    done(null, user);
  });
  
  passport.deserializeUser(function(user: any, done: any) {
    if (user.provider && user.provider === 'facebook') {
      console.log("facebook deserializeUser", user);
    } else if (user.strategy && user.strategy === 'localStrategy') {
      console.log("local의 deserializeUser", user);  
    } else {
      console.log("else deserializeUser  what????? ", user);
    }
    
    done(null, user);
  });
}




// 이거 안됨. 401 에러 뜸. callbackUrl없이 하면 깔끔하긴한데
//var FacebookTokenStrategy = require('passport-facebook-token');
// passport.use(new FacebookTokenStrategy({
//   clientID: '1732144017087243',
//   clientSecret: 'f5ac4c92c9e65da89d2f492c4be90244'
// }, function(accessToken: any, refreshToken: any, profile: any, done: any) {
//   console.log("facebook callback 잘들어옴? ", accessToken, refreshToken, profile);
//   done(null, profile);
// }
// ));