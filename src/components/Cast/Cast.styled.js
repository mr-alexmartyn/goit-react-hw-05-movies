import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const CastItem = styled.li`
  margin: 10px 0 16px;
  padding: 2px 8px;
  max-width: 120px;
  flex-basis: calc(100% / 3-30px);
`;
export const Name = styled.h3`
  margin: 8px 0;
`;
export const Character = styled.p`
  margin: 0;
`;
