import { ILayoutProps } from "../../interface/type";

export default function GlobalLayout({ children }: ILayoutProps) {
  return <div className="h-screen mt-[2.813rem]">{children}</div>;
}
