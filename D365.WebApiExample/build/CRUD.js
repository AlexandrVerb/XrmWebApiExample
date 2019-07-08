var CRUD = /** @class */ (function () {
    function CRUD() {
    }
    CRUD.retrieveRecord = function (entityLogicalName, recordId, fields) {
        var query = fields.length > 0 ? "?$select=" + fields.join(",") : null;
        return Xrm.WebApi.retrieveRecord(entityLogicalName, recordId, query);
    };
    CRUD.createRecord = function (entityLogicalName, record) {
        return Xrm.WebApi.createRecord(entityLogicalName, record);
    };
    CRUD.retrieveAccountRecord = function (recordId, fields) {
        return this.retrieveRecord("account" /* EntityLogicalName */, recordId, fields);
    };
    CRUD.createAccountRecord = function (account) {
        return this.createRecord("account" /* EntityLogicalName */, account);
    };
    return CRUD;
}());
