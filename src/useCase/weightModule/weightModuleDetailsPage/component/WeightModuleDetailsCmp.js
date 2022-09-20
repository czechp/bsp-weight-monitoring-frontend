import styled from "styled-components";
import WeightModuleTilesCmp from "./WeightModuleTilesCmp";
import CircleProgressBarCmp from "../../../../component/CircleProgressBarCmp";

const WeightModuleDetailsCmp = ({weightModule}) => {
    return <Container>
        {weightModule && <>
            <WeightModuleTilesCmp weightModule={weightModule} />
        </>}
    </Container>
}

export default WeightModuleDetailsCmp;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;