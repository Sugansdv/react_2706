import React, { useRef, useEffect, useState } from "react";
import socket from "./socket";

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [isEraser, setIsEraser] = useState(false);
  let last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    socket.on("draw", ({ x0, y0, x1, y1, color }) => {
      drawLine(x0, y0, x1, y1, ctx, color);
    });

    socket.on("clear", () => {
      clearCanvas();
    });

    return () => {
      socket.off("draw");
      socket.off("clear");
    };
  }, []);

  const drawLine = (x0, y0, x1, y1, ctx, strokeColor, emit = false) => {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    if (emit) {
      socket.emit("draw", { x0, y0, x1, y1, color: strokeColor });
    }
  };

  const getMouse = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    setDrawing(true);
    last.current = getMouse(e);
  };

  const stopDrawing = () => setDrawing(false);

  const draw = (e) => {
    if (!drawing) return;
    const current = getMouse(e);
    const ctx = canvasRef.current.getContext("2d");
    const drawColor = isEraser ? "#ffffff" : color;
    drawLine(last.current.x, last.current.y, current.x, current.y, ctx, drawColor, true);
    last.current = current;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleClear = () => {
    clearCanvas();
    socket.emit("clear");
  };

  return (
    <div className="container my-5">

      <div className="d-flex justify-content-center mb-3 gap-3 flex-wrap">
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            setIsEraser(false);
          }}
          className="form-control form-control-color"
          title="Choose your color"
        />

        <button className="btn btn-outline-danger" onClick={() => setIsEraser(true)}>
          🧽 Eraser
        </button>

        <button className="btn btn-outline-primary" onClick={() => setIsEraser(false)}>
          🖌️ Draw
        </button>

        <button className="btn btn-warning" onClick={handleClear}>
          🔄 Clear Board
        </button>
      </div>

      <div className="d-flex justify-content-center">
        <canvas
          ref={canvasRef}
          width={1000}
          height={500}
          className="border border-dark rounded shadow"
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          onMouseMove={draw}
        />
      </div>
    </div>
  );
};

export default Whiteboard;
