import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties, INodePropertyOptions } from "n8n-workflow";
import FormData from "form-data";

export const getCategoriesOperation: INodePropertyOptions = 
    {
        name: 'core_course_get_categories',
        value: 'core_course_get_categories',
        description: 'Get course categories',
        routing: {
            request: {
                qs: {
                    wsfunction: 'core_course_get_categories',
                },
            },
            send: {
                preSend: [requestOptions]
            },
        },
    }
;


export const getCategoriesProperties:INodeProperties[] = 
[
    {
        displayName: 'Parent ID',
        name: 'parent',
        type: 'string',
        required: false,
        default: '',
        requiresDataPath: 'single',
        description: 'The ID of the parent',
        displayOptions: {
            show: {
                operation: [
                    'core_course_get_categories',
                ],
            },
        },
    },
    {
        displayName: 'ID number',
        name: 'idnumber',
        type: 'string',
        required: false,
        default: '',
        requiresDataPath: 'single',
        description: 'The ID number',
        displayOptions: {
            show: {
                operation: [
                    'core_course_get_categories',
                ],
            },
        },
    },
    {
        displayName: 'Add sub categories',
        name: 'addsubcategories',
        type: 'boolean',
        required: false,
        default: true,
        requiresDataPath: 'single',
        description: 'Whether to include sub categories',
        displayOptions: {
            show: {
                operation: [
                    'core_course_get_categories',
                ],
            },
        },
    },
]

async function requestOptions(this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
    let formData = new FormData();
    const paramNames = ['parent', 'idnumber'];
    paramNames.forEach((key, index) => {
        const value = ((this.getNodeParameter(key) as string) || '').trim();
        if (value) {
            formData.append(`criteria[${index}][key]`, key);
            formData.append(`criteria[${index}][value]`, value);
        }
    });
    const addSubcategories = this.getNodeParameter('addsubcategories') as boolean;
    formData.append('addsubcategories', addSubcategories ? '1' : '0');
    requestOptions.body = formData;
    return requestOptions;
}