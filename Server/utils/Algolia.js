const request = require("request");
const CronJob = require('cron').CronJob;
const Article = require("../models/Article");

const getData = () => {
    new CronJob('*/10 * * * * *', function () {
        request("https://hn.algolia.com/api/v1/search_by_date?query=nodejs", (error, response, body) => {
            if (error) return console.log("Error:", error);

            const articles = JSON.parse(body);

            Article.collection.insertMany(articles.hits, {ordered: false}, (error, docs) => {
                if (error) console.log("Error", error.code, "Duplicated objectID.");
                const d = new Date();

                if (docs) {
                    console.log("Multiple docs inserted to collection: ", d);
                    console.log("DOCS:", docs);
                }
            })

        });

    }, null, true, 'America/New_York');
};

//'00 59 * * * *'  1 hour
// */10 * * * * *   10 seconds

module.exports = getData;