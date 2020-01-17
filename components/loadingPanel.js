import Panel from "./panel";

const LoadingPanel = () => {
  const travelSize = "75vh";
  const travelSpeedSec = "0.75";
  const dotSizePx = "3";
  return (
    <Panel
      body={
        <div className="loading-animation-container">
          <div className="loading-animation">
            <div />
            <div />
            <div />
          </div>
          <style jsx>{`
            .loading-animation-container {
              display: grid;
              justify-content: center;
            }
            .loading-animation {
              display: inline-block;
              position: relative;
            }
            .loading-animation div {
              position: absolute;
              width: ${dotSizePx}px;
              height: ${dotSizePx}px;
              border-radius: 50%;
              background: black;
              animation-timing-function: cubic-bezier(0, 1, 1, 0);
            }
            .loading-animation div:nth-child(1) {
              animation: loading-animation1 ${travelSpeedSec}s infinite;
            }
            .loading-animation div:nth-child(2) {
              animation: loading-animation2 ${travelSpeedSec}s infinite;
            }
            .loading-animation div:nth-child(3) {
              top: ${travelSize};
              animation: loading-animation3 ${travelSpeedSec}s infinite;
            }
            @keyframes loading-animation1 {
              0% {
                transform: scale(0);
              }
              100% {
                transform: scale(1);
              }
            }
            @keyframes loading-animation3 {
              0% {
                transform: scale(1);
              }
              100% {
                transform: scale(0);
              }
            }
            @keyframes loading-animation2 {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(0, ${travelSize});
              }
            }
          `}</style>
        </div>
      }
    />
  );
};

export default LoadingPanel;
