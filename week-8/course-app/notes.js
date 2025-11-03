/*

1. Created the routes 

userRoutes
/signup
/login
/purchases --> to see all the courses purchased by user

adminRoutes
/signup
/login
/course --> to create a course by admin .post
/course --> to update a specific course .put
/course/bulk --> to get all the courses .get

courseRoutes
/purchase --> to purchase a course .post
/preview --> to get all the purchased courses .get

at first i was thinking to write the routeHandlers / controllers but to write them i need the db and schema  so i will build the schema at first
*/

/*

2.created the schema




*/

/*
   even though the ids are unique it may happen that ids will becomes the same and user will be able to access the admin end point as well that is why we have seprate secret key for user and admin as well
*/
