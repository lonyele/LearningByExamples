import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ post }) => (
  <div>
    <a href="/blog/">{'<'} Back</a>
    {/* <Link to="/blog/">{'<'} Back</Link> */}
    <br />
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
))
