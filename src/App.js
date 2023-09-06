export default function App() {
  function Device() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  return (
    <>
      <div>test</div>
      {Device() ? <div>모바일</div> : <div>PC</div>}
    </>
  );
}
