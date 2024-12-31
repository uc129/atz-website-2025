import { Sidebar } from "../components/sidebar";


export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-8">
            <Sidebar />
            {children}
        </div>
    )
}