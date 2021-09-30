import Input from "./components/Input";
import Users from "./components/Users";
import { AppContextProvider } from "./AppContext";
import "./App.css";
import React, { ReactNode, useState } from "react";
interface IParent {
  children: ReactNode;
}
function Parent({ children }: IParent) {
  const [test, setTest] = useState("랜더링 확인용");
  return (
    <div>
      <h1 onClick={() => setTest("아아아아아렌더ㅇ 궁금해")}>
        {test} 나도 랜더링이 될까?
      </h1>
      {children}
    </div>
  );
}
const MemoizedParent = React.memo(Parent);
function App() {
  return (
    <>
      <AppContextProvider>
        <Input />
        <Parent>
          <Users />
        </Parent>
      </AppContextProvider>
    </>
  );
}

export default App;
