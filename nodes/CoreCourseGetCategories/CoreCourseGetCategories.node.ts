import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { description } from '../description';

export class CoreCourseGetCategories implements INodeType {
    description: INodeTypeDescription = {
        ...description,
        displayName: 'Moodle Core Course Get Categories',
        name: 'moodleCoreCourseGetCategories',
        description: 'Moodle Get course categories from Moodle',
        defaults: {
            name: 'Moodle Core Course Get Categories',
        },

        properties: [
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
                            }
                        },
                    },
                ],
                default: 'core_course_get_categories',
                description: 'The operation to perform.',
            }
        ],
    };
}
