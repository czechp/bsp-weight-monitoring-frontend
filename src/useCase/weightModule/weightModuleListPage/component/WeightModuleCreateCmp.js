import React from "react";
import styled from "styled-components";

import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import AuthorizationService from "../../../../service/authorization/authorizationService";
import ButtonCmp from "../../../../component/ButtonCmp";
import SelectInputCmp from "../../../../component/SelectInputCmp";
import GetRequestService from "../../../../service/http/getRequestService";
import colors from "../../../../configuration/style/colors";
import SendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";

const WeightModuleCreateCmp = ({
                                   reloadData = () => {
                                   }
                               }) => {
    const modalHandler = useModalDialog();
    const authorizationService = new AuthorizationService();
    const sendRequestService = new SendRequestService();
    const {showSuccessInfo, showErrorInfo} = React.useContext(StatementContext);
    const lines = useProvideLineList();
    const [selectedLineId, setSelectedLineId] = React.useState(0);

    const sendCreateRequest = () => {
        const URL = "/api/weight-modules";
        sendRequestService.post(URL, {productionLineId: selectedLineId})
            .then(weightModuleCreated)
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    const weightModuleCreated = (response) => {
        showSuccessInfo("Moduł wagowy został stworzony");
        reloadData();
        modalHandler.hideModal();
    };


    return <Container>
        {authorizationService.isAdmin() && <>
            <ButtonCmp label="Dodaj nowy moduł wagowy I"
                       onClick={() => modalHandler.showModal()}/> <ModalDialogCmp title="Dodaj nowy moduł wagowy"
                                                                                  handler={modalHandler}></ModalDialogCmp>
            <ModalDialogCmp title="Dodaj nowy moduł wagowy I" handler={modalHandler}>
                <SelectInputCmp label="Wybierz linie:" value={selectedLineId} setValue={setSelectedLineId}
                                options={lines}/>
                <ButtonCmp label="Dodaj moduł wagowy I" color={colors.success} onClick={sendCreateRequest}/>
            </ModalDialogCmp>
        </>
        }</Container>

}

const useProvideLineList = () => {
    const URL = "/api/production-lines";
    const getRequestService = new GetRequestService();
    const {objects: lines} = getRequestService.getObjectsArray(URL);
    const [linesList, setLinesList] = React.useState([]);

    React.useEffect(() => {
        if (lines) {
            const preparedLines = lines.map((line) => {
                return {value: line.id, label: line.lineName}
            });
            setLinesList(preparedLines);
        }
    }, [lines]);


    return linesList;
}

export default WeightModuleCreateCmp;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;