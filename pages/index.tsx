// base
import * as React from "react";

// components
import Header from "@/components/header";

export default function Home() {
    return (
        <div className="flex h-screen flex-col items-center">
            <div className="container h-full space-y-5">
                <Header />
                <div className="flex h-fit w-full flex-row items-center justify-evenly space-x-24 p-24 rtl:space-x-reverse">
                    <div className="relative z-10 h-[600px] w-[400px] rounded-full bg-card">
                        <div className="absolute right-5 top-10 h-20 w-20 rounded-full bg-info" />
                        <div className="absolute -right-16 bottom-36 h-24 w-24  rounded-full bg-info" />
                        <div className="absolute -left-10 top-36 h-36 w-36 rounded-full bg-info" />
                    </div>
                    <div className="relative h-[400px] w-[700px] space-y-7">
                        <h1 className="text-7xl font-bold">
                            کد نویسی آسان است
                        </h1>
                        <p className="text-2xl">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                        </p>
                        <button
                            className="absolute bottom-0 left-0 w-44 rounded-xl bg-primary py-5 font-bold
                            text-secondary"
                        >
                            مشاهده پروژه ها
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
