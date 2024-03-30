import { ILayoutProps } from "../../interface/type";

export default function MainLayout({ children }: ILayoutProps) {
  return <main className="py-4 px-6">{children}</main>;
}
