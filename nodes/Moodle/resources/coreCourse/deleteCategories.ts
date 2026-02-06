import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties, INodePropertyOptions } from "n8n-workflow";
import { SimpleFormData } from "../../utils/SimpleFormData";

export const deleteCategoriesOperation: INodePropertyOptions = 
{
    name: 'Delete Categories',
    action: 'Delete Categories',
    value: 'core_course_delete_categories',
    description: 'Delete course categories',
    displayOptions: {
        show: {
            resource: ['coreCourse'],
        },
    },
    routing: {
        request: {
            qs: {
                wsfunction: 'core_course_delete_categories',
            },
        },
        send: {
            preSend: [requestOptions]
        },
    },
};

export const deleteCategoriesProperties:INodeProperties[] = 
[
    {
        displayName: 'Categories Array',
        name: 'categoriesArray',
        type: 'string',
        required: true,
        default: '',
        description: 'A JSON array of categories to delete or move',
        displayOptions: {
            show: {
                operation: [
                    'core_course_delete_categories',
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