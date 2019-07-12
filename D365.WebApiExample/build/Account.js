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
            }).then(function () {
                Xrm.Navigation.openConfirmDialog({
                    title: "Creating a new Account",
                    text: "Would you like to create a new account?"
                })
                    .then(function (result) {
                    if (result.confirmed) {
                        Account.createAccount(account.accountid, account.name);
                    }
                });
            });
        });
    };
    Account.createAccount = function (parentAccountId, parentAccountName) {
        var newAccount = {
            "parentaccountid@odata.bind": "/accounts(" + parentAccountId + ")",
            customertypecode: 1 /* Competitor */,
            name: "New Account (" + parentAccountName + ")",
            telephone1: "12345678"
        };
        CRUD.createAccountRecord(newAccount).then(function (response) {
            Xrm.Navigation.openForm({ entityId: response.id, openInNewWindow: true, entityName: response.entityType });
        }).fail(function (error) {
            Xrm.Navigation.openErrorDialog({ message: error.message, errorCode: error.errorCode });
        });
    };
    return Account;
}());
