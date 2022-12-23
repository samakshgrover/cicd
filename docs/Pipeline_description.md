# Pipeline

![]()

1. push code to Git main branch will trigger to run the jobs.
2. this pipeline has a full-stack-deployment job.
3. the push to Git will cause the build scripts to run
4. this creates, configures the environment then installs the software
5. these are npm scripts in package.json in the root of the project
6. if the build phase completes the application's client side will be deployed on aws s3 web hosting and server side will be deployed on elastic beanstalk's node js platform.