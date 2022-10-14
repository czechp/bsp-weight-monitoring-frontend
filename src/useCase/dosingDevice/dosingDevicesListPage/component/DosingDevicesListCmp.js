import ContainerCmp from "../../../../component/ContainerCmp";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../../configuration/styledComponents/Table";

const DosingDevicesListCmp = ({dosingDevices, title="Dysze dozujeące"}) => {
    return <ContainerCmp title={title}>
        <Table>
            <Thead>
                <Tr>
                    <Th>Nr.:</Th>
                    <Th>Linia:</Th>
                    <Th>Moduł:</Th>
                    <Th>Ilość parafiny:</Th>
                    <Th>Poprawnych <br/> pomiarów:</Th>
                    <Th>Średnia <br/> waga:</Th>
                    <Th>Pomiarów <br/> poniżej wagi:</Th>
                    <Th>Poprawnych <br/> pomiarów:</Th>
                    <Th>Pomiarów <br/> powyżej wagi:</Th>
                </Tr>
            </Thead>
            <Tbody>
                {dosingDevices.map((element)=><DosingDeviceRow key={`${element.id}-${Math.random()}`} dosingDevice={element} />)}
            </Tbody>
        </Table>
    </ContainerCmp>
}

const DosingDeviceRow = ({dosingDevice})=>{
    return <Tr>
        <Td>{dosingDevice.recordNumber}</Td>
        <Td>{dosingDevice.moduleInfo.lineName}</Td>
        <Td>{dosingDevice.moduleType === "FIRST" ? "I" : "II"}</Td>
        <Td>{`${dosingDevice.totalMaterial} kg`}</Td>
        <Td>{`${dosingDevice.measures.correctMeasurePercent}%`}</Td>
        <Td>{`${dosingDevice.measures.averageMeasure.toFixed(1)} g`}</Td>
        <Td>{`${dosingDevice.measures.amountBelowMeasures} szt.`}</Td>
        <Td>{`${dosingDevice.measures.amountCorrectMeasures} szt.`}</Td>
        <Td>{`${dosingDevice.measures.amountAboveMeasures} szt.`}</Td>


    </Tr>

}

export default DosingDevicesListCmp;

