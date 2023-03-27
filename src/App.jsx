import { IntlProvider } from 'react-intl'
import AppLocale from './helpers/providers/translate/index'
import AuthLayout from './components/layouts/AuthLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './app/routes/auth/SignIn'
import SignUp from './app/routes/auth/SignUp'
import ForgetPassword from './app/routes/auth/recover/ForgetPassword'
import ChangePassword from './app/routes/auth/recover/ChangePassword'
import Error404 from './components/error/Error404'

const App = () => {
  const currentAppLocale = AppLocale[localStorage.getItem('language')]

  return (
    <IntlProvider
      messages={currentAppLocale.messages}
      locale={currentAppLocale.locale}
      defaultLocale="en"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forget" element={<ForgetPassword />} />
            <Route path="recover" element={<ChangePassword />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  )
}

export default App
