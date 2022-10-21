import PageCmp from "../../../component/PageCmp";
import {useLocation} from "react-router-dom";

const ReportDetailsPage = () => {
    const {state: reportId} = useLocation();
    return <PageCmp title="Szczegóły raportu">
    </PageCmp>
}

export default ReportDetailsPage;