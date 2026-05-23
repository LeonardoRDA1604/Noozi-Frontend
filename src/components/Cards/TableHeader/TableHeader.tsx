import { COLUMNS,GRID_COLS } from "@/constants/Columns";
import { GetBreakpoints } from "@/utils/GetBrakpoints";

export default function TableHearder() {
  return (
    <div className={`grid ${GRID_COLS} w-full rounded-xl text-white font-semibold bg-[#1752FD]`}>
      {COLUMNS.map((col, index, arr) => (
        <div
          key={col.label}
          className={`
            ${GetBreakpoints(col.priority)}
            items-center justify-center
            p-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px]
            ${index < arr.length - 1 ? "border-r-2 border-white" : ""}
          `}
        >
          <span className="font-medium">{col.label}</span>
        </div>
      ))}
    </div>
  );
}