import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {faScaleBalanced, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import PageCmp from "../../component/PageCmp";
import openLinkInNewTab from "../../service/utils/openLinkInNewTab";
import GetRequestService from "../../service/http/getRequestService";
import TileCmp from "../../component/TileCmp";

const HomePage = () => {
    const PRODUCTION_LINES_URI = "/api/production-lines";

    const getRequestService = new GetRequestService();
    const [loaded, setLoaded] = React.useState(false);
    const {objects: productionLines} = getRequestService.getObjectsArray(PRODUCTION_LINES_URI);


    React.useEffect(() => {
        setTimeout(() => setLoaded(true), 800);
    }, []);

    return <PageCmp title="Strona główna" loaded={productionLines}>
        <Container>
            {
                productionLines && <>
                    {
                        productionLines.map((productionLine, index) => <TileCmp
                            key={`${productionLine.id}-${Math.random()}`}
                            title={productionLine.lineName}
                            path={"/production-line-details"}
                            routingState={productionLine.id}
                            icon={faScaleBalanced}/>)
                    }
                    <TileCmp path="/accounts" title={"Użytkownicy"} icon={faUser}/></>
            }
        </Container>
    </PageCmp>
}




const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;


export default HomePage;