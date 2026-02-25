"use client";

import React, { useRef, useEffect } from "react";

const AnimatedGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let startTime = Date.now();

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth * (window.devicePixelRatio || 1);
      canvas.height = parent.clientHeight * (window.devicePixelRatio || 1);
      canvas.style.width = parent.clientWidth + "px";
      canvas.style.height = parent.clientHeight + "px";
    };

    resize();

    const draw = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const w = canvas.width;
      const h = canvas.height;

      // Clear with base dark color
      ctx.fillStyle = "#0a0e1a";
      ctx.fillRect(0, 0, w, h);

      // --- LEFT SIDE: Teal blobs flowing along left edge ---
      // Blob 1 - drifts up and down
      const lb1Y = h * (0.25 + Math.sin(elapsed * 0.4) * 0.2);
      const lb1X = w * 0.0;
      const lb1Radius = w * 0.28;
      const lb1Grad = ctx.createRadialGradient(lb1X, lb1Y, 0, lb1X, lb1Y, lb1Radius);
      lb1Grad.addColorStop(0, "rgba(0, 212, 170, 0.18)");
      lb1Grad.addColorStop(0.4, "rgba(0, 212, 170, 0.08)");
      lb1Grad.addColorStop(1, "rgba(0, 212, 170, 0)");
      ctx.fillStyle = lb1Grad;
      ctx.fillRect(0, 0, w, h);

      // Blob 2 - slower, lower position
      const lb2Y = h * (0.65 + Math.cos(elapsed * 0.3) * 0.2);
      const lb2X = w * 0.02;
      const lb2Radius = w * 0.22;
      const lb2Grad = ctx.createRadialGradient(lb2X, lb2Y, 0, lb2X, lb2Y, lb2Radius);
      lb2Grad.addColorStop(0, "rgba(0, 212, 170, 0.12)");
      lb2Grad.addColorStop(0.5, "rgba(0, 212, 170, 0.05)");
      lb2Grad.addColorStop(1, "rgba(0, 212, 170, 0)");
      ctx.fillStyle = lb2Grad;
      ctx.fillRect(0, 0, w, h);

      // --- RIGHT SIDE: Blue blobs flowing along right edge ---
      // Blob 1
      const rb1Y = h * (0.3 + Math.cos(elapsed * 0.35) * 0.22);
      const rb1X = w * 1.0;
      const rb1Radius = w * 0.26;
      const rb1Grad = ctx.createRadialGradient(rb1X, rb1Y, 0, rb1X, rb1Y, rb1Radius);
      rb1Grad.addColorStop(0, "rgba(0, 136, 204, 0.16)");
      rb1Grad.addColorStop(0.4, "rgba(0, 136, 204, 0.07)");
      rb1Grad.addColorStop(1, "rgba(0, 136, 204, 0)");
      ctx.fillStyle = rb1Grad;
      ctx.fillRect(0, 0, w, h);

      // Blob 2
      const rb2Y = h * (0.7 + Math.sin(elapsed * 0.28) * 0.18);
      const rb2X = w * 0.98;
      const rb2Radius = w * 0.2;
      const rb2Grad = ctx.createRadialGradient(rb2X, rb2Y, 0, rb2X, rb2Y, rb2Radius);
      rb2Grad.addColorStop(0, "rgba(0, 136, 204, 0.10)");
      rb2Grad.addColorStop(0.5, "rgba(0, 136, 204, 0.04)");
      rb2Grad.addColorStop(1, "rgba(0, 136, 204, 0)");
      ctx.fillStyle = rb2Grad;
      ctx.fillRect(0, 0, w, h);

      // --- CENTER: Subtle drifting blob ---
      const cX = w * (0.5 + Math.sin(elapsed * 0.2) * 0.1);
      const cY = h * (0.45 + Math.cos(elapsed * 0.18) * 0.15);
      const cRadius = w * 0.25;
      const cGrad = ctx.createRadialGradient(cX, cY, 0, cX, cY, cRadius);
      cGrad.addColorStop(0, "rgba(0, 180, 190, 0.06)");
      cGrad.addColorStop(0.5, "rgba(0, 180, 190, 0.02)");
      cGrad.addColorStop(1, "rgba(0, 180, 190, 0)");
      ctx.fillStyle = cGrad;
      ctx.fillRect(0, 0, w, h);

      // --- Extra: small teal accent near top-left ---
      const aX = w * (0.08 + Math.sin(elapsed * 0.5) * 0.04);
      const aY = h * (0.1 + Math.cos(elapsed * 0.45) * 0.05);
      const aRadius = w * 0.15;
      const aGrad = ctx.createRadialGradient(aX, aY, 0, aX, aY, aRadius);
      aGrad.addColorStop(0, "rgba(0, 212, 170, 0.10)");
      aGrad.addColorStop(1, "rgba(0, 212, 170, 0)");
      ctx.fillStyle = aGrad;
      ctx.fillRect(0, 0, w, h);

      // --- Extra: small blue accent near top-right ---
      const bX = w * (0.92 + Math.cos(elapsed * 0.42) * 0.04);
      const bY = h * (0.12 + Math.sin(elapsed * 0.38) * 0.05);
      const bRadius = w * 0.14;
      const bGrad = ctx.createRadialGradient(bX, bY, 0, bX, bY, bRadius);
      bGrad.addColorStop(0, "rgba(0, 136, 204, 0.08)");
      bGrad.addColorStop(1, "rgba(0, 136, 204, 0)");
      ctx.fillStyle = bGrad;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default AnimatedGradient;
