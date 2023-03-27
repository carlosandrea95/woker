import Card from '../../../components/containers/Card'
import Input from '../../../components/form/Input'
import Button from '../../../components/form/Button'
import IntlTranslate from '../../../util/IntlTranslate'
import ImgLogo from '../../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()

  return (
    <div className="w-2/6">
      <Card>
        <div className="mb-5 text-center">
          <img src={ImgLogo} className="m-auto" alt="" />
          <h1 className="text-center text-2xl text-zinc-700 font-black">
            <IntlTranslate id="woker.signin" />
          </h1>
          <h5 className="font-bold text-zinc-500">
            <IntlTranslate id="woker.signin.caption" />
          </h5>
        </div>
        <form className="flex flex-col gap-2">
          <Input
            label={<IntlTranslate id="email" />}
            icon="fa-solid fa-envelope"
            type="text"
            placeholder="Introduce tu correo electrónico"
          />
          <Input
            label={<IntlTranslate id="password" />}
            icon="fa-solid fa-lock"
            type="password"
            placeholder="Introduce la contraseña"
          />
          <div className="w-full text-center">
            <Button
              className="mt-3 w-full py-3 px-3 bg-blue-500 hover:bg-blue-600 text-white text-center rounded-lg"
              type="submit"
              rightIcon="sign-in"
              text={<IntlTranslate id="button.signin" />}
              onClick={() => {}}
            />
          </div>
        </form>
        <div className="text-center mt-2 text-gray-500">
          <p>
            <IntlTranslate id="not.account" />
            <a
              className="pl-2 text-blue-500"
              onClick={() => {
                navigate('/signup')
              }}
            >
              <IntlTranslate id="sign-up" />
            </a>
          </p>
        </div>
      </Card>
    </div>
  )
}
export default SignIn
