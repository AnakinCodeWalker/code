// if you understood the stateful auth then this one will be like a cup of tea for you it just introduced 2 methods one for encoding and onefor decoding 

//and it will let you skip to store the {credential}data into db that is why this is called stateless..

// it will take your name and encode it into a token and give it to you there is no need of db

// when you hit an auth endpoint it converts back the jwt token into a username and findout ki yeah this user has signed in prevoiusly

//when decoding it you can extract the things the token converted /encoded from the variable u are storing the decoded  token into

//so the hassle of storing the token into db ends here
