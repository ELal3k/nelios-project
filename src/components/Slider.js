export default function Slider() {
  return (
    <div className="w-full flex flex-col">
      <SliderBars />
      <div>
        <div className="relative h-1 rounded-md bg-accent_blue"></div>
        <div className="relative">
          <input
            type="range"
            value={0}
            min={0}
            max={10000}
            step={10}
            className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />

          <input
            type="range"
            value={10000}
            min={0}
            max={10000}
            step={10}
            className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  )
}

function SliderBars() {
  return (
    <>
      <div className="w-full h-12 grid grid-cols-20 ">
        <div></div>
        <div>
          <svg className="flex justify-center">
            <rect y="10" width="3%" height="40" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="15" width="3%" height="35" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="30" width="3%" height="20" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="5" width="3%" height="45" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="25" width="3%" height="25" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="8" width="3%" height="42" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="18" width="3%" height="32" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="12" width="3%" height="38" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="7" width="3%" height="43" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="28" width="3%" height="22" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="14" width="3%" height="36" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="22" width="3%" height="28" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="11" width="3%" height="39" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="33" width="3%" height="17" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="16" width="3%" height="34" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="9" width="3%" height="41" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="27" width="3%" height="23" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div>
          <svg className="flex justify-center">
            <rect y="19" width="3%" height="31" fill="#00B9F2" opacity="0.3" />
          </svg>
        </div>

        <div></div>
      </div>
    </>
  )
}
