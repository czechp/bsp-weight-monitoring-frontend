import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import {useLocation} from "react-router-dom";
import WeightModuleDetailsCmp from "../weightModuleDetailsPage/component/WeightModuleDetailsCmp";

const WeightModuleLastDetailsPage = () => {
    const URL = "/api/weight-modules-last";
    const getRequestService = new GetRequestService();
    const {state: weightModuleLastId} = useLocation();
    const {object: weightModuleLast} = getRequestService.getObject(`${URL}/${weightModuleLastId}`);

    return <PageCmp title={"Moduł wagowy II -  szczegóły"}>
        {weightModuleLast &&  <>
            <WeightModuleDetailsCmp weightModule={weightModuleLast} firstModule={false}/>
        </>}
    </PageCmp>
}


export  default  WeightModuleLastDetailsPage;