import styled from 'styled-components'

export const ListItem = styled.li`
  margin-right: 15px;
  list-style-type: none;
`

export const DirectionButton = styled.button`
  width: 105px;
  height: 38px;
  background-color: #ffffff;
  color: #334155;
  font-size: 15px;
  border: none;
  border-radius: 7px;
  outline: none;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
