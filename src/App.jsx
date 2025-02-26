import { Button } from "./samplePage/Button.useState"
import { ChildComponent } from "./samplePage/ChildComponent.props"
import { ParantComponent } from "./samplePage/Hook.useEffect/ParantComponent"
import { Input } from "./samplePage/Input.useRef"
import { MemoComponent } from "./samplePage/MemoComponent.useMemo"
import { SelectBox } from "./samplePage/SelectBox.useState"
import { Table } from "./samplePage/Table"
import { HeavyJobComponent, HeavyJobComponent2, MemoHeavyJobComponent, MemoHeavyJobComponent2 } from "./samplePage/MemoComponent.react.Memo"
import { useState } from "react"

function App() {
  const [plusNum, setPlusNum] = useState(0);
  const [multiNum, setMultiNum] = useState(0);

  return (
    <>
      {/* <Button/> */}
      <br/>
      {/* <Input/> */}
      <br/>
      {/* <SelectBox/> */}
      <br/>
      {/* <Table/> */}
      {/* <ParantComponent/> */}
      {/* <MemoComponent/> */}
      {/* <ChildComponent title={"제목1"} content={"내용을 작성해요"}/>
      <ChildComponent title={"제목2"} content={"내용을 작성해요"}/>
      <ChildComponent title={"제목3"} content={"내용을 작성해요"}/>
      <ChildComponent title={"제목4"} content={"내용을 작성해요"}/>
      <ChildComponent title={"제목5"} content={"내용을 작성해요"}/> */}


      <input type="number" onChange={(e) => setPlusNum(e.target.value)} />
      {/* <HeavyJobComponent num={Number(plusNum)} /> */}
      <MemoHeavyJobComponent num = {Number(plusNum)} numObj = {{num: Number(plusNum)}}/>
      <input type="number" onChange={(e) => setMultiNum(e.target.value)} />
      {/* <HeavyJobComponent2 num={Number(multiNum)}/> */}
      <MemoHeavyJobComponent2 num = {Number(multiNum)}/>
    </>
  )
}

export default App
