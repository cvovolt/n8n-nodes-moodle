import { INodeProperties } from "n8n-workflow";
import { createCategoriesOperation, createCategoriesProperties } from "./createCategories";
import { duplicateCourseOperation, duplicateCourseProperties } from "./duplicateCourse";
import { getCategoriesOperation, getCategoriesProperties } from "./getCategories";
import { getCoursesOperation, getCoursesProperties } from "./getCourses";
import { getCoursesByFieldOperation, getCoursesByFieldProperties } from "./getCoursesByField";

export const coreCourseResource: INodeProperties[] = [
    // Operations
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['coreCourse'],
            },
        },
        options: [
            getCategoriesOperation,
            getCoursesOperation,
            getCoursesByFieldOperation,
            duplicateCourseOperation,
            createCategoriesOperation,
        ],
        default: getCategoriesOperation.value,
        description: 'The operation to perform.',
    },

    // Properties
    ...getCategoriesProperties,
    ...getCoursesProperties,
    ...getCoursesByFieldProperties,
    ...duplicateCourseProperties,
    ...createCategoriesProperties,
];
