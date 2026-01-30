import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { description } from '../description';
import { coreCourseGetCategoriesBody,
         coreCourseGetCoursesBody,
         coreCourseGetCoursesByFieldBody
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
                                preSend: [coreCourseGetCoursesBody]
                            },
                        },
                    },
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
                                preSend: [coreCourseGetCoursesByFieldBody]
                            },
                        },
                    }
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
            }
        ],
    };
}
