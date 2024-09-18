import AddComment from "./components/AddComment";


function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full bg-gray-600 h-lvh">
      <h1>Comment Section</h1>
      <AddComment/>
      {/* <RemotePlayback/> */}
      </div>
    </>
  );
}

export default App;
