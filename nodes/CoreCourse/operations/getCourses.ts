import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties, INodePropertyOptions } from "n8n-workflow";
import FormData from "form-data";

export const getCoursesOperation: INodePropertyOptions = 
{
    name: 'core_course_get_courses',
    value: 'core_course_get_courses',
    description: 'Get courses',
    routing: {
        request: {
            qs: {
                wsfunction: 'core_course_get_courses',
            },
        },
        send: {
            preSend: [requestOptions]
        },
    },
};

export const getCoursesProperties:INodeProperties[] = 
[
    {
        displayName: 'IDs (comma separated)',
        name: 'ids',
        type: 'string',
        required: false,
        default: '',
        requiresDataPath: 'multiple',
        hint: 'Comma separated list of IDs',
        description: 'ID Numbers',
        displayOptions: {
            show: {
                operation: [
                    'core_course_get_courses',
                ],
            },
        },
    },
];

async function requestOptions(this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
    const formData = new FormData();
    const ids = ((this.getNodeParameter('ids') as string) || '').trim();
    if (ids) {
        ids.split(',').forEach((id, index) => {
            formData.append(`options[ids][${index}]`, id.trim());
        });
    }
    requestOptions.body = formData;
    return requestOptions;
}