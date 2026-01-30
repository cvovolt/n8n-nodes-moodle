import { INodeTypeDescription } from 'n8n-workflow';

export const description: INodeTypeDescription = {
    displayName: 'Moodle Rest API',
    name: 'moodleRestApi',
    icon: 'file:../../icons/moodle.svg',
    group: ['transform'],   //only used for trigger nodes
    version: 1,
    description: 'Moodle Rest API Node',
    defaults: {
        name: 'Moodle Rest API',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
        {
            name: 'MoodleApi',
            required: true,
        },
    ],
    requestDefaults: {
        baseURL: '={{$credentials.url}}/webservice/rest/server.php',
        qs: {
            moodlewsrestformat: 'json',
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
        },
        method: 'POST',
    },
    properties: [
    ],
};
