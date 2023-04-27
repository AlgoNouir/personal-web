// base
import * as React from "react";

// components
import Header from "@/components/header";

export default function Home() {
    return (
        <div className="flex h-screen flex-col items-center">
            <div className="container h-full">
                <Header />
            </div>
        </div>
    );
}
