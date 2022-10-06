import GetRequestService from "../../../../service/http/getRequestService";
import FormCmp from "../../../../component/FormCmp";
import WeightModuleDetailsCmp from "../../../weightModule/weightModuleDetailsPage/component/WeightModuleDetailsCmp";

const ProductionLineWeightModuleList = ({productionLineId, firstModule=true}) => {
    const URL = firstModule ? `/api/weight-modules/production-line/${productionLineId}` : `/api/weight-modules-last/production-line/${productionLineId}`;
    const getRequestService = new GetRequestService();
    const {objects: weightModules} = getRequestService.getObjectsArray(URL);


    return <FormCmp title={`Moduł ${firstModule ? "I": "II"}`}>
        {weightModules && <>
            {weightModules.map((module, index) => <WeightModuleDetailsCmp firstModule={firstModule} key={`${module.id}-${index}-${Math.random()}`}
                                                                          weightModule={module}/>)}
        </>}
    </FormCmp>
}

export default ProductionLineWeightModuleList;
