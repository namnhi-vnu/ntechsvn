import Image from "next/image";
import Link from "next/link";
import { FaDollarSign, FaLocationDot } from "react-icons/fa6";

const page = () => {
    return (
        <>
            <title>Tuyển Dụng - NTechs</title>

            <div className="recruitment">
                <div className="bg-[url('/banner-tuyen-dung.png')] max-md:bg-[url('/banner-td-mbs.png')] max-md:h-auto h-[350px] bg-no-repeat bg-cover max-md:bg-contain object-fill mt-4">
                    <Image
                        src="/banner-td-mb.png"
                        width={768}
                        height={350}
                        alt=""
                        className="w-full h-auto hidden max-md:block"
                    />
                </div>
                <div className="container mx-auto max-md:px-2">
                    <div>
                        <div className="py-8">
                            <h2 className="text-3xl font-semibold max-md:text-2xl">
                                Cơ hội cho bạn
                            </h2>
                            <div className="py-8">
                                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                                    <div className="flex gap-4 max-md:flex-col border-[1px] border-[#ccc] p-2 rounded-lg hover:shadow-md hover:cursor-pointer ">
                                        <div>
                                            <Link href="#">
                                                <Image
                                                    src="/postc.png"
                                                    width={200}
                                                    height={200}
                                                    className="w-full rounded-lg"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl">
                                                <Link
                                                    href="#"
                                                    className="hover:text-ntechs"
                                                >
                                                    Junior/Middle .NET Developer
                                                </Link>
                                            </h2>
                                            <p className="flex items-center gap-4 py-4 text-md">
                                                <FaDollarSign />
                                                Mức lương theo mong muốn của ứng
                                                viên và năng lực
                                            </p>
                                            <p className="flex items-center gap-4 text-md">
                                                <FaLocationDot /> Hà Nội
                                            </p>
                                            <div className="pt-8">
                                                {/* <a href="mailto:"></a> */}
                                                <Link
                                                    href="mailto:info.ntechs@gmail.com"
                                                    className="inline-block bg-hover text-white py-2 px-4 rounded-lg"
                                                >
                                                    Ứng Tuyển
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 max-md:flex-col border-[1px] border-[#ccc] p-2 rounded-lg hover:shadow-md hover:cursor-pointer">
                                        <div>
                                            <Link href="#">
                                                <Image
                                                    src="/postreact.png"
                                                    width={200}
                                                    height={200}
                                                    className="w-full rounded-lg"
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl">
                                                <Link
                                                    href="#"
                                                    className="hover:text-ntechs"
                                                >
                                                    ReactJs Developer
                                                </Link>
                                            </h2>
                                            <p className="flex items-center gap-4 py-4 text-md">
                                                <FaDollarSign /> Mức lương theo
                                                mong muốn của ứng viên và năng
                                                lực
                                            </p>
                                            <p className="flex items-center gap-4 text-md">
                                                <FaLocationDot /> Hà Nội
                                            </p>
                                            <div className="pt-8">
                                                <Link
                                                    href="mailto:info.ntechs@gmail.com"
                                                    className="inline-block bg-hover text-white py-2 px-4 rounded-lg"
                                                >
                                                    Ứng Tuyển
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
