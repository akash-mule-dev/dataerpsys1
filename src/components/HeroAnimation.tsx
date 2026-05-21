"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";
import { MaterialIcon } from "@/components/ui/Container";

/**
 * Drop a `.lottie` file into `public/hero.lottie` and the animation will load.
 * Without one, a CSS-animated 3D dashboard fallback renders instead.
 */
const LOCAL_LOTTIE = "/hero.lottie";

export function HeroAnimation() {
  const [lottieAvailable, setLottieAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(LOCAL_LOTTIE, { method: "HEAD" })
      .then((r) => !cancelled && setLottieAvailable(r.ok))
      .catch(() => !cancelled && setLottieAvailable(false));
    return () => {
      cancelled = true;
    };
  }, []);

  if (lottieAvailable === true) {
    return (
      <div className="relative w-full max-w-[520px] aspect-square">
        <DotLottieReact
          src={LOCAL_LOTTIE}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  }

  return <DashboardSceneFallback />;
}

function DashboardSceneFallback() {
  return (
    <div className="relative w-full max-w-[520px] aspect-square [perspective:1200px]">
      <div className="absolute inset-0 [transform-style:preserve-3d] hero-scene-spin">
        {/* glowing aura */}
        <div className="absolute inset-[-8%] rounded-[2rem] bg-[radial-gradient(closest-side,_rgba(28,82,210,0.25),_transparent_70%)] blur-2xl" />

        {/* main dashboard card */}
        <div className="absolute inset-[4%] rounded-2xl bg-surface-white border border-border-subtle shadow-[0_24px_64px_-12px_rgba(10,8,59,0.25)] [transform:rotateY(-8deg)_rotateX(6deg)] flex flex-col gap-3 p-5">
          {/* top bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-surface-container-high" />
              <span className="w-2 h-2 rounded-full bg-surface-container-high" />
              <span className="w-2 h-2 rounded-full bg-surface-container-high" />
            </div>
            <span className="font-label-sm text-label-sm text-text-muted uppercase tracking-widest">
              ERP Live
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <span className="font-label-sm text-label-sm text-success">OK</span>
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: "trending_up", label: "Throughput", value: "98%" },
              { icon: "schedule", label: "Latency", value: "42ms" },
              { icon: "verified", label: "Uptime", value: "99.95%" },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded-lg bg-surface-container-low p-2.5 flex flex-col gap-0.5"
              >
                <div className="flex items-center gap-1">
                  <MaterialIcon
                    name={k.icon}
                    className="text-primary-container text-base"
                    filled
                  />
                  <span className="font-label-sm text-label-sm text-text-muted truncate">
                    {k.label}
                  </span>
                </div>
                <span className="font-headline-md text-headline-md text-text-primary">
                  {k.value}
                </span>
              </div>
            ))}
          </div>

          {/* line chart */}
          <div className="relative flex-1 min-h-0 rounded-lg bg-surface-container-low p-3 overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-sm text-label-sm text-text-muted uppercase tracking-widest">
                Operations
              </span>
              <span className="font-label-sm text-label-sm text-primary-container">
                Last 7d
              </span>
            </div>
            <svg
              viewBox="0 0 400 140"
              className="w-full h-[calc(100%-1.5rem)]"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1c52d2" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#1c52d2" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* grid */}
              {[28, 56, 84, 112].map((y) => (
                <line
                  key={y}
                  x1="0"
                  x2="400"
                  y1={y}
                  y2={y}
                  stroke="#e2e8f0"
                  strokeDasharray="3 4"
                />
              ))}
              {/* fill */}
              <path
                d="M0,100 C40,80 70,40 110,55 C150,70 180,30 220,40 C260,50 300,15 340,30 L400,20 L400,140 L0,140 Z"
                fill="url(#lineFill)"
              />
              {/* line */}
              <path
                d="M0,100 C40,80 70,40 110,55 C150,70 180,30 220,40 C260,50 300,15 340,30 L400,20"
                fill="none"
                stroke="#1c52d2"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="hero-line-draw"
              />
              {/* dots */}
              {[
                [110, 55],
                [220, 40],
                [340, 30],
              ].map(([x, y], i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#1c52d2"
                  className="hero-dot-pulse"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
              ))}
            </svg>
          </div>

          {/* status row */}
          <div className="flex items-center justify-between rounded-lg bg-text-primary text-white p-3">
            <div className="flex items-center gap-2">
              <MaterialIcon name="hub" className="text-primary-fixed text-lg" filled />
              <span className="font-label-md text-label-md">Integrations</span>
            </div>
            <span className="font-label-sm text-label-sm text-primary-fixed-dim">
              SAP · Oracle · Salesforce
            </span>
          </div>
        </div>

        {/* floating side cards */}
        <div className="absolute -left-4 top-1/3 w-32 rounded-lg bg-surface-white border border-border-subtle shadow-[0_8px_24px_-8px_rgba(10,8,59,0.2)] p-3 [transform:translateZ(60px)_rotateY(8deg)] hero-card-float">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary-container/15 flex items-center justify-center">
              <MaterialIcon
                name="memory"
                className="text-primary-container text-base"
                filled
              />
            </div>
            <span className="font-label-sm text-label-sm text-text-primary">
              SAP S/4
            </span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-surface-container-high overflow-hidden">
            <div className="h-full bg-primary-container hero-bar-grow" />
          </div>
        </div>

        <div
          className="absolute -right-2 bottom-[22%] w-36 rounded-lg bg-text-primary text-white shadow-[0_8px_24px_-8px_rgba(10,8,59,0.35)] p-3 [transform:translateZ(80px)_rotateY(-10deg)] hero-card-float"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="flex items-center gap-2">
            <MaterialIcon
              name="bolt"
              className="text-primary-fixed text-base"
              filled
            />
            <span className="font-label-sm text-label-sm">Cycle Time</span>
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="font-headline-md text-headline-md">-37%</span>
            <span className="font-label-sm text-label-sm text-primary-fixed-dim">
              vs Q1
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroSceneSpin {
          0%, 100% { transform: rotateY(0deg) rotateX(0deg); }
          50% { transform: rotateY(2deg) rotateX(-1deg); }
        }
        .hero-scene-spin {
          animation: heroSceneSpin 12s ease-in-out infinite;
        }
        @keyframes heroCardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .hero-card-float {
          animation: heroCardFloat 6s ease-in-out infinite;
        }
        @keyframes heroLineDraw {
          0% { stroke-dasharray: 600; stroke-dashoffset: 600; }
          60%, 100% { stroke-dasharray: 600; stroke-dashoffset: 0; }
        }
        .hero-line-draw {
          animation: heroLineDraw 3.5s ease-out forwards;
        }
        @keyframes heroDotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.6; }
        }
        .hero-dot-pulse {
          transform-origin: center;
          transform-box: fill-box;
          animation: heroDotPulse 2.4s ease-in-out infinite;
        }
        @keyframes heroBarGrow {
          0% { width: 10%; }
          70%, 100% { width: 82%; }
        }
        .hero-bar-grow {
          animation: heroBarGrow 2.5s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-scene-spin,
          .hero-card-float,
          .hero-line-draw,
          .hero-dot-pulse,
          .hero-bar-grow {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
