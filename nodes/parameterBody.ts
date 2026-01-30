import { IExecuteSingleFunctions, IHttpRequestOptions } from "n8n-workflow";
import FormData from "form-data";

export async function coreCourseGetCategoriesBody(this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
    let formData = new FormData();
    formData = appendCriteria.call(this, ['parent', 'idnumber'], formData);
    const addSubcategories = this.getNodeParameter('addsubcategories') as boolean;
    formData.append('addsubcategories', addSubcategories ? '1' : '0');
    requestOptions.body = formData;
    return requestOptions;
}

export async function coreCourseGetCourses(this: IExecuteSingleFunctions, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
    const formData = new FormData();
    const ids = ((this.getNodeParameter('ids') as string) || '').trim();
    if (ids) {
        ids.split(',').forEach((id, index) => {
            formData.append(`options[ids][${index}]`, id.trim());
        });
    }
    requestOptions.body = formData;
    return requestOptions;
}

function appendCriteria(this: IExecuteSingleFunctions, paramNames: Array<string>, formData: FormData): FormData {
    paramNames.forEach((key, index) => {
        const value = ((this.getNodeParameter(key) as string) || '').trim();
        if (value) {
            formData.append(`criteria[${index}][key]`, key);
            formData.append(`criteria[${index}][value]`, value);
        }
    });
    return formData;
}
