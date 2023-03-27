import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(far, fas)

const Icon = ({ className, icon }) => (
  <FontAwesomeIcon className={className} icon={icon} />
)
export default Icon
