import React from "react";


import GetRequestService from "../../service/http/getRequestService";
import PageCmp from "../../component/PageCmp";
import TileCmp from "../../component/TileCmp";
import {faScaleBalanced} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ProductionLinesPage = () => {
    const PRODUCTION_LINES_URI = "/api/production-lines";

    const getRequestService = new GetRequestService();
    const {objects: productionLines} = getRequestService.getObjectsArray(PRODUCTION_LINES_URI);

    return <PageCmp title="Linie" loaded={productionLines}>
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
                </>
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


export default ProductionLinesPage;