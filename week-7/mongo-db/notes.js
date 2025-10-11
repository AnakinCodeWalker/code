/*
why db before the server started ??

Why before app.listen()?

1. Avoid accepting requests before DB is ready
--> If your server starts listening first but the database connection fails, incoming requests will break because the DB is unavailable.

2. Fail fast on startup
--> If the DB connection fails, you’ll know immediately and can stop the server instead of running a partially broken app.
*/

/*
NOTE : while exporting the userroutes file always make the instance of thr router first it is neccessary if not things will not work as exprected
*/
//while importing the default export things you can put any name you want

