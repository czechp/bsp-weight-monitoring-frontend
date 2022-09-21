import styled from "styled-components";

const SelectInputCmp = ({label = "", value, setValue, options}) => {

    const selectFieldOnChange = (event) => {
        setValue(event.target.value);
    };

    return <Container>
        <Label>{label}</Label>
        <Select value={value} onChange={selectFieldOnChange}>
            {options.map((option, index) => <Option value={option.value}
                                                    key={`${option.value}-${option.label}-${Math.random()}`}>{option.label}</Option>)}
        </Select>
    </Container>
}

export default SelectInputCmp;

const Container = styled.div`
  margin: 1rem 0 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Select = styled.select`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.colors.primary};
  margin: 1rem 0 1rem 0;
  font-size: larger;
  color: ${({theme}) => theme.colors.primary};
  padding: 1rem;
  text-align: center;
`;

const Option = styled.option`
  background: blue;
  text-align: center;
`;