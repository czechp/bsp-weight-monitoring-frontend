import styled from "styled-components";
import TileInfoCmp from "../../../../component/tile/TileInfoCmp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";
import colors from "../../../../configuration/style/colors";

const WeightModuleTilesCmp = ({weightModule}) => {
    console.log(weightModule)
    return <Container>
        <TileInfoCmp title="Linia:" fontSize="large">{weightModule.productionLineName}</TileInfoCmp>
        <TileInfoCmp title="Stan:">
            <FontAwesomeIcon
                icon={faPowerOff}
                size={"8x"}
                color={weightModule.moduleStatus.status ? colors.success : colors.danger}/>
        </TileInfoCmp>
        <TileInfoCmp title="Poprawnych pomiarów:"
                     fontSize="middle">{weightModule.productionIndicators.correctProductPercent.toFixed(1) + "  %"}</TileInfoCmp>
        <TileInfoCmp title="Waga produktu:"
                     fontSize="middle">{`${weightModule.productInfo.downRangeWeight.toFixed(1)}-${weightModule.productInfo.upRangeWeight.toFixed(1)} g`}</TileInfoCmp>
        <TileInfoCmp title="Ilość parafiny razem:"
                     fontSize="middle">{weightModule.moduleStatus.currentDosingDevice.toFixed(1) + " kg"}</TileInfoCmp>
        <TileInfoCmp title="Ilość parafiny razem:"
                     fontSize="middle">{weightModule.productionIndicators.totalProductPcs + " szt."}</TileInfoCmp>
        <TileInfoCmp title="Aktualny pomiar:"
                     fontSize="middle">{weightModule.moduleStatus.currentMeasure + " g"}</TileInfoCmp>
        <TileInfoCmp title="Aktualny rząd:"
                     fontSize="middle">{weightModule.moduleStatus.currentDosingDevice}</TileInfoCmp>



    </Container>
}

export default WeightModuleTilesCmp;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;