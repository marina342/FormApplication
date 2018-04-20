/**
 * Created by pidoi on 4/11/2018.
 */
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";

module.exports= {
    createDB: function(request, callbackSuccess, callbackFailed) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            let dbo = db.db("mydb");
            dbo.createCollection("Users", function (err, res) {
                if (err) throw err;
                db.close();
            });
            let myobj = {
                name: request.post.fields.Name,
                phone: request.post.fields.Phone,
                email: request.post.fields.Email,
                hour: request.post.fields.Hour,
                day: request.post.fields.Day
            };
            dbo.collection("Users").insertOne(myobj, function (err, res) {
                if (err){
                    throw err;
                    callbackFailed();
                }
                callbackSuccess();
                db.close();
            });
        })
    },
    findQuery: function (day, hour, callbackSuccess, callbackFailed) {
        MongoClient.connect(url, function(err, db) {
            if (err) console.log(err);
            let dbo = db.db("mydb");
            let query = { day: day, hour:hour };
            dbo.collection("Users").find(query).toArray(function (err, result) {
                if (err) {
                    throw err;
                    callbackFailed();
                }
                callbackSuccess(result);
                db.close();
            });
        });
    }
};