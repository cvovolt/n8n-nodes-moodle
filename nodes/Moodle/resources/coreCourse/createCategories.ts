import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties, INodePropertyOptions } from "n8n-workflow";
import FormData from "form-data";

export const createCategoriesOperation: INodePropertyOptions = 
{
    name: 'Create Categories',
    value: 'core_course_create_categories',
    description: 'Create course categories',
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
    const formData = new FormData();
    const categories = this.getNodeParameter('categoriesArray') as Array<object>;
    categories.forEach((category: any, index: number) => {
        for (const key of Object.keys(category)) {  
            formData.append(`categories[${index}][${key}]`, category[key]);
        }
    });
    requestOptions.body = formData;
    return requestOptions;
}