import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties, INodePropertyOptions } from "n8n-workflow";
import FormData from "form-data";

export const duplicateCourseOperation: INodePropertyOptions = 
{
    name: 'Duplicate Course',
    value: 'core_course_duplicate_course',
    description: 'Duplicate a course',
    routing: {
        request: {
            qs: {
                wsfunction: 'core_course_duplicate_course',
            },
        },
        send: {
            preSend: [requestOptions]
        },
    }
};

export const duplicateCourseProperties:INodeProperties[] =
[
   {
        displayName: 'Source Course ID',
        name: 'courseid',
        type: 'string',
        required: true,
        default: '',
        description: 'The ID of the course to duplicate',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    },
    {
        displayName: 'Fullname',
        name: 'fullname',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    },
    {
        displayName: 'Shortname',
        name: 'shortname',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    },
    {
        displayName: 'Category ID',
        name: 'categoryid',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    },
    {
        displayName: 'Visible',
        name: 'visible',
        type: 'boolean',
        default: true,
        description: 'Whether the course is visible',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },   
    },
    {
        displayName: 'Include Course Activities',
        name: 'activities',
        type: 'boolean',
        default: true,
        description: 'Whether to include course activities in the duplicate',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    },
    {
        displayName: 'Include Course Blocks',
        name: 'blocks',
        type: 'boolean',
        default: true,
        description: 'Whether to include course blocks in the duplicate',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },  
        },
    },
    {
        displayName: 'Include Course Filters',
        name: 'filters',
        type: 'boolean',
        default: true,
        description: 'Whether to include course filters in the duplicate',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    },
    {
        displayName: 'Include Course Users',
        name: 'users',
        type: 'boolean',
        default: false,
        description: 'Whether to include course users in the duplicate',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    },
    {
        displayName: 'Include Enrolment Methods',
        name: 'enrolment',
        type: 'boolean',
        default: true,
        description: 'Whether to include enrolment methods in the duplicate',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },  
    },
    {
        displayName: 'Include Role Assignments',
        name: 'role_assignments',
        type: 'boolean',
        default: false,
        description: 'Whether to include role assignments in the duplicate',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    },
    {
        displayName: 'Include User Comments',
        name: 'comments',
        type: 'boolean',
        default: false,
        description: 'Whether to include user comments in the duplicate',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    },
    {
        displayName: 'Include User Course Completion Data',
        name: 'userscompletion',
        type: 'boolean',
        default: false,
        description: 'Whether to include course completion data in the duplicate',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    },
    {
        displayName: 'Include Logs',
        name: 'logs',
        type: 'boolean',
        default: false,
        description: 'Whether to include logs in the duplicate',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    },
    {
        displayName: 'Include Gradebook History',
        name: 'grade_histories',
        type: 'boolean',
        default: false,
        description: 'Whether to include gradebook history in the duplicate',
        displayOptions: {
            show: {
                operation: [
                    'core_course_duplicate_course',
                ],
            },
        },
    } 
]


async function requestOptions(this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
    const formData = new FormData();
    const courseId = this.getNodeParameter('course_id') as number;
    const fullname = ((this.getNodeParameter('fullname') as string) || '').trim();
    const shortname = ((this.getNodeParameter('shortname') as string) || '').trim();
    const categoryid = this.getNodeParameter('category_id') as number;
    const visible = this.getNodeParameter('visible') as boolean;
        
    formData.append('courseid', courseId.toString());
    formData.append('fullname', fullname);
    formData.append('shortname', shortname);
    formData.append('categoryid', categoryid.toString());
    formData.append('visible', visible ? '1' : '0');
    
    const optionNames = ['activities', 'blocks', 'filters', 'users', 'enrolments', 'role_assignments', 'comments', 'usercompletion', 'logs', 'grade_histories'];
    optionNames.forEach((optionName, index) => {
        const optionValue = this.getNodeParameter(optionName) as boolean;
        formData.append(`options[${index}][name]`, optionName);
        formData.append(`options[${index}][value]`, optionValue ? '1' : '0');
    });

    requestOptions.body = formData;
    return requestOptions;
}
