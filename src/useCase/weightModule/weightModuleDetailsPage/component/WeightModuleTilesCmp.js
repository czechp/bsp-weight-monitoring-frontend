import styled from "styled-components";
import TileInfoCmp from "../../../../component/tile/TileInfoCmp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";
import colors from "../../../../configuration/style/colors";
import CircleProgressBarCmp from "../../../../component/CircleProgressBarCmp";

const WeightModuleTilesCmp = ({weightModule}) => {
    return <Container>
        <TileInfoCmp title="Linia:" fontSize="large">{weightModule.productionLineName}</TileInfoCmp>
        <TileInfoCmp title="Stan:">
            <FontAwesomeIcon
                icon={faPowerOff}
                size={"8x"}
                color={weightModule.moduleStatus.status ? colors.success : colors.danger}/>
        </TileInfoCmp>
        <TileInfoCmp title="Poprawnych pomiarów:"
                     fontSize="middle">
            <CircleProgressBarCmp style={{width: "60%"}} color={determineCorrectnessColor(weightModule.productionIndicators.totalProductPercent)}
            text={`${weightModule.productionIndicators.correctProductPercent}%`}
            value={weightModule.productionIndicators.correctProductPercent}/></TileInfoCmp>
        <TileInfoCmp title="Waga produktu:"
                     fontSize="middle">{`${weightModule.productInfo.downRangeWeight.toFixed(1)}-${weightModule.productInfo.upRangeWeight.toFixed(1)} g`}</TileInfoCmp>
        <TileInfoCmp title="Ilość parafiny razem:"
                     fontSize="middle">{weightModule.moduleStatus.currentDosingDevice.toFixed(1) + " kg"}</TileInfoCmp>
        <TileInfoCmp title="Ilość produktu:"
                     fontSize="middle">{weightModule.productionIndicators.totalProductPcs + " szt."}</TileInfoCmp>
        <TileInfoCmp title="Aktualny pomiar:"
                     fontSize="middle">{weightModule.moduleStatus.currentMeasure + " g"}</TileInfoCmp>
        <TileInfoCmp title="Aktualny rząd:"
                     fontSize="middle">{weightModule.moduleStatus.currentDosingDevice}</TileInfoCmp>


    </Container>
}

function determineCorrectnessColor(correctnessPercent){
    const GREEN_UP_RANGE = 95;
    const ORANGE_UP_RANGE = 90;

    if(correctnessPercent >= GREEN_UP_RANGE)
        return colors.success;
    else if(correctnessPercent >= ORANGE_UP_RANGE && correctnessPercent < GREEN_UP_RANGE)
        return colors.warning;
    else return colors.danger;

}
export default WeightModuleTilesCmp;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;