import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import DosingDevicesListCmp from "./component/DosingDevicesListCmp";

const DosingDeviceListPage = () => {
    const getRequestService = new GetRequestService();
    const URL_FIRST_MODULES = "/api/dosing-devices/first";
    const {objects: dosingDevicesFirst} = getRequestService.getObjectsArray(URL_FIRST_MODULES);

    console.log(dosingDevicesFirst)

    return <PageCmp title="Dysze dozujące">
        {
            dosingDevicesFirst && <>
                <DosingDevicesListCmp dosingDevices={dosingDevicesFirst} title={"Moduł I"} />
            </>
        }
    </PageCmp>
}

export default DosingDeviceListPage;