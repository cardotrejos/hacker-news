## Hacker News 

Made with MERN Stack. Uses docker compose and dockerized apps for client, server and mongodb.

### Running apps on local

1. For first seed of app we need to setup the cron job at 10 seconds

    Here is the path of the file Server/utils/Algolia.js

    10 seconds cron job
    ```js
    new CronJob('*/10 * * * * *', function () {
      ...
    ```

    Then you can setup to 1 hour fetch.

    1 hour cron job
    ```js
    new CronJob('00 59 * * * *', function () {
      ...
    ```
2. Run your docker enviroment using this command:
    ```bash
    docker-compose up --build -d
    ```

3. Your React App runs on port 8081: Open your browser and visit: `http://localhost:8081/`
