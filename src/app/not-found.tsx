import Image from "next/image";

export const metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return (
        <div className="px-2 w-full">
            <div className="mx-auto h-screen py-4 flex flex-col justify-center items-center gap-4">
                <Image
                    className="m-0 rounded-xl"
                    src="/images/not-found-image.png"
                    width={97}
                    height={100}
                    sizes="100px"
                    alt="Page Not Found"
                    priority={true}
                    title="Page Not Found"
                />
                <h2 className="text-2xl">Not Found</h2>
            </div>
        </div>
    );
}
