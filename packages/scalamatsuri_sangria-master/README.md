# ScalaMatsuri Sangria
Sample Application for GraphQL in Scala (ScalaMasturi 2017), using GraphQL Scala Library "Sangria".

![thumbnail/aja_logo_color_bk.png](thumbnail/aja_logo_color_bk.png)

# Usage
```
> git clone git@github.com:yuki-katada/scalamatsuri_sangria.git
> cd scalamatsuri_sangria
> sbt run
```
Access to `http://localhost:1234/graphql` to check server is properly started.

# API

### Host (Single Endpoint)
```[POST] http://localhost:1234/graphql```
### Header
```Content-Type: application/json```

### Sample Request Body
```
{
   "query": "{ user(id: 1) { id name  } }"
}
```

# Slide
<iframe src="//www.slideshare.net/slideshow/embed_code/key/1J77jGps5LhXvW" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/yuki-katada/introduction-to-graphql-in-scala-scalamatsuri-2017" title="Introduction to GraphQL in Scala (ScalaMatsuri 2017)" target="_blank">Introduction to GraphQL in Scala (ScalaMatsuri 2017)</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/yuki-katada">Yuki Katada</a></strong> </div>
