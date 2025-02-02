'use client';
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Page() {
    const { data: session /*status*/ } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session) {
            router.push("/");
        }
    }, [session, router]);
    const handleSignUp = async () => {
        try {
            //await signIn("google", { callbackUrl: "/" });
        } catch (error) {
            console.error("Sign up failed:", error);
            toast.error("Sign up failed, please try again.");
        }
    };
    return (
        <div className="w-screen h-screen flex flex-col justify-start items-center m-0 p-0">
            <section className="flex flex-row justify-center items-center h-[70%] w-1/2 rounded-lg overflow-hidden shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)] mt-32">
                <div className="m-0 p-0 h-full w-1/2 bg-[#0F0F46] text-white flex flex-col justify-center items-center">
                    <Image src='/SkyChain.jpg' alt="Google logo" width={250} height={150} />
                    <h1 className="font-bold text-4xl mb-4">Welcome to Sign Up</h1>
                    <h2 className="font-bold text-xl mb-6">Do you have an account?</h2>
                    <a href='login' className="gap-x-2 flex flex-row bg-[#EC2912] py-2 px-5 justify-center items-center rounded-lg font-bold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            width="28"
                            height="28"
                            strokeWidth="1.75">
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                        </svg>
                        Sign In
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center h-full w-1/2 p-5">
                    <h1 className="flex flex-row w-full h-auto text-4xl font-bold mb-8 justify-center items-center">Sign Up</h1>
                    <form className="flex flex-col justify-center items-center h-auto w-full text-lg font-semibold text-[#7a8188] gap-y-4">
                        <label className="flex flex-col justify-center items-start h-auto w-full">Username:
                            <input className="flex flex-row w-full h-auto py-3 px-4 bg-[#f2f2f2] rounded-xl text-black" type="text" />
                        </label>
                        <label className="flex flex-col justify-center items-start h-auto w-full">Email:
                            <input className="flex flex-row w-full h-auto py-3 px-4 bg-[#f2f2f2] rounded-xl text-black" type="text" />
                        </label>
                        <label className="flex flex-col justify-center items-start h-auto w-full">Password:
                            <input className="flex flex-row w-full h-auto py-3 px-4 bg-[#f2f2f2] rounded-xl text-black" type="password" />
                        </label>
                        <label className="flex flex-col justify-center items-start h-auto w-full">Confirm Password:
                            <input className="flex flex-row w-full h-auto py-3 px-4 bg-[#f2f2f2] rounded-xl text-black" type="password" />
                        </label>
                        <button onClick={handleSignUp} type="submit" className="gap-x-2 flex flex-row bg-[#EC2912] py-2 px-5 justify-center items-center rounded-lg font-bold text-white mt-8 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 17.85h-18c0 -4.05 1.421 -4.05 3.79 -4.05c5.21 0 1.21 -4.59 1.21 -6.8a4 4 0 1 1 8 0c0 2.21 -4 6.8 1.21 6.8c2.369 0 3.79 0 3.79 4.05z" />
                                <path d="M5 21h14" />
                            </svg>
                            Sign Up
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}