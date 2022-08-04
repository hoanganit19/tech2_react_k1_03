import logo from "./logo.svg";
import "./App.css";
import { Tech2 } from "./render-props/Tech2";
import Counter01 from "./render-props/Counter01";
import Counter from "./render-props/Counter";
import Login from "./render-props/Login";
import Layout from "./Layout";

function App() {
  return (
    <>
      <h1>Render Props</h1>
      {/* <Tech2 render={(data)=>{
        return <h2>Khoá học: {data.value}</h2>
      }}/>

      <Tech2 render={(data)=>{
        return <h2>Trung tâm đào tạo {data.value}</h2>
      }}/> */}
      {/* <Counter01 /> */}
      {/* <Counter
        render={(data) => {
          return (
            <>
              <h1>Count: {data.count}</h1>
              <button onClick={data.handleDown}>-</button>
              <button onClick={data.handleUp}>+</button>
            </>
          );
        }}
      />

      <Counter
        render={(data) => {
          return (
            <>
              <h2>Bộ đếm: {data.count}</h2>
              <button onClick={data.handleUp}>+</button>
            </>
          );
        }}
      /> */}
      {/* <Login /> */}
      <Layout />
    </>
  );
}

export default App;
