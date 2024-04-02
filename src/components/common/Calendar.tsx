import { useState, useEffect } from "react";

import { ICalendarProps } from "../../interface/type";

import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";

export default function Calendar({
  selectedDay = new Date(),
  setSelectedDay,
  isPrevMonth = true,
  isNextMonth = true,
}: ICalendarProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(() => {
    return new Date(2024, 3, 1);
  });
  const [today, setToday] = useState<Date>(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  });

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      setToday(now);
    }, 86400000);

    return () => clearInterval(interval);
  }, []);

  const isSameDay = (day1: Date, day2: Date | null | undefined) => {
    if (!day2) return false;
    return (
      day1.getFullYear() === day2.getFullYear() &&
      day1.getMonth() === day2.getMonth() &&
      day1.getDate() === day2.getDate()
    );
  };

  const onClickDay = (day: Date) => {
    if (isSameDay(day, selectedDay)) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      return new Date(
        prevMonth.getFullYear(),
        prevMonth.getMonth() - 1,
        prevMonth.getDate()
      );
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      return new Date(
        prevMonth.getFullYear(),
        prevMonth.getMonth() + 1,
        prevMonth.getDate()
      );
    });
  };

  const buildCalendarDays = () => {
    const curMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
    const curMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    const prevMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      0
    );
    const nextMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    const days: Date[] = Array.from(
      { length: curMonthStartDate },
      (_, index) => {
        return new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth() - 1,
          prevMonthEndDate.getDate() - index
        );
      }
    ).reverse();

    days.push(
      ...Array.from(
        { length: curMonthEndDate.getDate() },
        (_, index) =>
          new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            index + 1
          )
      )
    );

    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      days.push(
        ...Array.from(
          { length: remainingDays },
          (_, index) =>
            new Date(
              nextMonthStartDate.getFullYear(),
              nextMonthStartDate.getMonth(),
              index + 1
            )
        )
      );
    }
    return days;
  };

  const buildCalendarTag = (calendarDays: Date[]) => {
    return calendarDays.map((day: Date, index: number) => {
      if (day.getMonth() < currentMonth.getMonth()) {
        return (
          <td key={index} className="text-[#7e818c]">
            {isPrevMonth ? day.getDate() : ""}
          </td>
        );
      }
      if (day.getMonth() > currentMonth.getMonth()) {
        return (
          <td key={index} className="text-[#7e818c]">
            {isNextMonth ? day.getDate() : ""}
          </td>
        );
      }
      if (day.getTime() < today.getTime()) {
        return <td key={index}>{day.getDate()}</td>;
      }
      return (
        <td
          key={index}
          onClick={() => onClickDay(day)}
          className={`${
            isSameDay(day, selectedDay)
              ? "text-base-white bg-primary-point rounded-2xl"
              : ""
          }`}
        >
          {day.getDate()}
        </td>
      );
    });
  };

  const divideWeek = (calendarTags: JSX.Element[]) => {
    return calendarTags.reduce(
      (acc: JSX.Element[][], day: JSX.Element, i: number) => {
        if (i % 7 === 0) acc.push([day]);
        else acc[acc.length - 1].push(day);
        return acc;
      },
      []
    );
  };

  const calendarDays = buildCalendarDays();
  const calendarTags = buildCalendarTag(calendarDays);
  const calendarRows = divideWeek(calendarTags);

  return (
    <div className="w-[19.375rem] pt-6 pb-2 px-6 bg-base-white border rounded-2xl drop-shadow-calendar-shadow">
      <div className="flex justify-between pb-[1.125rem] border-b border-[#e4e5e7]">
        <button onClick={handlePrevMonth}>
          <ArrowRightIcon />
        </button>
        <span className="text-sm text-[#0f2552] font-bold">{`${currentMonth.getFullYear()}년 ${
          currentMonth.getMonth() + 1
        }월`}</span>
        <button onClick={handleNextMonth}>
          <ArrowLeftIcon />
        </button>
      </div>
      <table className="w-full table-fixed border-separate border-spacing-4">
        <thead>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th
                key={index}
                className="px-1 py-1 text-[0.625rem] text-[#7e818c] font-normal"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarRows.map((row: JSX.Element[], index: number) => (
            <tr key={index} className="text-center text-sm text-[#0f2552]">
              {row}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
