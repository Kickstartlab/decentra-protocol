import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import star from '../assets/star.png';
import about from '../assets/about.png';
import feature from '../assets/feature.png';
import upload from '../assets/upload.png';
import video from '../assets/video.mp4';
import work_1 from '../assets/work_1.png';
import server from '../assets/server.png';
import server_1 from '../assets/server_1.png';
import monitor from '../assets/monitor.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
        Aos.refresh();
    }, [])

    const [copySuccess, setCopySuccess] = useState('');

    // your function to copy here

    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    return (
        <div className="bg-black-100 font-montserat overflow-hidden text-white-100">

            <div className='bg-purple-100 py-3 text-center'>
                Try our beta version update Here!
            </div>

            {/* top section */}

            <video src={video} autoPlay height="500" muted loop className='absolute opacity-40 left-0 right-0 w-full md:mt-0 mt-44'></video>

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

                            <p data-aos='fade-out' className='pt-8 pb-6 lg:text-xl leading-loose'>
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

                            <p className='py-5 lg:leading-loose'>
                                Decentra Protocol is an arbitrum based project developing a  decentralized platform for file sharing and data provenance. The protocol's focus on user privacy, security, and data integrity makes it an ideal solution for a wide range of applications, and its flexible design enables it to be customized to meet the specific needs of different users.
                            </p>

                            <p className='lg:leading-loose'>
                                The Decentra Protocol leverages the power of blockchain technology to provide a tamper-proof and transparent record of data transactions. This means that all file transfers and access requests are recorded on a decentralized ledger, which is secured by a consensus mechanism and cannot be altered by any single entity.
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

                    <div className="lg:flex block justify-between items-center gap-x-16 py-16">


                        <div data-aos="zoom-in" data-aos-delay="350" className="">
                            <img src={feature} alt="Logo" className='w-10/12 sm:flex mx-auto' />
                        </div>

                        <div data-aos="fade-left" className="lg:w-1/2 w-full md:mt-0 mt-12">

                            <h2 className='md:text-5xl text-3xl font-bold text-white-100'>
                                Key feature
                            </h2>

                            <p className='py-6 lg:leading-loose opacity-80 lg:text-xl'>
                                One of the key features of the Decetra Protocol is its emphasis on user privacy and security. All files shared through the protocol are encrypted using end-to-end encryption, which means that only the sender and receiver have access to the unencrypted content. This ensures that files are protected from unauthorized access or interception, even if they are intercepted during transmission.
                            </p>

                            <a href="/">
                                <button className="text-white-100 bg-purple-100 py-4 text-lg md:px-8 px-3 rounded-md font-semibold mt-5">
                                    Launch Dapp
                                </button>
                            </a>

                        </div>

                    </div>
                </div>
            </div>

            {/* How it Works */}

            <div id='working' className="mt-8">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                    <h3 className="md:text-6xl text-2xl font-montserat font-semibold text-center">
                        How does it work?
                    </h3>

                    <img src={work_1} alt="Logo" className='flex mx-auto py-12' />

                    <p data-aos='fade-in' className='pt-6 lg:leading-loose text-center lg:text-xl lg:w-10/12 flex- mx-auto'>
                        How decentra Protocol works?  Decentra Users and holders can send files and upload files on  dApp. Files , will be totally encrypted and secure in dApp with the help of IPFS Blockchain network . Every user will get their hash for their files. On the other end, users can receive file on their address by connecting their wallets and can download files there. If user comes with wrong hash he won't be able to receive the file
                    </p>

                    <div className='lg:flex justify-center items-center gap-x-44 mx-auto space-y-8 py-12'>

                        <div className='flex flex-col items-center space-y-6'>

                            <div className=''>
                                <p className='text-xl text-white-100 text-center'>
                                    client /server
                                </p>
                                <img src={server} alt="Logo" className='' />
                            </div>

                            <div className='lg:flex items-center gap-x-6 lg:ml-56 space-y-3'>

                                <svg className='flex mx-auto' width="30" height="151" viewBox="0 0 30 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2929 149.707C14.6834 150.098 15.3166 150.098 15.7071 149.707L22.0711 143.343C22.4616 142.953 22.4616 142.319 22.0711 141.929C21.6805 141.538 21.0474 141.538 20.6568 141.929L15 147.586L9.34314 141.929C8.95262 141.538 8.31945 141.538 7.92893 141.929C7.5384 142.319 7.5384 142.953 7.92893 143.343L14.2929 149.707ZM14 -4.37114e-08L14 3.10417L16 3.10417L16 4.37114e-08L14 -4.37114e-08ZM14 9.3125L14 15.5208L16 15.5208L16 9.3125L14 9.3125ZM14 21.7292L14 27.9375L16 27.9375L16 21.7292L14 21.7292ZM14 34.1458L14 40.3542L16 40.3542L16 34.1458L14 34.1458ZM14 46.5625L14 52.7708L16 52.7708L16 46.5625L14 46.5625ZM14 58.9792L14 65.1875L16 65.1875L16 58.9792L14 58.9792ZM14 71.3958L14 77.6042L16 77.6042L16 71.3958L14 71.3958ZM14 83.8125L14 90.0208L16 90.0208L16 83.8125L14 83.8125ZM14 96.2292L14 102.438L16 102.438L16 96.2292L14 96.2292ZM14 108.646L14 114.854L16 114.854L16 108.646L14 108.646ZM14 121.063L14 127.271L16 127.271L16 121.063L14 121.063ZM14 133.479L14 139.688L16 139.688L16 133.479L14 133.479ZM14 145.896L14 149L16 149L16 145.896L14 145.896ZM13.5858 150.414C14.3668 151.195 15.6332 151.195 16.4142 150.414L29.1421 137.686C29.9232 136.905 29.9232 135.639 29.1421 134.858C28.3611 134.077 27.0948 134.077 26.3137 134.858L15 146.172L3.68629 134.858C2.90524 134.077 1.63891 134.077 0.857858 134.858C0.0768097 135.639 0.0768096 136.905 0.857858 137.686L13.5858 150.414ZM13 -8.74228e-08L13 3.10417L17 3.10417L17 8.74228e-08L13 -8.74228e-08ZM13 9.3125L13 15.5208L17 15.5208L17 9.3125L13 9.3125ZM13 21.7292L13 27.9375L17 27.9375L17 21.7292L13 21.7292ZM13 34.1458L13 40.3542L17 40.3542L17 34.1458L13 34.1458ZM13 46.5625L13 52.7708L17 52.7708L17 46.5625L13 46.5625ZM13 58.9792L13 65.1875L17 65.1875L17 58.9792L13 58.9792ZM13 71.3958L13 77.6042L17 77.6042L17 71.3958L13 71.3958ZM13 83.8125L13 90.0208L17 90.0208L17 83.8125L13 83.8125ZM13 96.2292L13 102.438L17 102.438L17 96.2292L13 96.2292ZM13 108.646L13 114.854L17 114.854L17 108.646L13 108.646ZM13 121.063L13 127.271L17 127.271L17 121.063L13 121.063ZM13 133.479L13 139.688L17 139.688L17 133.479L13 133.479ZM13 145.896L13 149L17 149L17 145.896L13 145.896Z" fill="white" />
                                </svg>

                                <p className='lg:text-left text-center'>
                                    Files is downloaded and<br></br>
                                    shared from a single location<br></br>
                                    on a server
                                </p>

                            </div>

                            <div className=''>
                                <img src={monitor} alt="Logo" className='' />

                                <p className='text-xl text-white-100 text-center pt-2 -ml-2'>
                                    centralised
                                </p>
                            </div>

                        </div>

                        <div className='flex flex-col lg:items-start items-center justify-center space-y-6'>

                            <div className='lg:flex items-center lg:space-y-0 space-y-4'>

                                <div className='lg:-mt-7'>
                                    <p className='text-xl text-white-100 text-center'>
                                        IPFS
                                    </p>
                                    <img src={server_1} alt="Logo" className='' />
                                </div>

                                <svg className='lg:rotate-0 rotate-90 flex mx-auto' width="56" height="3" viewBox="0 0 56 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="1.5" x2="56" y2="1.5" stroke="white" stroke-width="3" />
                                </svg>

                                <img src={server_1} alt="Logo" className='' />

                                <svg className='lg:rotate-0 rotate-90 flex mx-auto' width="56" height="3" viewBox="0 0 56 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="1.5" x2="56" y2="1.5" stroke="white" stroke-width="3" />
                                </svg>

                                <img src={server_1} alt="Logo" className='' />
                            </div>

                            <div className='lg:flex hidden items-center'>

                                <img src={server_1} alt="Logo" className='' />

                                <svg width="56" height="3" viewBox="0 0 56 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="1.5" x2="56" y2="1.5" stroke="white" stroke-width="3" />
                                </svg>

                                <img src={server_1} alt="Logo" className='' />

                                <svg width="56" height="3" viewBox="0 0 56 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="1.5" x2="56" y2="1.5" stroke="white" stroke-width="3" />
                                </svg>

                                <img src={server_1} alt="Logo" className='' />
                            </div>

                            <div className='lg:flex space-y-3 items-center gap-x-6 lg:ml-12'>

                                <svg className='flex mx-auto' width="30" height="151" viewBox="0 0 30 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2929 149.707C14.6834 150.098 15.3166 150.098 15.7071 149.707L22.0711 143.343C22.4616 142.953 22.4616 142.319 22.0711 141.929C21.6805 141.538 21.0474 141.538 20.6568 141.929L15 147.586L9.34314 141.929C8.95262 141.538 8.31945 141.538 7.92893 141.929C7.5384 142.319 7.5384 142.953 7.92893 143.343L14.2929 149.707ZM14 -4.37114e-08L14 3.10417L16 3.10417L16 4.37114e-08L14 -4.37114e-08ZM14 9.3125L14 15.5208L16 15.5208L16 9.3125L14 9.3125ZM14 21.7292L14 27.9375L16 27.9375L16 21.7292L14 21.7292ZM14 34.1458L14 40.3542L16 40.3542L16 34.1458L14 34.1458ZM14 46.5625L14 52.7708L16 52.7708L16 46.5625L14 46.5625ZM14 58.9792L14 65.1875L16 65.1875L16 58.9792L14 58.9792ZM14 71.3958L14 77.6042L16 77.6042L16 71.3958L14 71.3958ZM14 83.8125L14 90.0208L16 90.0208L16 83.8125L14 83.8125ZM14 96.2292L14 102.438L16 102.438L16 96.2292L14 96.2292ZM14 108.646L14 114.854L16 114.854L16 108.646L14 108.646ZM14 121.063L14 127.271L16 127.271L16 121.063L14 121.063ZM14 133.479L14 139.688L16 139.688L16 133.479L14 133.479ZM14 145.896L14 149L16 149L16 145.896L14 145.896ZM13.5858 150.414C14.3668 151.195 15.6332 151.195 16.4142 150.414L29.1421 137.686C29.9232 136.905 29.9232 135.639 29.1421 134.858C28.3611 134.077 27.0948 134.077 26.3137 134.858L15 146.172L3.68629 134.858C2.90524 134.077 1.63891 134.077 0.857858 134.858C0.0768097 135.639 0.0768096 136.905 0.857858 137.686L13.5858 150.414ZM13 -8.74228e-08L13 3.10417L17 3.10417L17 8.74228e-08L13 -8.74228e-08ZM13 9.3125L13 15.5208L17 15.5208L17 9.3125L13 9.3125ZM13 21.7292L13 27.9375L17 27.9375L17 21.7292L13 21.7292ZM13 34.1458L13 40.3542L17 40.3542L17 34.1458L13 34.1458ZM13 46.5625L13 52.7708L17 52.7708L17 46.5625L13 46.5625ZM13 58.9792L13 65.1875L17 65.1875L17 58.9792L13 58.9792ZM13 71.3958L13 77.6042L17 77.6042L17 71.3958L13 71.3958ZM13 83.8125L13 90.0208L17 90.0208L17 83.8125L13 83.8125ZM13 96.2292L13 102.438L17 102.438L17 96.2292L13 96.2292ZM13 108.646L13 114.854L17 114.854L17 108.646L13 108.646ZM13 121.063L13 127.271L17 127.271L17 121.063L13 121.063ZM13 133.479L13 139.688L17 139.688L17 133.479L13 133.479ZM13 145.896L13 149L17 149L17 145.896L13 145.896Z" fill="white" />
                                </svg>

                                <p className='lg:text-left text-center'>
                                    Files is downloaded and<br></br>
                                    shared by hash ID that can come<br></br>
                                    from multiple locations
                                </p>

                            </div>

                            <div className='ml-5'>
                                <img src={monitor} alt="Logo" className='' />

                                <p className='text-xl text-white-100 text-center pt-2'>
                                    decentralised
                                </p>
                            </div>

                        </div>

                    </div>

                    <img src={upload} alt="Logo" className='flex mx-auto py-12' />

                    <div className='lg:flex justify-center gap-x-20 mx-auto space-y-6'>

                        <div className="lg:w-1/2 w-full">
                            <h3 data-aos='fade-up' className="md:text-6xl text-2xl font-montserat font-bold text-blur">
                                Flexible &
                                Customisable
                            </h3>
                            <h3 className="md:text-6xl text-2xl font-montserat font-bold">
                                Important Aspect
                            </h3>
                            <p data-aos='fade-in' className='pt-6 lg:leading-loose'>
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
                            <p data-aos='fade-in' className='pt-6 lg:leading-loose'>
                                Another important aspect of the Decetra Protocol is its focus on data provenance. The protocol enables users to track the history of their files, including all access requests, modifications, and transfers. This provides a transparent and auditable record of data transactions, which can be used to verify the authenticity and integrity of files.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/* CONTRACT & TOKEN SUPPLY */}

            <div
                id="contract"
                className="lg:py-12 py-5 lg:px-8 px-5 container mx-auto"
            >
                <h3 className="md:text-5xl text-2xl font-montserat font-semibold text-center">
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
                                    Smart Contract Platform:
                                    ARB
                                </p>
                            </div>

                        </div>

                        <div className='lg:flex items-baseline justify-between gap-8 space-y-6 mt-8'>

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
                            <div className='border border-custom p-8'>
                                <p className='text-xl font-semibold text-center'>
                                    2.5% FOR DEVELOPMENT
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
                <h3 className="md:text-6xl text-2xl font-montserat font-semibold text-center">
                    Road map
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
