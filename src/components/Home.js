import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import star from '../assets/star.png';
import about from '../assets/about.png';
import feature from '../assets/feature.png';
import data from '../assets/data.png';
import video from '../assets/video.mp4';
import bg_top from '../assets/bg_top.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
        Aos.refresh();
    }, [])

    return (
        <div className="bg-black-100 font-montserat overflow-hidden text-white-100">

            <div className='bg-purple-100 py-3 text-center'>
                Try our beta version update Here!
            </div>

            {/* top section */}

            <video src={video} autoPlay height="500" muted loop className='absolute opacity-40 left-0 right-0 w-full'></video>

            <div className="lg:px-20 px-5 bg-top relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-12 py-20">
                        <div className="text-center lg:w-8/12">

                            <p className='py-5 text-lg'>
                                Decentra protocol
                            </p>

                            <h2 data-aos='fade-up' className='md:text-6xl text-3xl font-jakarta font-bold text-white-100'>
                                Decentra protocol, the future of data transfer in blockchain networks.
                            </h2>

                            <p data-aos='fade-out' className='pt-8 pb-6 text-xl leading-loose'>
                                Introducing DECENTRA PROTOCOL, A Blockchain and IPFS Framework for Secure File Sharing and Data Provenance
                            </p>

                            <div data-aos='zoom-in' className="flex items-center justify-center gap-12 mx-auto">
                                <a href="/">
                                    <button className="text-white-100 bg-purple-100 py-4 text-lg md:px-8 px-3 rounded-md font-semibold mt-5">
                                        Get Started
                                    </button>
                                </a>

                                <a href="/">
                                    <button className="text-white-100 font-semibold underline text-lg pt-4">
                                        Learn More
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-12 py-12">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full">

                            <h2 className='md:text-5xl text-3xl font-bold text-white-100'>
                                Introducing DECENTRA PROTOCOL
                            </h2>

                            <p className='pt-6 pb-4'>
                                A Blockchain and IPFS Framework for Secure File Sharing and Data Provenance
                            </p>

                            <p className='py-5 leading-loose'>
                                The Decentra Protocol leverages the power of blockchain technology to provide a tamper-proof and transparent record of data transactions. This means that all file transfers and access requests are recorded on a decentralized ledger, which is secured by a consensus mechanism and cannot be altered by any single entity.
                            </p>

                            <p className='leading-loose'>
                                Decentra Protocol is an arbitrum based project developing a decentralized platform for file sharing and data provenance. The protocol's focus on user privacy, security, and data integrity makes it an ideal solution for a wide range of applications, and its flexible design enables it to be customized to meet the specific needs of different users.
                            </p>

                        </div>

                        <div data-aos="zoom-in" data-aos-delay="350" className=" md:mt-0 mt-12">
                            <img src={about} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>

                    </div>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="350" className='absolute right-1/3 -mt-32 lg:block hidden'>
                <img src={star} alt="Logo" className='w-10/12' />
            </div>

            {/* features section */}

            <div id='features' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-center items-center gap-x-16 py-16">


                        <div data-aos="zoom-in" data-aos-delay="350" className="">
                            <img src={feature} alt="Logo" className='' />
                        </div>

                        <div data-aos="fade-left" className="lg:w-1/2 w-full md:mt-0 mt-12 text-right">

                            <h2 className='md:text-5xl text-3xl font-bold text-white-100'>
                                Key feature
                            </h2>

                            <p className='py-6 leading-loose opacity-80 text-xl'>
                                One of the key features of the Decetra Protocol is its emphasis on user privacy and security. All files shared through the protocol are encrypted using end-to-end encryption, which means that only the sender and receiver have access to the unencrypted content. This ensures that files are protected from unauthorized access or interception, even if they are intercepted during transmission.
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            {/* Achievement section */}

            <div id='achievement' className="">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">
                    <div data-aos="fade-up" data-aos-delay="350" className='lg:w-10/12 text-center flex flex-col mx-auto'>

                        <h3 data-aos="slide-up" className='md:text-5xl text-3xl font-bold text-white-100'>
                            Experience The New Age of Data Transfer
                        </h3>

                        <p className='pt-6 leading-loose opacity-60 lg:w-8/12 flex mx-auto'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                        </p>

                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-delay="350" className="">
                    <img src={data} alt="Logo" className='' />
                </div>
            </div>

            {/* How it Works */}

            <div id='working' className="mt-8">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">



                    <div className='flex justify-center gap-x-20 mx-auto'>

                        <div className="lg:w-1/2 w-full">
                            <h3 data-aos='fade-up' className="md:text-6xl text-2xl font-montserat font-bold text-blur">
                                Flexible &
                                Customisable
                            </h3>
                            <h3 className="md:text-6xl text-2xl font-montserat font-bold">
                                Important Aspect
                            </h3>
                            <p data-aos='fade-in' className='pt-6 leading-loose'>
                                The Decetra Protocol can be used in a wide range of applications, including enterprise file sharing, digital asset management, and secure data exchange. The protocol is designed to be flexible and customizable, so that it can be tailored to the specific needs of different use cases.
                            </p>
                        </div>

                        <div className='border-l-4 border-black-50 h-80 mt-12 lg:block hidden'>

                        </div>

                        <div className="lg:w-1/2 w-full">
                            <h3 data-aos='fade-up' className="md:text-6xl text-2xl font-montserat font-bold text-blur">
                                Transparency
                                is a must
                            </h3>
                            <h3 className="md:text-6xl text-2xl font-montserat font-bold">
                                Another Important Aspect
                            </h3>
                            <p data-aos='fade-in' className='pt-6 leading-loose'>
                                Another important aspect of the Decetra Protocol is its focus on data provenance. The protocol enables users to track the history of their files, including all access requests, modifications, and transfers. This provides a transparent and auditable record of data transactions, which can be used to verify the authenticity and integrity of files.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/*  */}

            <div
                id="contract"
                className="lg:py-12 py-5 lg:px-8 px-5 container mx-auto"
            >
                <h3 className="md:text-6xl text-2xl font-montserat font-semibold text-center">
                    CONTRACT & TOKEN SUPPLY
                </h3>

                <div className='lg:flex items-center justify-between gap-8 py-8 space-y-4'>
                    <div className='border border-custom p-12 h-72 flex items-center justify-center'>
                        <p className='text-xl font-semibold text-center'>
                            Contract Name:
                            DECENTRA PROTOCOL
                            ($DCP)
                        </p>
                    </div>

                    <div>
                        <div className='lg:flex items-baseline justify-between gap-8 space-y-6'>
                            <div className='border border-custom p-8'>
                                <p className='text-xl font-semibold text-center'>
                                    Contract Address:
                                    TBA
                                </p>
                            </div>
                            <div className='border border-custom p-8'>
                                <p className='text-xl font-semibold text-center'>
                                    Token Supply:
                                    10,000,000 $DCP
                                </p>
                            </div>
                            <div className='border border-custom p-8'>
                                <p className='text-xl font-semibold text-center'>
                                    2.5% FOR DEVELOPMENT
                                </p>
                            </div>
                        </div>
                        <div className='lg:flex items-baseline justify-between gap-8 space-y-6 mt-8'>
                            <div className='border border-custom p-8'>
                                <p className='text-xl font-semibold text-center'>
                                    Smart Contract Platform:
                                    ARB
                                </p>
                            </div>
                            <div className='border border-custom p-8'>
                                <p className='text-xl font-semibold text-center'>
                                    TAX 5/5
                                </p>
                            </div>
                            <div className='border border-custom p-8'>
                                <p className='text-xl font-semibold text-center'>
                                    2.5 %FOR MARKETING
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            {/* roadmap */}

            <div
                id="roadmap"
                className="lg:py-12 py-5 lg:px-8 px-5 container mx-auto"
            >
                <h3 className="md:text-6xl text-2xl font-montserat font-bold text-center">
                    ROADMAP
                </h3>

                <div className="lg:mt-12 mt-6 rounded-2xl bg-blue-200 lg:p-12 p-6">

                    <div className="h-1 w-full bg-black-50">

                    </div>

                    <div className='h-1 w-full line -translate-y-1'>

                    </div>

                    <div className="lg:flex items-baseline justify-between gap-6 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#A584DF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#A584DF" />
                                </svg>

                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border border-white-50 rounded-2xl text-white-100 p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-2xl py-4 font-semibold">PHASE 1</h5>

                                <ul className="space-y-4 list-disc p-4">
                                    <li>Social Media set up: Twitter, Medium and Telegram</li>
                                    <li>Website development </li>
                                    <li>Community building</li>
                                    <li>Stealth Launch on Arbitrum</li>
                                    <li>Dapp V1</li>
                                    <li>White Paper V1 Release</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#A584DF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#A584DF" />
                                </svg>
                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-left"
                                className="border border-white-50 rounded-2xl text-white-100 p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-2xl py-4 font-semibold">PHASE 2</h5>

                                <ul className="space-y-4 list-disc p-5">
                                    <li>CMC Listing</li>
                                    <li>CG Listing</li>
                                    <li>Dapp V2</li>
                                    <li>Platform and contract audits</li>
                                    <li>Listing on tier 2 exchange</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#A584DF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#A584DF" />
                                </svg>
                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-left"
                                className="border border-white-50 rounded-2xl text-white-100 p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-2xl py-4 font-semibold">PHASE 3</h5>

                                <ul className="space-y-4 list-disc p-5">
                                    <li>Strategic Partnerships</li>
                                    <li>New Exchanges Listing CEX</li>
                                    <li>Further community growth</li>
                                    <li>Large Marketing Campaigns</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#A584DF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#A584DF" />
                                </svg>
                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border border-white-50 rounded-2xl text-white-100 p-5 lg:w-72 hover:bg-purple-100"
                            >
                                <h5 className="text-2xl py-4 font-semibold">PHASE 4</h5>

                                <ul className="space-y-4 list-disc p-5">
                                    <li>To be Announced</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}
