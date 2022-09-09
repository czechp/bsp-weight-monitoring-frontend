import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {faScaleBalanced, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import PageCmp from "../../component/PageCmp";
import openLinkInNewTab from "../../service/utils/openLinkInNewTab";
import GetRequestService from "../../service/http/getRequestService";

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

const TileCmp = ({title, icon, path, external, routingState}) => {

    function tileOnClick() {
        if (external) openLinkInNewTab(path); else navigate(path, {state: routingState});
    }

    const navigate = useNavigate();
    return <Tile onClick={tileOnClick}>
        <TileHeader>{title}</TileHeader>
        <FontAwesomeIcon icon={icon} size={"5x"}/>
    </Tile>
}


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

const Tile = styled.div`
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  width: 15%;
  height: 25vh;
  margin: 1%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.faded}
  }
`;

const TileHeader = styled.h3`
    margin: 0 0 2rem 0;
`;

export default HomePage;