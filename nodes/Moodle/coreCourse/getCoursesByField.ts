import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties, INodePropertyOptions } from "n8n-workflow";
import FormData from "form-data";

export const getCoursesByFieldOperation: INodePropertyOptions = 
{
    name: 'core_course_get_courses_by_field',
    value: 'core_course_get_courses_by_field',
    description: 'Get courses by field',
    routing: {
        request: {
            qs: {
                wsfunction: 'core_course_get_courses_by_field',
            },
        },
        send: {
            preSend: [requestOptions]
        },
    },
};

export const getCoursesByFieldProperties:INodeProperties[] = 
[
    {
        displayName: 'Field',
        name: 'course_field',
        type: 'options',
        options: [
            {
                name: 'Course ID',
                value: 'id',
            },
            {
                name: 'IDs (comma separated)',
                value: 'ids',
            },
            {
                name: 'Short Name',
                value: 'shortname',
            },
            {
                name: 'ID number',
                value: 'idnumber',
            },
            {
                name: 'Category ID',
                value: 'category',
            },
            {
                name: 'Section ID',
                value: 'sectionid',
            }
        ],
        default: 'id',
        description: 'The field to get courses by',
        displayOptions: {
            show: {
                operation: [
                    'core_course_get_courses_by_field',
                ],
            },
        },
    },  
    {
        displayName: 'Value',
        name: 'value',
        type: 'string',
        required: false,
        default: '',
        description: 'The value of the field',
        requiresDataPath: 'multiple',
        displayOptions: {
            show: {
                operation: [
                    'core_course_get_courses_by_field',
                ],
            },
        },
    },
]

async function requestOptions(this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> 
{
    const formData = new FormData();
    const field = this.getNodeParameter('course_field') as string;
    const value = ((this.getNodeParameter('value') as string)  || '').trim();
    if (value) {
        formData.append('field', field);
        formData.append('value', value);
    }
    requestOptions.body = formData;
    return requestOptions;
}