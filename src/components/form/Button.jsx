import Icon from '../common/Icon'
const Button = ({ ...props }) => {
  const cls = 'pt-5'
  return (
    <button className={`text-white ${cls}`} {...props}>
      <Icon
        className={props.leftIcon !== null && 'pr-2'}
        icon={props.leftIcon}
      />
      {props.text}
      <Icon
        className={props.rightIcon !== null && 'pl-2'}
        icon={props.rightIcon}
      />
    </button>
  )
}
export default Button
