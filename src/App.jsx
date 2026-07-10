import "./App.css";
// 只保留核心的水母 3D 组件和样式
import Medusae from "./medusae/Medusae.jsx";
import "./medusae/medusae.css";

// 1. 将你的专属配置固化为唯一的默认样式
const MY_DEFAULT_CONFIG = {
  cursor: {
    radius: 0.065,
    strength: 3,
    dragFactor: 0.015,
  },
  halo: {
    outerOscFrequency: 2.6,
    outerOscAmplitude: 0.76,
    outerOscJitterStrength: 0.025,
    outerOscJitterSpeed: 0.3,
    radiusBase: 2.4,
    radiusAmplitude: 0.5,
    shapeAmplitude: 0.75,
    rimWidth: 1.8,
    outerStartOffset: 0.4,
    outerEndOffset: 2.2,
    scaleX: 1.3,
    scaleY: 1,
  },
  particles: {
    baseSize: 0.03,
    activeSize: 0.018,
    blobScaleX: 0.7,
    blobScaleY: 0.49,
    rotationSpeed: 0.1,
    rotationJitter: 0.2,
    cursorFollowStrength: 1,
    oscillationFactor: 1,
    colorBase: "#0000ff",
    colorOne: "#4285f5",
    colorTwo: "#eb4236",
    colorThree: "#faba03",
  },
  background: {
    color: "#ffffff", // 纯白背景
  },
};

function App() {
  return (
    <div className="app" style={{ backgroundColor: MY_DEFAULT_CONFIG.background.color }}>
      
      {/* 2. 这里是你加盖的 2D UI 浮层 */}
      <div 
        className="my-project-overlay" 
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5,
          color: "#111111",           // ⚡ 因为背景变成了纯白，文字颜色改为深色以保证可见度
          textAlign: "center",
          fontFamily: "sans-serif",
          pointerEvents: "none",      // 允许鼠标事件穿透到下方的 3D 场景
        }}
      >
        <h1 style={{ margin: "0 0 10px 0", fontSize: "2.5rem", letterSpacing: "2px" }}>
          BREATH DEAR MEDUSAE
        </h1>
        <p style={{ margin: 0, opacity: 0.7, fontSize: "1.1rem" }}>
          一个基于 React 19 + Three.js 的粒子水母艺术空间
        </p>
      </div>

      {/* 3. 直接将静态配置传给水母，去掉了所有菜单、控制函数和状态机 */}
      <Medusae config={MY_DEFAULT_CONFIG} />
    </div>
  );
}

export default App;