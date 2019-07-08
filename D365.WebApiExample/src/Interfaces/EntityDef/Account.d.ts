declare namespace Crm {
    export namespace EntityDefinitions {
        export interface AccountRead extends BaseEntityRead {
            name: string;
        }

        export interface AccountCreate {
            name: string;
        }
    }
}