import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white">
            <div
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
              // onclick requirre a function reference in return 
              // if we directly write  setColor("Red") it execute a funtion and
              // return what the setColor funtion return to it 
              // rather than we use a dummy function which returns setColor("red")
              onClick={function(){
                return setColor("red")
              }}
            >
              Red
            </div>
            <div
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={()=>setColor("green")}
            >
              Green
            </div>
            <div
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={()=>setColor("blue")}
            >
              Blue
            </div>
            <div
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "orange" }}
              onClick={()=>setColor("orange")}
            >
              Orange
            </div>
            <div
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "pink" }}
              onClick={()=>setColor("pink")}
            >
              Pink
            </div>
            <div
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "violet" }}
              onClick={()=>setColor("violet")}
            >
              Violet
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
