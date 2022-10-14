import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";

const DosingDeviceListPage = () => {
    const getRequestService = new GetRequestService();
    const URL_FIRST_MODULES = "/api/dosing-devices/first";
    const {objects: dosingDevicesFirst} = getRequestService.getObjectsArray(URL_FIRST_MODULES);

    console.log(dosingDevicesFirst)

    return <PageCmp title="Dysze dozujące">

    </PageCmp>
}

export default DosingDeviceListPage;