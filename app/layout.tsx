import type { ReactNode } from "react";
import "./style.css";
export const metadata = { title: "Next TopUp", description: "Gaming top-up storefront demo" };
export default function RootLayout({children}:{children:ReactNode}) { return <html lang="en"><body>{children}</body></html> }
