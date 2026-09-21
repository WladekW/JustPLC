import { Group, Panel, Separator } from 'react-resizable-panels'
import BottomBar from './layouts/BottomBar'
import GraphPanel from './layouts/GraphPanel'
import LeftPanel from './layouts/LeftPanel'
import RightPanel from './layouts/RightPanel'
import TitleBar from './layouts/TitleBar'

function App(): React.JSX.Element {
  return (
    <>
      <section className="main_section">
        <TitleBar></TitleBar>
        <Group className="central_panel">
          <Panel>
            <LeftPanel></LeftPanel>
          </Panel>
          <Separator className="separator" />
          <Panel>
            <GraphPanel></GraphPanel>
          </Panel>
          <Separator className="separator" />
          <Panel>
            <RightPanel></RightPanel>
          </Panel>
        </Group>
        <BottomBar></BottomBar>
      </section>
    </>
  )
}

export default App
