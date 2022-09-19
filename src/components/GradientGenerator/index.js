import {Component} from 'react'
import {
  GradientContainer,
  Heading,
  Para,
  UnOrderList,
  ColorInput,
  ColorInputContainer,
  GenerateButton,
  CodeContainer,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    colorLeft: '#8ae323',
    colorRight: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  clickDirectionBtn = value => {
    this.setState({activeDirection: value})
  }

  onChangeLeftColor = event => {
    this.setState({colorLeft: event.target.value})
  }

  onChangeRightColor = event => {
    this.setState({colorRight: event.target.value})
  }

  onClickGenerateGradient = () => {
    const {activeDirection, colorLeft, colorRight} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${colorLeft}, ${colorRight}`,
    })
  }

  render() {
    const {colorLeft, colorRight, activeDirection, gradientValue} = this.state
    return (
      <GradientContainer
        bgLeftColor={colorLeft}
        bgRightColor={colorRight}
        direction={activeDirection}
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para size={22}>Choose Direction</Para>
        <UnOrderList>
          {gradientDirectionsList.map(eachType => (
            <GradientDirectionItem
              eachType={eachType}
              key={eachType.directionId}
              clickDirectionBtn={this.clickDirectionBtn}
              isActive={eachType.value === activeDirection}
            />
          ))}
        </UnOrderList>
        <Para size={22}>Pick the Colors</Para>
        <ColorInputContainer>
          <CodeContainer>
            <Para size={18}>{colorLeft}</Para>
            <ColorInput
              type="color"
              onChange={this.onChangeLeftColor}
              value={colorLeft}
            />
          </CodeContainer>

          <CodeContainer>
            <Para size={18}>{colorRight}</Para>
            <ColorInput
              type="color"
              onChange={this.onChangeRightColor}
              value={colorRight}
            />
          </CodeContainer>
        </ColorInputContainer>
        <GenerateButton type="button" onClick={this.onClickGenerateGradient}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
