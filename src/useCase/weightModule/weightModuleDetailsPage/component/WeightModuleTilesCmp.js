import styled from "styled-components";
import TileInfoCmp from "../../../../component/tile/TileInfoCmp";

const WeightModuleTilesCmp = ({weightModule}) => {
    return <Container>
        <TileInfoCmp></TileInfoCmp>
        <TileInfoCmp></TileInfoCmp>
        <TileInfoCmp></TileInfoCmp>
        <TileInfoCmp></TileInfoCmp>
        <TileInfoCmp></TileInfoCmp>
        <TileInfoCmp></TileInfoCmp>
        <TileInfoCmp></TileInfoCmp>
        <TileInfoCmp></TileInfoCmp>
        <TileInfoCmp></TileInfoCmp>
        <TileInfoCmp></TileInfoCmp>
    </Container>
}

export default WeightModuleTilesCmp;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;