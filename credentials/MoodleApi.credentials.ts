import {
    IAuthenticateGeneric,
    Icon,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class MoodleApi implements ICredentialType {
    name = 'moodleApi';
    icon = 'file:../icons/moodle.svg' as Icon;
    displayName = 'Moodle API';
    documentationUrl = 'https://docs.moodle.org/501/en/Using_web_services';
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

    test: ICredentialTestRequest = {
        request: {
            method: 'POST',
            url: '={{$credentials.url}}/webservice/rest/server.php',
            qs: {
                moodlewsrestformat: 'json',
                wsfunction: 'core_webservice_get_site_info',
            },
        },
    };
}