'use client';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import Image from "next/image";

export default function Page() {
    const { data: session /*status*/ } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session) {
            router.push("/");
        }
    }, [session, router]);
    const handleGoogleSignIn = async () => {
        try {
            await signIn("google", { callbackUrl: "/" });
        } catch (error) {
            console.error("Sign in failed:", error);
            toast.error("Sign in failed, please try again.");
        }
    };
    return (
        <div className="w-screen h-screen flex flex-col justify-start items-center m-0 p-0">
            <section className="flex flex-row justify-center items-center h-[60%] w-1/2 rounded-lg overflow-hidden shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)] mt-40">
                <div className="flex flex-col justify-center items-center h-full w-1/2 p-5">
                    <h1 className="flex flex-row w-full h-auto text-4xl font-bold mb-8 justify-center items-center">Sign In</h1>
                    <form className="flex flex-col justify-center items-center h-auto w-full text-lg font-semibold text-[#7a8188] gap-y-4">
                        <label className="flex flex-col justify-center items-start h-auto w-full">Email:
                            <input className="flex flex-row w-full h-auto py-3 px-4 bg-[#f2f2f2] rounded-xl text-black" type="text" />
                        </label>
                        <label className="flex flex-col justify-center items-start h-auto w-full">Password:
                            <input className="flex flex-row w-full h-auto py-3 px-4 bg-[#f2f2f2] rounded-xl text-black" type="password" />
                        </label>
                        <button type="submit" className="gap-x-2 flex flex-row bg-[#EC2912] py-2 px-5 justify-center items-center rounded-lg font-bold text-white mt-8 cursor-pointer">
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
                                <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                                <path d="M3 12h13l-3 -3" />
                                <path d="M13 15l3 -3" />
                            </svg>
                            Sign In
                        </button>
                    </form>
                    <button
                        className='gap-x-4 flex flex-row py-3 px-4 justify-center items-center rounded-lg font-semibold text-black mt-5 cursor-pointer border border-solid border-[#f2f2f2]'
                        onClick={handleGoogleSignIn}
                    >
                        <Image src='/googleLogo.png' alt="Google logo" width={28} height={28} /> Sign In with Google
                    </button>
                </div>
                <div className="m-0 p-0 h-full w-1/2 bg-[#0F0F46] text-white flex flex-col justify-center items-center">
                    <Image src='/SkyChain.jpg' alt="Google logo" width={250} height={150} />
                    <h1 className="font-bold text-4xl mb-4">Welcome to Sign In</h1>
                    <h2 className="font-bold text-xl mb-6">Don&apos;t have an account?</h2>
                    <a href='register' className="gap-x-2 flex flex-row bg-[#EC2912] py-2 px-5 justify-center items-center rounded-lg font-bold">
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
                        Sign Up
                    </a>
                </div>
            </section>
        </div>
    )
}