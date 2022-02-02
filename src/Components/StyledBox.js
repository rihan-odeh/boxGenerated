import styled from "styled-components";

const StyledBox = styled.div`
  background: ${props => props.bgColor};
  width: ${props => props.width || "200px"};
  height: ${props => props.height || "200px"};
  margin: 0 20px;
  display: inline-block;
`;

export default StyledBox;