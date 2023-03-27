import Icon from '../common/Icon'
const Input = ({ ...props }) => {
  return (
    <div>
      <label className="text-xs">{props.label}</label>
      <div className="relative">
        <Icon
          className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-300"
          icon={props.icon}
        />
        <input
          className="p-4 w-full text-sm border border-gray-200 outline-none py-2 pl-7 pr-4 rounded-lg"
          {...props}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  )
}
export default Input
