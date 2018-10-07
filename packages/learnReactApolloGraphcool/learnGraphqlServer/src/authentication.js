const HEADER_REGEX = /bearer token-(.*)$/;

/**
 * This is an extremely simple token. In real applications make
 * sure to use a better one, such as JWT (https://jwt.io/).
 */
module.exports.authenticate = async ({headers: {authorization}}, Users) => {
  const email = authorization && HEADER_REGEX.exec(authorization)[1];
  console.warn("여긴 들어오지? email :", email, ",headers :",authorization);
  return email && await Users.findOne({email});
}