var orm = require("../config/orm.js");

var burgerModel = {
    all: function (cb) {
        orm.all("burgersTable", function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgersTable", condition, function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("burgersTable", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgersTable", objColVals, condition, function (res) {
            cb(res);
        });
    },
};

module.exports = burgerModel