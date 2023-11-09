import Spline from '@splinetool/react-spline';

export default function App() {
  const divStyling = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh"
  }

  return (
    <div style={divStyling}>
      <Spline style={{overflow: "none"}} scene="https://prod.spline.design/7KkFilhahwFU1F6p/scene.splinecode" />
    </div>
  );
}
