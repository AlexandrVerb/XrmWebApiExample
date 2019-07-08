var Account = /** @class */ (function () {
    function Account() {
    }
    Account.onLoad = function (executionContext) {
        debugger;
        var formContext = executionContext.getFormContext();
        if (formContext.ui.getFormType() === 1 /* Create */) {
            return;
        }
        var recordId = formContext.data.entity.getId();
        var fields = [
            "name" /* Name */,
            "createdon" /* CreatedOn */
        ];
        CRUD.retrieveAccountRecord(recordId, fields).then(function (account) {
            Xrm.Navigation.openAlertDialog({
                text: "We've got the account information. Name is '" + account.name + "' and created on '" + account["createdon@OData.Community.Display.V1.FormattedValue"] + "'"
            });
        });
    };
    return Account;
}());
