declare namespace Crm {
    export namespace EntityDefinitions {
        export interface BaseEntityDefinitionRead {
            "statecode@OData.Community.Display.V1.FormattedValue": string;
            statecode: number;
            "statuscode@OData.Community.Display.V1.FormattedValue": string;
            statuscode: number;
            "_createdby_value@OData.Community.Display.V1.FormattedValue": string;
            "_createdby_value@Microsoft.Dynamics.CRM.lookuplogicalname": string;
            _createdby_value: string;
            "_modifiedby_value@OData.Community.Display.V1.FormattedValue": string;
            "_modifiedby_value@Microsoft.Dynamics.CRM.lookuplogicalname": string;
            _modifiedby_value: string;
            "createdon@OData.Community.Display.V1.FormattedValue": string;
            createdon: Date;
            "modifiedon@OData.Community.Display.V1.FormattedValue": string;
            modifiedon: Date;
            timezoneruleversionnumber?: any;
            utcconversiontimezonecode?: any;
        }
    }
}