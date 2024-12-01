import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { ChevronDown } from "baseui/icon";
import Link from "next/link";



const Index: NextPage = () => {
    const toast = useToast();

    const [showSignupModal, setShowSignupModal] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [referral, setReferral] = useState("");

    const signup = async () => {
        // validate email input
        if (!emailInput || !emailInput.includes("@")) {
            toast({
                title: 'Error',
                description: 'Please enter a valid email',
                status: 'error',
            })
            return;
        }

        const res = await axios.post("/api/waitlist", {
            email: emailInput,
            referral
        });
        console.log(res.data);
        setShowSignupModal(false);
        setEmailInput("");
        setReferral("");
        toast({
            title: 'Success',
            description: 'You have been added to the waitlist',
            status: 'success',
        })
    }

    return <>

        <div className="text-white/90" style={{
            // backgroundImage: "url('gradient.png')",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
        }}>

            {/* <video src="/landingvideo.mp4" loop autoPlay playsInline muted className="w-full min-h-screen object-cover fixed top-0 left-0" style={{
                zIndex: -1
            }} /> */}

            <div className="fixed top-0 left-0 w-full min-h-screen bg-black" style={{zIndex: -2}} />
            <img src="/background.png" className="w-full min-h-screen object-cover fixed top-0 left-0 opacity-60" style={{
                zIndex: -1
            }} />

            {/* <img src="/gradient.png" className="w-screen absolute top-0 left-0" style={{
                zIndex: 0
            }} /> */}

            {showSignupModal && <>
                <div className="fixed w-screen max-w-full h-screen flex justify-center items-center p-10 backdrop-blur-lg" style={{
                    zIndex: 100
                }}>
                    <div className="w-full max-w-sm rounded-3xl bg-[#1A1919] border border-white/10">
                        <div className="flex justify-end p-4 cursor-pointer" onClick={() => {
                            setShowSignupModal(false);
                        }}>
                            <MdClose size={20} />
                        </div>
                        <div className="p-10 pt-0">
                            <img src="/someart.png" className="w-full rounded-lg" />

                            <div className="text-2xl font-bold mt-4 text-white/90">
                                Waitlist access
                            </div>
                            <div className="mt-2 text-sm">
                                Be the first to collect points and rewards for being an early adopter.
                            </div>

                            {/* Input modal with thin border */}
                            <input className="w-full text-sm mt-10 border border-white/10 rounded-lg bg-white/0 px-4 py-2 mt-4" placeholder="Your email" value={emailInput} onChange={(e) => {
                                setEmailInput(e.target.value);
                            }} />

                            <button className="rounded-full px-8 text-sm py-2 font-bold border border-[#3C3C3C]  w-full mt-4" onClick={() => {
                                // setShowSignupModal(false);
                                signup();
                            }}>
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </>}

            <div className="flex items-center p-5 justify-between fixed top-0 w-full" style={{ zIndex: 50 }}>
                <div className="flex items-center">
                    <div className="font-bold text-2xl text-white">SEND</div>

                    {/* <div className="mx-5 text-white/50">How it works</div>
                    <div className="mx-5 text-white/50">About us</div> */}
                </div>

                <div>
                    <Link href="/login">
                        <button className="rounded-full px-8 py-4 font-bold text-xs border border-white text-white hover:bg-[#44FF2B] hover:text-black duration-200 transition hover:border-[#44FF2B] backdrop-blur-lg" onClick={() => {
                        }}>
                            Sign In
                        </button>
                    </Link>
                    <Link href="/login">
                        <button className="ml-2 rounded-full px-8 py-4 font-bold text-black text-xs bg-[#44FF2B] hover:opacity-80 hover:duration-200 transition">
                            Send
                        </button>
                    </Link>
                </div>

            </div>

            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center max-w-6xl justify-center w-full" style={{
                    height: '90vh',
                }}>
                    <div className="p-5 md:p-10 flex flex-col-reverse md:flex-row items-center justify-center w-full">
                        <div className="text-6xl md:text-8xl mt-10 md:mt-0 flex flex-col items-center  text-white" style={{
                            fontSize: 'max(8vw, 60px)',
                        }}>
                            <div className="sans-wide font-bold -ml-10" style={{
                            }}>SEND <span className="rainbow-text" style={{}}>SOL</span> <img src="/dogwif.png" className="h-20 md:h-32 inline-block -ml-3 -mt-3 absolute" /></div>
                            <div className=" sans-wide font-bold -ml-10">TO YOUR</div>
                            <div className="sans-wide font-bold -ml-10">FRIENDS<img src="/slerf.png" className="h-16 inline-block -mt-2  absolute" /></div>

                            <div style={{
                                letterSpacing: '-0.01em',
                            }} className="mt-10 text-xl max-w-sm text-center font-semibold">Send Solana from your Phantom wallet to any number, free.</div>

                            <Link href="/login">
                                <button className="mt-10 rounded-full px-12 py-4 font-bold text-black text-lg bg-[#44FF2B] hover:opacity-80 hover:duration-200 transition">
                                    Get Started
                                </button>
                            </Link>

                            {/* <div className="flex flex-col items-center mt-4">
                                <div className="mt-2 text-xs text-white/50 max-w-sm text-center">
                                    <div>Send from your Phantom wallet with 0% transfer fees net Solana tx fees. Friends can use the SOL to buy tokens like dogwif, slerf and more. Content courtesy of "cash.app"</div>
                                </div>
                            </div> */}
                        </div>

                    </div>

                    {/* <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full p-4 md:p-10 -m-10">
                        <div className="md:w-1/3 border border-white/10 rounded-3xl h-48 flex items-center">
                            <div className="p-8 flex flex-col items-center text-center">
                                <div className="text-xl font-bold">Send SOL to your friend&apos;s number</div>
                                <div className="text-white/70 mt-2">Your friends receive a text 📱 with a sign up to receive funds in seconds. ⚡️</div>
                            </div>
                        </div>
                        <div className="md:w-1/3 border border-white/10 rounded-3xl flex items-center h-48">
                            <div className="p-8 flex flex-col items-center text-center">
                                <div className="text-xl font-bold">Swap to Memecoins</div>
                                <div className="text-white/70 mt-2">Your friends can swap 🌎 on SEND just like you would on Raydium.</div>
                            </div>
                        </div>
                        <div className="md:w-1/3 border border-white/10 rounded-3xl h-48 flex items-center">
                            <div className="p-8 flex flex-col items-center text-center">
                                <div className="text-xl font-bold">A world of memes</div>
                                <div className="text-white/70 mt-2">Dogwif, BOME, SLERP are just a few of the many tokens available on SEND.</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col items-center">

                        <div className="text-5xl mb-10">How it works</div>
                        <div className="border border-white/10 rounded-3xl flex items-center max-w-sm mt-2">
                            <div className="p-4 flex flex-col items-center text-center w-full">
                                <div className="text-xl font-bold">🪙 Step 1 </div>
                                <div className="text-white/70 mt-2">Send 1 SOL using your Phantom wallet to Tom&apos;s number and a note</div>
                            </div>
                        </div>
                        <BsArrowDown size={22} className="text-white/80 mt-2" />
                        <div className="border border-white/10 rounded-3xl flex items-center w-full max-w-sm mt-2">
                            <div className="p-4 flex flex-col items-center text-center w-full">
                                <div className="text-xl font-bold">🔔 Step 2 </div>
                                <div className="text-white/70 mt-2">Tom gets notified</div>
                            </div>
                        </div>
                        <BsArrowDown size={22} className="text-white/80 mt-2" />
                        <div className="border border-white/10 rounded-3xl flex items-center w-full max-w-sm mt-2">
                            <div className="p-4 flex flex-col items-center text-center w-full">
                                <div className="text-xl font-bold">💰 Step 3 </div>
                                <div className="text-white/70 mt-2">Tom signs in and receives your SOL. He can then trade on the platform.</div>
                            </div>
                        </div>
                        <BsArrowDown size={22} className="text-white/80 mt-2" />
                        <div className="border border-white/10 rounded-3xl flex items-center w-full max-w-sm mt-2">
                            <div className="p-4 flex flex-col items-center text-center w-full">
                                <div className="text-xl font-bold">🚀 Step 4 </div>
                                <div className="text-white/70 mt-2">Go to the moon with your friends!</div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div> */}
                </div>
                <div className="flex justify-center">
                    <ChevronDown size={35} className="text-white/80 animate-bounce" />
                </div>

                <div className="bg-[#6420FF] p-10 w-full flex flex-col justify-center  relative" style={{
                    minHeight: '90vh',
                }}>
                    <img src="/market.png" className="w-screen h-full -mt-10 -mb-10 left-0 absolute object-cover opacity-50 md:opacity-50" style={{
                        objectPosition: 'top',
                    }} />

                    <div className="text-5xl md:text-8xl mt-10 md:mt-0 flex flex-col items-center text-white z-10" style={{
                        letterSpacing: '-0.01em',
                    }}>
                        <div className="sans-wide font-bold -ml-10" style={{
                        }}>BUY <img src="/bome.png" className="h-20 md:h-24 inline-block ml-2 absolute" /></div>
                        <div className="sans-wide font-bold -ml-10">MEMECOINS<img src="/slerf.png" className="h-16 inline-block -mt-2  absolute" /></div>

                        <div className="mt-10 text-xl max-w-sm text-center font-semibold">Buy directly on SEND. Dogwif, BOME, SLERP are just a click away.</div>

                        <div className="flex flex-col items-center mt-4">
                            <div className="mt-2 text-xs text-white/50 max-w-sm text-center">
                                <div>Trade Memecoins without having to deal with wallets.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#2049ff] p-10 w-full flex flex-col justify-center items-center relative" style={{
                    minHeight: '90vh',
                }}>
                    <img src="/coinsflying.jpg" className="w-screen h-full -mt-10 -mb-10 left-0 absolute object-cover opacity-50 md:opacity-75" style={{
                        objectPosition: 'top'
                    }} />

                    <div className="flex flex-col max-w-5xl w-full">
                        <div className="text-5xl md:text-7xl mt-10 md:mt-0 flex flex-col items-left text-white z-10 p-0 md:p-10" style={{
                            letterSpacing: '-0.01em',
                        }}>
                            <div>
                                <div className="sans-wide font-bold">INSTANT,</div>
                                <div className="sans-wide font-bold">FREE</div>
                                <div className="mt-10 text-xl -sm font-semibold">Sending Sol is fast, easy and fee-less.</div>

                                <div className="text-lg flex">
                                    <div className="flex flex-col items-center">
                                        <div className="border border-white/10 rounded-3xl flex items-center max-w-sm mt-10 backdrop-blur-lg">
                                            <div className="p-4 flex flex-col  w-full">
                                                <div className="text-sm font-bold">🪙 Step 1 </div>
                                                <div className="mt-2">Send 1 SOL using your Phantom wallet to Tom&apos;s number and a note.</div>
                                            </div>
                                        </div>
                                        {/* <BsArrowDown size={22} className="text-white/80 mt-2" /> */}
                                        <div className="border border-white/10 rounded-3xl flex items-center w-full max-w-sm mt-2 backdrop-blur-lg">
                                            <div className="p-4 flex flex-col  w-full">
                                                <div className="text-sm font-bold">🔔 Step 2 </div>
                                                <div className="mt-2">Tom gets notified through text.</div>
                                            </div>
                                        </div>
                                        {/* <BsArrowDown size={22} className="text-white/80 mt-2" /> */}
                                        <div className="border border-white/10 rounded-3xl flex items-center w-full max-w-sm mt-2 backdrop-blur-lg">
                                            <div className="p-4 flex flex-col  w-full">
                                                <div className="text-sm font-bold">💰 Step 3 </div>
                                                <div className="mt-2">Tom signs in and receives your SOL. He can freely trade Memecoins on SEND, or withdraw.</div>
                                            </div>
                                        </div>
                                        {/* <BsArrowDown size={22} className="text-white/80 mt-2" /> */}
                                        <div className="border border-white/10 rounded-3xl flex items-center w-full max-w-sm mt-2 backdrop-blur-lg">
                                            <div className="p-4 flex flex-col w-full">
                                                <div className="text-sm font-bold">🚀 Step 4 </div>
                                                <div className="mt-2">Go to the moon with your friends!</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <div className="p-10 bg-[#6420FF] flex flex-col w-full items-center">
                <div className="max-w-5xl md:p-10 w-full">
                    <div className="w-full md:p-10 relative rounded-2xl flex flex-col items-center justify-center">
                        <div className="absolute rounded-2xl top-0 left-0 w-full h-full" >
                            {/* <video src="landingvideo.mp4" className="w-full h-full object-cover rounded-3xl" autoPlay playsInline muted loop /> */}
                            <div className="bg-black w-full h-full object-cover rounded-3xl z-1 absolute" />
                            <img src="/rocket.png" className="w-full h-full object-cover rounded-3xl opacity-60 z-2" />
                        </div>
                        <div className="z-10 p-5 text-center text-5xl font-bold text-white py-20">
                            <div>Get started with</div>
                            <div className="rainbow-text">SEND</div>
                            <Link href="/login">
                            <button className="rounded-full px-8 text-sm py-2 font-bold border-2 border-white/80 text-white backdrop-blur-xl w-full mt-6 hover:bg-white hover:text-blue-600 duration-200 transition" onClick={() => {
                            }}>
                                Sign Up
                            </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


        </div>





        {/* <Footer /> */}

    </>
}

export default Index;