export const SETTING_REDUX_CONSTANTS = {
  DOCUMENT_TYPE: {
    FETCH_DOCUMENT_TYPE_LIST_REQUEST: 'FETCH_DOCUMENT_TYPE_LIST_REQUEST',
    FETCH_DOCUMENT_TYPE_LIST_SUCCESS: 'FETCH_DOCUMENT_TYPE_LIST_SUCCESS',
    FETCH_DOCUMENT_TYPE_LIST_FAILURE: 'FETCH_DOCUMENT_TYPE_LIST_FAILURE',
    RESET_PAGE_DATA: 'RESET_PAGE_DATA',

    ADD_DOCUMENT_TYPE: {
      UPDATE_DOCUMENT_TYPE_FIELDS: 'UPDATE_DOCUMENT_TYPE_FIELDS',
      RESET_ADD_DOC_TYPE_DATA: 'RESET_ADD_DOC_TYPE_DATA',
    },
    EDIT_DOCUMENT_TYPE: {
      GET_DOCTYPE_DETAIL: 'GET_DOCTYPE_DETAIL',
      UPDATE_DOCUMENT_TYPE_FIELDS: 'UPDATE_DOCUMENT_TYPE_FIELDS',
      RESET_ADD_DOC_TYPE_DATA: 'RESET_ADD_DOC_TYPE_DATA',
    },
  },
  API_INTEGRATION: {
    FETCH_API_INTEGRATION_SUCCESS: 'FETCH_API_INTEGRATION_SUCCESS',
    FETCH_API_INTEGRATION_FAILURE: 'FETCH_API_INTEGRATION_FAILURE',

    EDIT_API_INTEGRATION: {
      CHANGE_API_INTEGRATION_DATA: 'CHANGE_API_INTEGRATION_DATA',
      UPDATE_API_INTEGRATION_DATA: 'UPDATE_API_INTEGRATION_DATA',
    },
  },
  ORGANIZATION_DETAILS: {
    FETCH_ORGANIZATION_DETAILS_SUCCESS: 'FETCH_ORGANIZATION_DETAILS_SUCCESS',
    FETCH_ORGANIZATION_DETAILS_FAILURE: 'FETCH_ORGANIZATION_DETAILS_FAILURE',

    EDIT_ORGANIZATION_DETAILS: {
      CHANGE_ORGANIZATION_DETAILS: 'CHANGE_ORGANIZATION_DETAILS',
      UPDATE_ORGANIZATION_DETAILS: 'UPDATE_ORGANIZATION_DETAILS',
    },
  },
  AUDIT_LOG: {
    FETCH_AUDIT_LOG_LIST_SUCCESS: 'FETCH_AUDIT_LOG_LIST_SUCCESS',
    RESET_AUDIT_LOG_LIST_DATA: 'RESET_AUDIT_LOG_LIST_DATA',
    AUDIT_LOG_COLUMN_LIST_ACTION: 'AUDIT_LOG_COLUMN_LIST_ACTION',
    AUDIT_LOG_DEFAULT_COLUMN_LIST_ACTION: 'AUDIT_LOG_DEFAULT_COLUMN_LIST_ACTION',
    UPDATE_AUDIT_LOG_COLUMN_LIST_ACTION: 'UPDATE_AUDIT_LOG_COLUMN_LIST_ACTION',
    GET_AUDIT_USER_TYPE_LIST_DATA: 'GET_AUDIT_USER_TYPE_LIST_DATA',
  },
};
