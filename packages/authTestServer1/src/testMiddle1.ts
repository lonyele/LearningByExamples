import * as passport from 'passport';

export const test1 = (req: any, res: any, next: any) => {
  console.log("test1 middleware");
  next()
}


export const test2 = (req: any, res: any, next: any) => {
  console.log("test2 middleware");
  next()
}

export const test3 = (req: any, res: any, next: any) => {
  console.log("test3 middleware");
  next()
}

export const test4 = (req: any, res: any, next: any) => {
  console.log("test4 middleware");
  passport.authenticate('facebook');
  
}