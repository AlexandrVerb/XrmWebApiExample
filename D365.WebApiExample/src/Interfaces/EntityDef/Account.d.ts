declare namespace Crm {
    export namespace EntityDefinitions {
        export interface AccountRead extends BaseEntityRead {
            name: string;
            accountid: string;
        }

        export interface Account {
            name: string;
            "parentaccountid@odata.bind": string;
            customertypecode: Const.OptionSets.RelationshipType;
            telephone1: string;
    }
    }
}