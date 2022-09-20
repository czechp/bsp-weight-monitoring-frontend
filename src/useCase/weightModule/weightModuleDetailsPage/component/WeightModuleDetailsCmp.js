import styled from "styled-components";
import WeightModuleTilesCmp from "./WeightModuleTilesCmp";

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
`;