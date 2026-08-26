type IntelligenceFieldProps = {
  className?: string;
  dark?: boolean;
};

const nodes = [
  [92, 112], [218, 72], [342, 154], [478, 94], [606, 188], [748, 120], [898, 174], [1098, 94],
  [148, 350], [296, 286], [442, 374], [584, 302], [724, 410], [862, 326], [1018, 408], [1142, 286]
];

const paths = [
  "M92 112C162 112 164 72 218 72S284 154 342 154S410 94 478 94S542 188 606 188S680 120 748 120S824 174 898 174S1020 94 1098 94",
  "M148 350C220 350 232 286 296 286S370 374 442 374S516 302 584 302S652 410 724 410S798 326 862 326S954 408 1018 408S1086 286 1142 286",
  "M218 72L296 286M342 154L442 374M478 94L584 302M606 188L724 410M748 120L862 326M898 174L1018 408"
];

export default function IntelligenceField({ className = "", dark = false }: IntelligenceFieldProps) {
  const line = dark ? "#58C9C5" : "#087C83";
  const signal = dark ? "#A6E2DF" : "#13AAA5";

  return (
    <svg
      className={`intelligence-field ${dark ? "intelligence-field-dark" : ""} ${className}`}
      viewBox="0 0 1200 500"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke={line} strokeWidth="0.7" vectorEffect="non-scaling-stroke">
        {paths.map((d, index) => (
          <path key={d} d={d} pathLength="1" className={`intelligence-field-line intelligence-field-line-${index + 1}`} />
        ))}
      </g>
      <g fill={signal}>
        {nodes.map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r={index % 4 === 0 ? 2.4 : 1.5} className="intelligence-field-node" />
            {index % 5 === 0 ? <circle cx={cx} cy={cy} r="9" className="intelligence-field-pulse" /> : null}
          </g>
        ))}
      </g>
    </svg>
  );
}
