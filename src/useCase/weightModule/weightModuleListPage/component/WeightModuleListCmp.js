import {Table, Tbody, Td, Th, Thead, Tr} from "../../../../configuration/styledComponents/Table";
import colors from "../../../../configuration/style/colors";
import {useNavigate} from "react-router-dom";
import TitleCmp from "../../../../component/TitleCmp";

const WeightModuleListCmp = ({weightModules = [], setSortingField, firstModules=true}) => {
    return <>
        <TitleCmp title={`Moduły ${firstModules ? "I" : "II"}`} />
        <Table>
            <Thead>
                <Tr>
                    <Th onClick={() => setSortingField("id")}>Id:</Th>
                    <Th onClick={() => setSortingField("productionLineSimpleEntity.lineName")}>Linia:</Th>
                    <Th onClick={() => setSortingField("status")}>Status:</Th>
                    <Th onClick={() => setSortingField("currentMeasure")}>Poprawnych pomiarów:</Th>
                    <Th onClick={() => setSortingField("totalProductPcs")}>Ilość produktów:</Th>
                    <Th onClick={() => setSortingField("totalMaterialWeight")}>Ilość parafiny:</Th>
                </Tr>
            </Thead>
            <Tbody>
                {weightModules.map((module, index) => <WeightModuleInfoRow
                    key={`${module.id}-${index}-${Math.random()}`} weightModule={module}/>)}
            </Tbody>
        </Table>
    </>
}

const WeightModuleInfoRow = ({weightModule}) => {
    const navigate = useNavigate();
    const statusColor = weightModule.moduleStatus.status ? colors.success : colors.danger;

    return <Tr onClick={() => navigate("/weight-module-details", {state: weightModule.id})}>
        <Td>{weightModule.id}</Td>
        <Td>{weightModule.productionLineName}</Td>
        <Td style={{color: statusColor}}>{weightModule.moduleStatus.status ? "Włączony" : "Wyłączony"}</Td>
        <Td>{weightModule.productionIndicators.correctProductPercent.toFixed(1)} %</Td>
        <Td>{weightModule.productionIndicators.totalProductPcs} szt.</Td>
        <Td>{weightModule.productionIndicators.totalMaterialWeight} kg.</Td>
    </Tr>
}

export default WeightModuleListCmp;