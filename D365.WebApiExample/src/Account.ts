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
            });
        });
         
    }
}