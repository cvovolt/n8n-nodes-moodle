import { INodeProperties } from "n8n-workflow";
import { createCategoriesOperation, createCategoriesProperties } from "./createCategories";
import { duplicateCourseOperation, duplicateCourseProperties } from "./duplicateCourse";
import { getCategoriesOperation, getCategoriesProperties } from "./getCategories";
import { getCoursesOperation, getCoursesProperties } from "./getCourses";
import { getCoursesByFieldOperation, getCoursesByFieldProperties } from "./getCoursesByField";
import { deleteCategoriesOperation, deleteCategoriesProperties } from "./deleteCategories";

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
            deleteCategoriesOperation,
        ],
        default: '',
    },

    // Properties
    ...getCategoriesProperties,
    ...getCoursesProperties,
    ...getCoursesByFieldProperties,
    ...duplicateCourseProperties,
    ...createCategoriesProperties,
    ...deleteCategoriesProperties,
];
