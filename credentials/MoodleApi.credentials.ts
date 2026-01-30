import {
    IAuthenticateGeneric,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class MoodleApi implements ICredentialType {
    name = 'MoodleApi';

    displayName = 'Moodle API';
    
    documentationUrl = 'https://moodledev.io/';
    properties: INodeProperties[] = [
        {
            displayName: 'Moodle URL',
            name: 'url',
            type: 'string',
            default: '',
            placeholder: 'https://yourmoodlesite.com',
            description: 'The base URL of your Moodle site',
        },
        {
            displayName: 'Token',
            name: 'token',
            type: 'string',
            typeOptions: {
                password: true,
            },
            default: '',
            description: 'The token to access the Moodle API',
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            qs: {
                wstoken: '={{$credentials.token}}',
             },
        },
    };
}