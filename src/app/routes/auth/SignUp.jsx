import Icon from '../../../components/common/Icon'
import Card from '../../../components/containers/Card'
import { useNavigate } from 'react-router-dom'
import IntlTranslate from '../../../util/IntlTranslate'
import Input from '../../../components/form/Input'
import Button from '../../../components/form/Button'
const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className="w-2/6 h-2/6">
      <Card>
        <div className="mb-3xl">
          <div className="relative">
            <a
              className="absolute rounded-3xl text-gray-700 hover:bg-gray-200 py-1 px-2"
              to="/"
              onClick={() => navigate('/')}
            >
              <Icon icon="arrow-left" />
            </a>
          </div>
          <div className="mb-5 text-center">
            <h1 className="text-center text-2xl text-gray-700 font-black">
              <IntlTranslate id="woker.signup" />
            </h1>
          </div>
        </div>
        <form className="w-full">
          <Input
            label={<IntlTranslate id="full.name" />}
            icon="user"
            type="text"
            placeholder="John Snow"
          />
          <Input
            label={<IntlTranslate id="email" />}
            icon="envelope"
            type="text"
            placeholder="example@site.com"
          />
          <Input
            label={<IntlTranslate id="password" />}
            icon="lock"
            type="password"
            placeholder="Mínimo 8 caracteres"
          />
          <Input
            label={<IntlTranslate id="retry.password" />}
            icon="lock"
            type="password"
            placeholder="Mínimo 8 caracteres"
          />
          <Button
            className="mt-3 w-full py-3 px-3 bg-blue-500 hover:bg-blue-600 text-white text-center rounded-lg"
            type="submit"
            text={<IntlTranslate id="button.signup" />}
            onClick={() => {
              localStorage.setItem(
                'language',
                localStorage.getItem('language') === 'es' ? 'en' : 'es'
              )
            }}
          />
        </form>
      </Card>
    </div>
  )
}
export default SignUp
