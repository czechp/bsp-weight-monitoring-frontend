import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import WeightModuleListCmp from "./component/WeightModuleListCmp";

const WeightModuleListPage = () => {
    const URL = "/api/weight-modules";
    const getRequestService = new GetRequestService();
    const {objects: weightModules, setSortingField} = getRequestService.getObjectsArray(URL);

    return <PageCmp title="Lista modułów wagowych" loaded={weightModules}>
        {
            weightModules && <>
                <WeightModuleListCmp weightModules={weightModules} setSortingField={setSortingField}/>
            </>
        }
    </PageCmp>
}

export default WeightModuleListPage;