'use client'
import React from 'react'

export const ResourceBanner = ({ title, description }: any) => {
  return (
    <div className="bg-[linear-gradient(90deg,#006CFF_62%,#049FF3_100%)] px-8 py-8  ">
      <div className=" flex items-center justify-between gap-4rem max-w-[80rem] mx-auto">
        <div className="w-[50%] flex flex-col gap-4">
          <div className="flex flex-col">
            <h1
              className="text-white font-extrabold text-[1.8rem] leading-10 m-0"
              style={{ fontWeight: 900 }}
            >
              {title && title}
            </h1>
          </div>
          <p className="text-white text-[1.2rem] leading-[140%] ">{description && description}</p>
        </div>
        <div className="hero-visual w-[40%]" aria-hidden="true">
          <svg
            viewBox="0 0 540 460"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            focusable="false"
          >
            <defs>
              <filter id="hv-sh" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow
                  dx="0"
                  dy="10"
                  stdDeviation="12"
                  flood-color="#0B1638"
                  flood-opacity=".28"
                />
              </filter>
            </defs>

            {/* <!-- Graph card --> */}
            <g transform="rotate(-4 185 155)" filter="url(#hv-sh)">
              <rect x="20" y="30" width="330" height="250" rx="22" fill="#fff" />
              <g transform="translate(40 50)">
                <text
                  x="0"
                  y="16"
                  font-family="Poppins,Arial,sans-serif"
                  font-size="14"
                  font-weight="600"
                  fill="#58637F"
                >
                  y = f(x)
                </text>
                <g stroke="#E3E9F7" stroke-width="1">
                  <path d="M0 40H290M0 76H290M0 112H290M0 148H290M0 184H290" />
                  <path d="M0 30V200M58 30V200M116 30V200M174 30V200M232 30V200M290 30V200" />
                </g>
                <path d="M0 140H290" stroke="#0B1638" stroke-width="2" />
                <path d="M145 22V200" stroke="#0B1638" stroke-width="2" />
                <path
                  d="M10 30C90 230 200 230 280 30"
                  fill="none"
                  stroke="#1656F5"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M95 180H195"
                  stroke="#FFB800"
                  stroke-width="3"
                  stroke-dasharray="6 5"
                  stroke-linecap="round"
                />
                <circle cx="145" cy="180" r="7" fill="#1656F5" stroke="#fff" stroke-width="3" />
                <rect x="165" y="186" width="98" height="26" rx="13" fill="#EAF0FF" />
                <text
                  x="214"
                  y="204"
                  text-anchor="middle"
                  font-family="Poppins,Arial,sans-serif"
                  font-size="13"
                  font-weight="700"
                  fill="#1656F5"
                >
                  f&#8242;(x) = 0
                </text>
              </g>
            </g>

            {/* <!-- Question card --> */}
            <g transform="translate(170 250) rotate(3 170 85)" filter="url(#hv-sh)">
              <rect width="340" height="170" rx="22" fill="#fff" />
              <rect x="22" y="20" width="40" height="24" rx="12" fill="#1656F5" />
              <text
                x="42"
                y="37"
                text-anchor="middle"
                font-family="Poppins,Arial,sans-serif"
                font-size="13"
                font-weight="700"
                fill="#fff"
              >
                Q7
              </text>
              <rect x="70" y="20" width="76" height="24" rx="12" fill="#EAF0FF" />
              <text
                x="108"
                y="37"
                text-anchor="middle"
                font-family="Poppins,Arial,sans-serif"
                font-size="12"
                font-weight="600"
                fill="#0F43C2"
              >
                Calculus
              </text>
              <rect x="154" y="20" width="36" height="24" rx="12" fill="#EEE8FF" />
              <text
                x="172"
                y="37"
                text-anchor="middle"
                font-family="Poppins,Arial,sans-serif"
                font-size="12"
                font-weight="700"
                fill="#4A2BB8"
              >
                HL
              </text>
              <text
                x="22"
                y="90"
                font-family="'Cambria Math','STIX Two Math','Times New Roman',serif"
                font-size="30"
                fill="#0B1638"
              >
                &#8747;
                <tspan font-size="15" dy="13">
                  0
                </tspan>
                <tspan font-size="15" dy="-30" dx="-8">
                  1
                </tspan>
                <tspan dy="17" dx="8">
                  {' '}
                  x e
                </tspan>
                <tspan font-size="18" dy="-12">
                  x
                </tspan>
                <tspan dy="12"> dx</tspan>
              </text>
              <rect x="22" y="118" width="138" height="34" rx="17" fill="#FFD60A" />
              <text
                x="91"
                y="140"
                text-anchor="middle"
                font-family="Poppins,Arial,sans-serif"
                font-size="13"
                font-weight="700"
                fill="#0B1638"
              >
                Reveal Answer
              </text>
              <rect x="172" y="118" width="128" height="34" rx="17" fill="#E3F6EC" />
              <path
                d="M188 135l5 5 9-10"
                fill="none"
                stroke="#13693B"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <text
                x="250"
                y="140"
                text-anchor="middle"
                font-family="Poppins,Arial,sans-serif"
                font-size="13"
                font-weight="700"
                fill="#13693B"
              >
                Answer = 1
              </text>
            </g>

            {/* <!-- Floating maths chips --> */}
            <circle cx="468" cy="62" r="30" fill="#FFD60A" filter="url(#hv-sh)" />
            <text
              x="468"
              y="74"
              text-anchor="middle"
              font-family="'Cambria Math','Times New Roman',serif"
              font-size="34"
              font-weight="700"
              fill="#0B1638"
            >
              &#960;
            </text>
            <rect
              x="372"
              y="132"
              width="140"
              height="38"
              rx="19"
              fill="#ffffff"
              fill-opacity=".18"
              stroke="#fff"
              stroke-opacity=".5"
            />
            <text
              x="442"
              y="157"
              text-anchor="middle"
              font-family="'Cambria Math','Times New Roman',serif"
              font-size="16"
              fill="#fff"
            >
              dy/dx = 2x
            </text>
            <rect
              x="6"
              y="312"
              width="150"
              height="40"
              rx="20"
              fill="#ffffff"
              fill-opacity=".18"
              stroke="#fff"
              stroke-opacity=".5"
            />
            <text
              x="81"
              y="338"
              text-anchor="middle"
              font-family="'Cambria Math','Times New Roman',serif"
              font-size="16"
              fill="#fff"
            >
              sin&#178;&#952; + cos&#178;&#952; = 1
            </text>
            <circle cx="44" cy="408" r="24" fill="#0B1638" />
            <text
              x="44"
              y="418"
              text-anchor="middle"
              font-family="'Cambria Math','Times New Roman',serif"
              font-size="28"
              fill="#fff"
            >
              &#931;
            </text>
            <circle cx="510" cy="232" r="20" fill="#ffffff" fill-opacity=".2" />
            <text
              x="510"
              y="241"
              text-anchor="middle"
              font-family="'Cambria Math','Times New Roman',serif"
              font-size="24"
              fill="#fff"
            >
              &#8730;
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}
