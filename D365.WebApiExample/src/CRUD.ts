import EntDif = Crm.EntityDefinitions;
import Entities = Const.Entities;

class CRUD {

    static retrieveRecord(entityLogicalName: string, recordId: string, fields: string[]) {

        const query = fields.length > 0 ? `?$select=${fields.join(",")}` : null;

        return Xrm.WebApi.retrieveRecord(entityLogicalName, recordId, query);
    }

    static createRecord(entityLogicalName: string, record: any) {
        return Xrm.WebApi.createRecord(entityLogicalName, record);
    }

    static retrieveAccountRecord(recordId: string, fields: string[]): PromiseLike<EntDif.AccountRead> {
        return this.retrieveRecord(Entities.Account.EntityLogicalName, recordId, fields);
    }

    static createAccountRecord(account: EntDif.AccountCreate) {
        return this.createRecord(Entities.Account.EntityLogicalName, account);
    }
}
