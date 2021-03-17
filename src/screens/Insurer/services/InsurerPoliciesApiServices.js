import ApiService from '../../../services/api-service/ApiService';
import { INSURER_URLS } from '../../../constants/UrlConstants';

const InsurerPoliciesApiServices = {
  getInsurerPoliciesList: (id, params) =>
    ApiService.getData(`${INSURER_URLS.POLICIES.POLICIES_LIST}${id}`, { params }),
  getInsurerPoliciesColumnListName: () =>
    ApiService.getData(`${INSURER_URLS.POLICIES.COLUMN_NAME_LIST_URL}?columnFor=insurer-policy`),
  updateInsurerPoliciesColumnListName: data =>
    ApiService.putData(INSURER_URLS.POLICIES.COLUMN_NAME_LIST_URL, data),
  syncInsurerPolicyList: id =>
    ApiService.putData(`${INSURER_URLS.POLICIES.SYNC_CLIENT_POLICIES_DATA_URL}${id}`),
};
export default InsurerPoliciesApiServices;
