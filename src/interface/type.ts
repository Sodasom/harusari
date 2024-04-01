import { ReactNode } from "react";

// layout
export interface ILayoutProps {
  children: ReactNode;
}

// icon
export interface IIconProps {
  width: string;
  height: string;
  fill?: string;
}

// calendar
export interface ICalendarProps {
  selectedDay: Date;
  setSelectedDay: React.Dispatch<Date | null>;
  isPrevMonth: boolean;
  isNextMonth: boolean;
}
