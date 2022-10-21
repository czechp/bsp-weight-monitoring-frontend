import PageCmp from "../../../component/PageCmp";
import {useLocation} from "react-router-dom";
import GetRequestService from "../../../service/http/getRequestService";
import ReportDetailsTilesCmp from "./component/ReportDetailsTilesCmp";

const ReportDetailsPage = () => {
    const {state: reportId} = useLocation();
    const URL = `/api/reports/${reportId}`;
    const getRequestService = new GetRequestService();
    const {object: report} = getRequestService.getObject(URL);

    return <PageCmp title="Szczegóły raportu" loaded={report}>
        {report && <>
            <ReportDetailsTilesCmp report={report} />
        </>}
    </PageCmp>
}

export default ReportDetailsPage;