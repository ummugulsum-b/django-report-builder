interface IContentType {
    'pk': number;
    'name': string;
}

export type ContentTypeResponse = IContentType[];

export interface IReportDetailed {
    'id': number;
    'name': string;
    'description': string;
    'modified': string;
    'root_model': number;
    'root_model_name': string;
    'displayfield_set': any[];
    'distinct': boolean;
    'user_created': number;
    'user_modified': any;
    'filterfield_set': any[];
    'report_file': any;
    'report_file_creation': any;
}

interface IUser {
    'first_name': string;
    'last_name': string;
    'id': number;
}

export interface IReport {
    'id': number;
    'name': string;
    'modified': string;
    'root_model': number;
    'root_model_name': string;
    'user_created': IUser;
}

export interface IGetRelatedFieldRequest {
    model: number;
    path:	string;
    path_verbose?:	string;
    field: string;
}

export interface IRelatedField {
    'field_name': string;
    'verbose_name': string;
    'path': string;
    'help_text': string;
    'model_id':	number;
    'parent_model_name': string;
    'parent_model_app_label': boolean;
    'included_model': boolean;
}

export interface INestedRelatedField extends IRelatedField {
  children: INestedRelatedField[];
}


export interface IField {
    name: string;
    field: string;
    field_verbose: string;
    field_type: string;
    is_default: boolean;
    field_choices: any;
    can_filter: boolean;
    path: string;
    path_verbose: string;
    help_text: string;
}

export type ReportsResponse = IReport[];