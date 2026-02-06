import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties, INodePropertyOptions } from "n8n-workflow";
import { SimpleFormData } from "../../utils/SimpleFormData";

export const createCategoriesOperation: INodePropertyOptions = 
{
    name: 'Create Categories',
    action: 'Create Categories',
    value: 'core_course_create_categories',
    description: 'Create course categories',
    displayOptions: {
        show: {
            resource: ['coreCourse'],
        },
    },
    routing: {
        request: {
            qs: {
                wsfunction: 'core_course_create_categories',
            },
        },
        send: {
            preSend: [requestOptions]
        },
    },
};

export const createCategoriesProperties:INodeProperties[] = 
[
    {
        displayName: 'Categories Array',
        name: 'categoriesArray',
        type: 'string',
        required: true,
        default: '',
        description: 'A JSON array of categories to create',
        displayOptions: {
            show: {
                operation: [
                    'core_course_create_categories',
                ],
            },
        },
    },
];

async function requestOptions(this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
    const formData = new SimpleFormData();
    const categories = this.getNodeParameter('categoriesArray') as Array<Record<string, unknown>>;
    categories.forEach((category: Record<string, unknown>, index: number) => {
        for (const key of Object.keys(category)) {
            formData.append(`categories[${index}][${key}]`, category[key] as string | number | boolean);
        }
    });
    requestOptions.body = formData.getBody();
    requestOptions.headers = {
        ...requestOptions.headers,
        'Content-Type': formData.getContentType(),
    };
    return requestOptions;
}