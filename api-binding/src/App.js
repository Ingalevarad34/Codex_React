// import NormalType from "./TypeOfRender/NormalType";

import ConditionalRender from "./TypeOfRender/ConditionalRender";

//In this project we have used Axios package which allow us to do get,post,put,delete operation on the sever same as Ajax;
function App() {
  return (
    <div >
      {/* <NormalType/> */}
      <ConditionalRender/>
    </div>
  );
}

export default App;
