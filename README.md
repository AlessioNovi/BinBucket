# BinBucket

## A request-bin like tool for receiving and debugging webhooks.

### Build with Express, React, MongoDB, PostgreSQL and Socket.io

Create .env file at root level outside backend and frontend folder
insert the following values:

- BACKEND_PORT= eg. 3000
- USER= eg. postgres
- PASSWORD= USER password
- HOST= eg. localhost
- DATABASE= eg. request_bin
- PORT= eg. 5432
- MONGODB_CONNECTION_STRING= eg. mongodb://127.0.0.1:27017/requests

Create .env file at root level of frontend folder
insert the following values:

- VITE_BACKEND_SERVICE= eg. http://localhost:3000

To install PostgreSQL (if you need), run the install_postgres.sh file found inside the backend folder.
For initializing the PostgreSQL request_bin database, run the setup_postgres.sh file found inside the backend folder.

For both files make sure to allow permission on your machine eg. `chmod +x script-name-here.sh`
