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
                    coreCourse.getCoursesOperation,
                    coreCourse.getCoursesByFieldOperation,
                    coreCourse.duplicateCourseOperation,
                    coreCourse.createCategoriesOperation,
                ],
                default: coreCourse.getCategoriesOperation.value,
                description: 'The operation to perform.',
            },

            // Parameters
            ...coreCourse.getCategoriesProperties,
            ...coreCourse.getCoursesProperties,
            ...coreCourse.getCoursesByFieldProperties,
            ...coreCourse.duplicateCourseProperties,
            ...coreCourse.createCategoriesProperties,
        ],
    };
}
