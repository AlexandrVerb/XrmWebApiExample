declare namespace Crm {
    export namespace EntityDefinitions {
        export interface AccountRead extends BaseEntityDefinitionRead {
            name: string;
        }

        export interface AccountCreate {
            name: string;
        }
    }
}