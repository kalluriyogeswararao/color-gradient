import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachType, clickDirectionBtn, isActive} = props
  const {value, displayText} = eachType

  const onClickButton = () => {
    clickDirectionBtn(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickButton}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
