# Myblog

### Dependencies

```
- Node v16.17.0

- npm 

- AWS CLI v2

- AWS EB CLI

- AWS RDS database running Postgres.

- AWS S3 bucket for Frontend.

- AWS Elastic Beanstalk for Backend.

```

### AWS Cloud Setup

- RDS - Database Host: rds-instance.cjef5p0bu03a.us-east-1.rds.amazonaws.com
- RDS - Database Port: 5432
- RDS - Database Name: myblog

- S3 Endpoint - Frontend: http://samaksh.s3-website.us-east-2.amazonaws.com/

- Elastic Beanstalk URL - Backend: http://server-env.eba-d24muv5a.us-east-1.elasticbeanstalk.com/blogs

## Environment Variables

Setup the following variables in the .env file or in the cloud environments:
```
- PORT         = 8088
- PGHOST       = <Database_IP_Address>
- PGPORT       = <Database_Port>
- PGDATABASE   = <Database_Name>
- PGUSER       = <Database_Username>
- PGPASSWORD   = <Database_Password>
```

## Pipeline
> 
>From the root of the project:
>1. `npm run client:install`    - To install frontend dependencies.
>2. `npm run client:test`       - To test frontend.
>3. `npm run client:build`      - To build the Angular/Frontend.
>4. `npm run client:deploy`     - To deploy the project to aws s3 web hosting
>5. `eb --version`     - To check elastic beanstalk version
>6. `npm run server:install`     - To install backend dependencies.
>7. `backend-deploy`      - To deploy the project to Elastic Beanstalk
>
## CircleCi

The order of the run jobs:
- Setting Env Variables.
- Install NodeJS.
- Checkout Code & Cloning the Repo.
- Install AWS CLI v3.
- Installing Elastic Beanstalk
  
- Frontend:
  - Install dependencies.
  - Build vite react app.
  - Deploy the site to AWS S3.
- Backend:
  - Install dependencies.
  - Deploy the app to AWS Elastic Beanstalk.

## Testing

This project contains no test suite but a test script is there if u want to add testing to your project. Follow these steps to run the tests.

1. `cd client`
2. `npm run test`

There are no Unit test on the back-end
