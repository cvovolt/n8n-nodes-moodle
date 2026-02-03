import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { coreCourseResource } from './resources/coreCourse';

export class Moodle implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Moodle Rest API',
        name: 'moodleRestApi',
        icon: 'file:../../icons/moodle.svg',
        group: ['transform'],   //only used for trigger nodes
        version: 1,
        description: 'Moodle Rest API Node',
        defaults: {
            name: 'Moodle',
        },
        //subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
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
            // Resources:
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    { name: 'Core Course', value: 'coreCourse' },
                ],
                default: 'coreCourse',
                description: 'The resource to operate on.',
            },

            ...coreCourseResource,
        ],
    };
}
