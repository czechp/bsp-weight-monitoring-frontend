import PageCmp from "../../../component/PageCmp";
import {useLocation} from "react-router-dom";
import GetRequestService from "../../../service/http/getRequestService";
import WeightModuleTilesCmp from "./component/WeightModuleTilesCmp";

const WeightModuleDetailsPage = () => {
    const URL = "/api/weight-modules";
    const getRequestService = new GetRequestService();
    const {state: weightModuleId} = useLocation();
    const {object:weightModule} = getRequestService.getObject(`${URL}/${weightModuleId}`);

    return <PageCmp title="Moduł wagowy -  szczegóły" loaded={weightModule}>
        {
            weightModule && <>
            <WeightModuleTilesCmp weightModule={weightModule} />
            </>
        }
    </PageCmp>
}

export default WeightModuleDetailsPage;