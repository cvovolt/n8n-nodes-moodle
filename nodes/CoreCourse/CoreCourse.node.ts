import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { description } from '../description';
import { coreCourseGetCategoriesBody,
         coreCourseGetCourses
} from '../parameterBody';

export class CoreCourse implements INodeType {
    description: INodeTypeDescription = {
        ...description,
        displayName: 'Moodle Core Course',
        name: 'moodleCoreCourse',
        description: 'Moodle Core Course operations',
        defaults: {
            name: 'Moodle Core Course',
        },

        properties: [
            // Operations
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                options: [
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
                                preSend: [coreCourseGetCategoriesBody]
                            },
                        },
                    },
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
                                preSend: [coreCourseGetCourses]
                            },
                        },
                    },
                ],
                default: 'core_course_get_categories',
                description: 'The operation to perform.',
            },
            
          

            // Add additional parameters here as needed
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
                displayName: 'ID',
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
            {
                displayName: 'IDs',
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
        ],
    };
}
