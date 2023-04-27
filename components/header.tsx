export default function Header() {
    return (
        <div className="flex h-16 w-full flex-row items-center justify-between">
            <label className="font-bold">وبسایت شخصی مهدی نوری</label>
            <div className="h-fll grid h-full grid-cols-4 gap-5">
                <button className="transition-all hover:border-b hover:pb-1">
                    STORY
                </button>
                <button className="transition-all hover:border-b hover:pb-1">
                    PROJECTS
                </button>
                <button className="transition-all hover:border-b hover:pb-1">
                    RESOME
                </button>
                <button className="transition-all hover:border-b hover:pb-1">
                    SKILLS
                </button>
            </div>
        </div>
    );
}
