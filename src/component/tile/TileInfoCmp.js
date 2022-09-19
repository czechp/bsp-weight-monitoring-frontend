import styled from "styled-components";

const TileInfoCmp = () => {
    return <Container>

    </Container>;
}

export default TileInfoCmp;

const Container = styled.div`
  border: 4px solid ${({theme}) => theme.colors.primary};
  width: 20%;
  height: 300px;
  border-radius: 20px;
  margin: 1rem;
`;