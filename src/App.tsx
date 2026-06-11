import styled from 'styled-components'
import { AppRouter } from './app/router'

function App() {
  return (
    <AppShell>
      <AppRouter />
    </AppShell>
  )
}

const AppShell = styled.div`
  min-height: 100vh;
`

export default App
