import { ILayoutProps } from "../../interface/type";

export default function MainLayout({ children }: ILayoutProps) {
  return <main className="h-[calc(100vh-6.313rem)] py-4 px-6">{children}</main>;
}
