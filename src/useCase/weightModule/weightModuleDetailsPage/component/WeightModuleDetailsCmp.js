import styled from "styled-components";
import WeightModuleTilesCmp from "./WeightModuleTilesCmp";

const WeightModuleDetailsCmp = ({weightModule, firstModule}) => {
    return <Container>
        {weightModule && <>
            <WeightModuleTilesCmp weightModule={weightModule} firstModule={firstModule}/>
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