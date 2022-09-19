import styled from 'styled-components'

export const GradientContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  font-size: 40px;
  color: #ffffff;
  font-weight: 600;
  font-family: 'roboto';
`
export const Para = styled.p`
  font-size: ${props => props.size}px;
  color: #ffffff;
  font-weight: 600;
  font-family: 'roboto';
`
export const UnOrderList = styled.ul`
  display: flex;
  align-items: center;
`
export const ColorInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  margin-top: 50px;
`

export const ColorInput = styled.input`
  width: 120px;
  height: 50px;
  padding: 0;
  display: block;
  background: none;
  border: none;
`
export const GenerateButton = styled.button`
  width: 105px;
  height: 38px;
  background-color: #00c9b7;
  color: #1e293b;
  font-size: 15px;
  margin-top: 25px;
  font-weight: 600;
  font-family: 'roboto';
  border: none;
  border-radius: 7px;
  cursor: pointer;
`
export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
