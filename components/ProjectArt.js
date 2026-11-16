// Small line drawings that sit on the hatch plates, one per project.
// Classes (s, p, r, fr, fw, fs, sg) are defined in globals.css so they follow the theme.

const art = {
  // a page of the design system: buttons, chips, a toggle, an input, a card, swatches
  mizan: (
    <>
      <rect className="p" x="30" y="30" width="96" height="32" rx="2" />
      <path className="r" d="M50 46h56" />
      <rect className="p" x="142" y="35" width="56" height="22" rx="11" />
      <rect className="fw" x="206" y="35" width="56" height="22" rx="11" />
      <rect className="p" x="278" y="35" width="52" height="22" rx="11" />
      <circle className="fr" cx="314" cy="46" r="7" />
      <rect className="p" x="30" y="82" width="140" height="92" rx="2" />
      <path className="s" d="M46 104h64M46 120h104M46 136h80" />
      <rect className="fr" x="46" y="150" width="34" height="9" rx="1" />
      <rect className="p" x="188" y="82" width="142" height="30" rx="2" />
      <path className="s" d="M202 97h52" />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} className="fs" style={{ fillOpacity: 0.35 + i * 0.16 }} cx={202 + i * 26} cy="146" r="10" />
      ))}
      <text x="188" y="174">TOKENS</text>
    </>
  ),
  // a video call over a heartbeat line
  telemedicine: (
    <>
      <rect className="p" x="72" y="22" width="216" height="118" rx="3" />
      <circle className="s" cx="180" cy="64" r="20" />
      <path className="s" d="M138 140c0-26 18-40 42-40s42 14 42 40" />
      <rect className="fs" x="232" y="32" width="46" height="32" rx="2" />
      <circle className="fr" cx="96" cy="40" r="3.5" />
      <path className="r" d="M20 176h98l8-14 12 32 11-24 6 6h187" />
    </>
  ),
  // a goal ring that is most of the way full
  savings: (
    <>
      <circle className="s" cx="180" cy="98" r="58" />
      <circle
        className="r"
        cx="180"
        cy="98"
        r="58"
        style={{ strokeWidth: 6, strokeDasharray: "262 365" }}
        transform="rotate(-90 180 98)"
      />
      <circle className="p" cx="180" cy="98" r="40" />
      <text className="serif" x="180" y="100" textAnchor="middle" style={{ fontSize: 17, fontStyle: "italic" }}>
        2,300
      </text>
      <text x="180" y="116" textAnchor="middle">SAR</text>
      <path className="sg" d="M68 168l24-14 22 8M254 36l24 12 28-8" />
    </>
  ),
  // a code editor explaining an error in Arabic
  qalam: (
    <>
      <rect className="p" x="38" y="20" width="284" height="152" rx="3" />
      <path className="s" d="M38 40h284" />
      <circle className="fw" cx="52" cy="30" r="3" />
      <circle className="fw" cx="64" cy="30" r="3" />
      <circle className="fw" cx="76" cy="30" r="3" />
      <path className="s" d="M56 62h72M56 78h112M56 94h56" />
      <path className="r" d="M56 101q4-4 8 0t8 0t8 0t8 0t8 0t8 0" />
      <rect className="fs" x="136" y="112" width="162" height="42" rx="3" />
      <path className="sg" d="M158 112l-8-10 22 10" />
      <text className="serif" x="217" y="138" textAnchor="middle" direction="rtl" style={{ fontSize: 14 }}>
        نسيت الفاصلة المنقوطة
      </text>
    </>
  ),
  // the word “khatt” with the three things the engine adjusts
  khatt: (
    <>
      <text className="serif" x="180" y="128" textAnchor="middle" style={{ fontSize: 112 }}>
        خط
      </text>
      <path className="r" d="M286 48v88M281 48h10M281 136h10" />
      <text x="294" y="96">SIZE</text>
      <path className="r" d="M64 168h232M64 163v10M296 163v10" />
      <text x="180" y="186" textAnchor="middle">MEASURE</text>
      <path className="sg" d="M54 30h28M54 40h18" />
    </>
  ),
  // one layout, mirrored
  hirfa: (
    <>
      <rect className="p" x="22" y="26" width="144" height="116" rx="2" />
      <circle className="fs" cx="42" cy="48" r="8" />
      <path className="s" d="M58 44h60M58 54h38M38 80h110M38 92h92M38 104h104" />
      <rect className="fr" x="38" y="118" width="40" height="10" rx="1" />
      <rect className="p" x="194" y="26" width="144" height="116" rx="2" />
      <circle className="fs" cx="318" cy="48" r="8" />
      <path className="s" d="M302 44h-60M302 54h-38M322 80h-110M322 92h-92M322 104h-104" />
      <rect className="fr" x="282" y="118" width="40" height="10" rx="1" />
      <path className="sg" style={{ strokeDasharray: "3 4" }} d="M180 16v140" />
      <text x="22" y="166">LTR</text>
      <text x="338" y="166" textAnchor="end">RTL</text>
    </>
  ),
  // a browser, a magnifier, and the marks it flags
  dalil: (
    <>
      <rect className="p" x="40" y="22" width="280" height="148" rx="3" />
      <path className="s" d="M40 42h280M60 66h150M60 82h190M60 98h110M60 114h170M60 130h90" />
      <circle className="fr" cx="224" cy="66" r="3.5" />
      <circle className="fr" cx="264" cy="82" r="3.5" />
      <circle className="p" cx="246" cy="112" r="32" style={{ stroke: "var(--rose)", strokeWidth: 1.75 }} />
      <path className="r" d="M270 136l26 26" style={{ strokeWidth: 2.5 }} />
      <path className="r" d="M234 112l8 8 16-18" />
    </>
  ),
  // a route that pairs people by campus and timetable
  rafeeq: (
    <>
      <path className="r" style={{ strokeDasharray: "2 6" }} d="M48 152C108 50 164 178 226 90S316 62 322 40" />
      <rect className="p" x="38" y="142" width="20" height="20" rx="1" />
      <circle className="fr" cx="48" cy="152" r="3" />
      <circle className="p" cx="226" cy="90" r="9" />
      <circle className="fr" cx="226" cy="90" r="3" />
      <rect className="fs" x="312" y="30" width="20" height="20" rx="1" />
      <path className="s" d="M130 56v22M122 67h16M170 150v-20M162 140h16" />
      <text x="38" y="178">CAMPUS</text>
      <text x="262" y="112">08:40</text>
    </>
  ),
};

export default function ProjectArt({ name, className = "" }) {
  return (
    <div className={`art hatch overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid meet" role="presentation">
        {art[name]}
      </svg>
    </div>
  );
}
