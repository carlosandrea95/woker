import { IntlProvider } from 'react-intl'
import { useState } from 'react'
import IntlTranslate from './util/IntlTranslate'
import AppLocale from './helpers/providers/translate/index'

function App () {
  const [len, setLen] = useState('en')
  const currentAppLocale = AppLocale[len]
  const changeLocale = () => {
    setLen(len === 'es' ? 'en' : 'es')
    console.log(len)
  }
  return (
    <IntlProvider
      messages={currentAppLocale.messages}
      locale={currentAppLocale.locale}
      defaultLocale="en"
    >
      <>
        <p>
          <IntlTranslate id="hello" />
        </p>
        <div className="flex justify-center content-center">
          <button className="p-5 w-300 rounded border" onClick={changeLocale}>
            Click Me
          </button>
        </div>
      </>
    </IntlProvider>
  )
}

export default App
