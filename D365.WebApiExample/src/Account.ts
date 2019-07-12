import AccountFields = Const.Entities.Account;

class Account {
    static onLoad(executionContext: Xrm.Events.EventContext) {
        debugger;

        const formContext = executionContext.getFormContext();

        if (formContext.ui.getFormType() === XrmEnum.FormType.Create) {
            return;
        }

        const recordId = formContext.data.entity.getId();

        const fields = [
            AccountFields.Name,
            AccountFields.CreatedOn];

        CRUD.retrieveAccountRecord(recordId, fields).then(account => {
            Xrm.Navigation.openAlertDialog({
                text: `We've got the account information. Name is '${account.name}' and created on '${account[
                    "createdon@OData.Community.Display.V1.FormattedValue"]}'`
            }).then(() => {
                Xrm.Navigation.openConfirmDialog({
                        title: "Creating a new Account",
                        text: "Would you like to create a new account?"
                    })
                    .then(result => {
                        if (result.confirmed) {
                            Account.createAccount(account.accountid, account.name);
                        }
                    });
            });
        });
    }

    static createAccount(parentAccountId: string, parentAccountName: string) {
        const newAccount: EntDif.Account = {
            "parentaccountid@odata.bind": `/accounts(${parentAccountId})`,
            customertypecode: Const.OptionSets.RelationshipType.Competitor,
            name: `New Account (${parentAccountName})`,
            telephone1: "12345678"
        }

        CRUD.createAccountRecord(newAccount).then(response => {
            Xrm.Navigation.openForm({ entityId: response.id, openInNewWindow: true, entityName: response.entityType });
        }).fail(error => {
            Xrm.Navigation.openErrorDialog({ message: error.message, errorCode: error.errorCode });
        });
    }
}

