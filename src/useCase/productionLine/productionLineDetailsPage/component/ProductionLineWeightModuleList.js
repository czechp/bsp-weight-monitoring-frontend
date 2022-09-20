import GetRequestService from "../../../../service/http/getRequestService";
import FormCmp from "../../../../component/FormCmp";
import WeightModuleDetailsCmp from "../../../weightModule/weightModuleDetailsPage/component/WeightModuleDetailsCmp";

const ProductionLineWeightModuleList = ({productionLineId}) => {
    const URL = `/api/weight-modules/production-line/${productionLineId}`;
    const getRequestService = new GetRequestService();
    const {objects: weightModules} = getRequestService.getObjectsArray(URL);


    return <FormCmp title="Moduł I">
        {weightModules && <>
            {weightModules.map((module, index) => <WeightModuleDetailsCmp key={`${module.id}-${index}-${Math.random()}`}
                                                                          weightModule={module}/>)}
        </>}
    </FormCmp>
}

export default ProductionLineWeightModuleList;
