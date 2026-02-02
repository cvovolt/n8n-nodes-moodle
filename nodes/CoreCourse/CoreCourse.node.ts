import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { description } from '../description';
import * as coreCourse from './operations';

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
                    coreCourse.getCategoriesOperation,
                    coreCourse.getCourses,
                    coreCourse.getCoursesByField,
                    coreCourse.duplicateCourse,
                ],
                default: coreCourse.getCategoriesOperation.value,
                description: 'The operation to perform.',
            },

            // Add additional parameters here as needed
            ...coreCourse.getCategoriesProperties,
            ...coreCourse.getCoursesProperties,
            ...coreCourse.getCoursesByFieldProperties,
            ...coreCourse.duplicateCourseProperties,
        ],
    };
}
