Real World base Nodejs For TiDB Cloud
--

Thanks [TonyMckes/conduit-realworld-example-app](https://github.com/TonyMckes/conduit-realworld-example-app) project offer so great example.

This Project is created for Ti-Click project join PingCAP Hackathon 2022.

### 1. Ready the TiDB Cluster
You can create the TiDB Cluster on [TiDB Cloud](https://tidbcloud.com) which offer free TiDB Cluster.

### 2. Access Gitpod
Access [Real World base Nodejs](https://gitpod.io/#/github.com/ti-click/conduit-realworld-example-app-base-nodejs) link and open the online IDE.

Then input the `/backend/.env` database setting info. *database name*, *username*, *password*, *port* and *host* is necessary.

**Example**
```
TiDB_USER={USER} #2RZ3WzcNZTCDfFB.root
TiDB_PASSWORD={PASSWORD} #qmSIgdoW2E09ATlO
TiDB_DATABASE={DATABASE} #realworld
TiDB_HOST={HOST} #gateway01.us-west-2.prod.aws.tidbcloud.com
TiDB_PORT={PORT} #4000
```


### 3. Setting the TiDB variable and security
#### 3.1 Remove *ONLY_FULL_GROUP_BY* setting
The **real world** don't support ONLY_FULL_GROUP_BY. So it need to be removed from TiDB global variables.
```
mysql> SHOW GLOBAL VARIABLES LIKE 'sql_mode';
+---------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| Variable_name | Value                                                                                                                                     |
+---------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| sql_mode      | ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |
+---------------+-------------------------------------------------------------------------------------------------------------------------------------------+
1 row in set (0.26 sec)

mysql> SET GLOBAL sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
    -> ;
Query OK, 0 rows affected (0.19 sec)

mysql> SHOW GLOBAL VARIABLES LIKE 'sql_mode';
+---------------+------------------------------------------------------------------------------------------------------------------------+
| Variable_name | Value                                                                                                                  |
+---------------+------------------------------------------------------------------------------------------------------------------------+
| sql_mode      | STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |
+---------------+------------------------------------------------------------------------------------------------------------------------+
1 row in set (0.18 sec)
```

#### 3.2 Add Gitpod ip into TiDB Cloud access white list

You can get the ip by the command below. Please add it into your TiDB Cloud security.
```
curl https://ipinfo.io/ip 
```

OR **You can add `0.0.0.0/0` into white list. Let all access is accepted**

### 4. Run Project
You can start the webserver by command below. Then the web sever is started.
```
$ npm start run
```

[TonyMckes/conduit-realworld-example-app](https://github.com/TonyMckes/conduit-realworld-example-app) Readme.md
---
# ![RealWorld Example App](logo.png)

> ### React / Express.js / Sequelize / PostgreSQL codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://realworld.io/) spec and API.

### [Demo app](https://conduit-realworld-example-app.herokuapp.com/)&nbsp;&nbsp;|&nbsp;&nbsp;[RealWorld Example Apps](https://codebase.show/projects/realworld?category=fullstack)&nbsp;&nbsp;|&nbsp;&nbsp;![](https://heroku-status-badges.herokuapp.com/conduit-realworld-example-app)

This codebase was created to demonstrate a fully fledged fullstack application built with **React / Express.js / Sequelize / PostgreSQL** including CRUD operations, authentication, routing, pagination, and more.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

## Prerequisites

- Make sure your have a Node.js (v14 or newer) installed.
- Make sure you have your database setup.

## Installation

Install all the npm dependencies with the following command:

```bash
npm install
```

## Development

### Configuration

In the [`backend`](backend/) directory, duplicate and remane the`.env.example` file, name it `.env`, and modify it to set all the required private development environment variables.

> Optionally you can run the following command to populate your database with some dummy data:

> ```bash
> npx -w backend sequelize-cli db:seed:all
> ```

### Starting the development server

Start the development environment with the following command:

```bash
npm run dev
```

- The frontend website should be available at [http://localhost:3000/](http://localhost:3000).

- The backend API should be available at [http://localhost:3001/api](http://localhost:3001/api).

### Testing

To run the tests, run the following command:

```bash
npm test
```

## Production

The following command will build the production version of the app:

```bash
npm start
```
