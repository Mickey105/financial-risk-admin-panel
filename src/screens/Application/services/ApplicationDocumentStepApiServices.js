import ApiService from '../../../services/api-service/ApiService';
import { APPLICATION_URLS, CLIENT_URLS } from '../../../constants/UrlConstants';

const ApplicationDocumentStepApiServices = {
  getApplicationDocumentDataList: (id, params) =>
    ApiService.getData(`${CLIENT_URLS.DOCUMENTS.DOCUMENTS_LIST}${id}`, { params }),
  getDocumentTypeListData: params =>
    ApiService.getData(APPLICATION_URLS.DOCUMENTS.GET_DOCUMENT_TYPE_LIST_URL, { params }),
  uploadDocument: (data, config, params) =>
    ApiService.postData(APPLICATION_URLS.DOCUMENTS.UPLOAD_DOCUMENT_URL, data, { config, params }),
  deleteApplicationDocument: (id, params) =>
    ApiService.deleteData(`${APPLICATION_URLS.DOCUMENTS.APPLICATION_DELETE_DOCUMENT}${id}`, {
      params,
    }),
};
export default ApplicationDocumentStepApiServices;
