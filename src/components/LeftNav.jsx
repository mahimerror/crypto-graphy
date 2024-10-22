import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [isOpenSymmetric, setIsOpenSymmetric] = useState(false);
    const [isOpenAsymmetric, setIsOpenAsymmetric] = useState(false);
    const [isOpenHash, setIsOpenHash] = useState(false);
    const [isOpenKey, setIsOpenKey] = useState(false);
    const [isOpenSign, setIsOpenSign] = useState(false);
    const [isOpenHybrid, setIsOpenHybrid] = useState(false);
    const [isOpenPost, setIsOpenPost] = useState(false);

    return (
        <div>
            <div className="overflow-auto h-[90vh] min-w-80 max-w-80">
                <ul>
                    <li className="font-bold p-6">
                        <button className="flex items-center justify-between gap-5" onClick={() => setIsOpenSymmetric(!isOpenSymmetric)}>
                            <p className="text-primary"><button className="text-left">Symmetric-Key Algorithm</button></p>
                            {
                                isOpenSymmetric ?
                                    <IoIosArrowDown />
                                    : <IoIosArrowForward />
                            }
                        </button>
                        {
                            isOpenSymmetric &&
                            <div className="">
                                <ul className="p-4 pb-0 space-y-2">
                                    <li className="" onClick="">
                                        <Link to={"/tc"}><button className="text-left">TC-Crypto Chiper</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/des"}><button className="text-left">Data Encryption Standard (DES)</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/des3"}><button className="text-left">Triple DES (3DES)</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/aes"}><button className="text-left">Advanced Encryption Standard (AES)</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/blow-fish"}><button className="text-left">Blowfish</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/tow-fish"}><button className="text-left">Twofish</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/rc4"}><button className="text-left">Rivest Cipher 4 (RC4)</button></Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                    <li className="font-bold p-6">
                        <button className="flex items-center justify-between gap-5" onClick={() => setIsOpenAsymmetric(!isOpenAsymmetric)}>
                            <p className="text-primary"><button className="text-left">Asymmetric-Key Algorithm</button></p>
                            {
                                isOpenAsymmetric ?
                                    <IoIosArrowDown />
                                    : <IoIosArrowForward />
                            }
                        </button>
                        {
                            isOpenAsymmetric &&
                            <div className="">

                                <ul className="p-6 space-y-2">
                                    <li className="" onClick="">
                                        <Link to={"/rsa"}><button className="text-left">RSA (Rivest-Shamir-Adleman)</button></Link><hr className="my-2" />
                                    </li>

                                    
                                    <li className="" onClick="">
                                        <Link to={"/dsa"}><button className="text-left">Digital Signature Algorithm (DSA)</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/ecc"}><button className="text-left">Elliptic Curve Cryptography (ECC)</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/dh"}><button className="text-left">Diffie-Hellman (DH)</button></Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                    <li className="font-bold p-6">
                        <button className="flex items-center justify-between gap-5" onClick={() => setIsOpenHash(!isOpenHash)}>
                            <p className="text-primary"><button className="text-left">Cryptographic Hash</button></p>
                            {
                                isOpenHash ?
                                    <IoIosArrowDown />
                                    : <IoIosArrowForward />
                            }
                        </button>
                        {
                            isOpenHash &&
                            <div className="">
                                <ul className="p-6 space-y-2">
                                    <li className="" onClick="">
                                        <Link to={"/md5"}><button className="text-left">MD5 (Message Digest 5)</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/sh1"}><button className="text-left">SHA-1 (Secure Hash Algorithm 1)</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/sh2"}><button className="text-left">SHA-2 (Secure Hash Algorithm 2)</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/sh3"}><button className="text-left">SHA-3 (Secure Hash Algorithm 3)</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/ripe"}><button className="text-left">RIPEMD</button></Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                    <li className="font-bold p-6">
                        <button className="flex items-center justify-between gap-5" onClick={() => setIsOpenKey(!isOpenKey)}>
                            <p className="text-primary">Key Exchange Algorithm</p>
                            {
                                isOpenKey ?
                                    <IoIosArrowDown />
                                    : <IoIosArrowForward />
                            }
                        </button>
                        {
                            isOpenKey &&
                            <div className="">
                                <ul className="p-6 space-y-2">
                                    <li className="" onClick="">
                                        <Link to={"/dh"}><button className="text-left">Diffie-Hellman (DH)</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/des"}><button className="text-left">Elliptic Curve Diffie-Hellman (ECDH)</button></Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                    <li className="font-bold p-6">
                        <button className="flex items-center justify-between gap-5" onClick={() => setIsOpenSign(!isOpenSign)}>
                            <p className="text-primary"><button className="text-left">Digital Signature Algorithm</button></p>
                            {
                                isOpenSign ?
                                    <IoIosArrowDown />
                                    : <IoIosArrowForward />
                            }
                        </button>
                        {
                            isOpenSign &&
                            <div className="">
                                <ul className="p-6 space-y-2">

                                    <li className="" onClick="">
                                        <Link to={"/des"}><button className="text-left">ECDSA (Elliptic Curve Digital Signature Algorithm)</button></Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                    <li className="font-bold p-6">
                        <button className="flex items-center justify-between gap-5" onClick={() => setIsOpenHybrid(!isOpenHybrid)}>
                            <p className="text-primary"><button className="text-left">Hybrid Cryptosystem</button></p>
                            {
                                isOpenHybrid ?
                                    <IoIosArrowDown />
                                    : <IoIosArrowForward />
                            }
                        </button>
                        {
                            isOpenHybrid &&
                            <div className="">
                                <ul className="p-6 space-y-2">
                                    <li className="" onClick="">
                                        <Link to={"/des"}><button className="text-left">Pretty Good Privacy (PGP)</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/des"}><button className="text-left">SSL/TLS (Secure Sockets Layer / Transport Layer Security)</button></Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                    <li className="font-bold p-6">
                        <button className="flex items-center justify-between gap-5" onClick={() => setIsOpenPost(!isOpenPost)}>
                            <p className="text-primary"><button className="text-left">Post-Quantum Crypto(PQC)</button></p>
                            {
                                isOpenPost ?
                                    <IoIosArrowDown />
                                    : <IoIosArrowForward />
                            }
                        </button>
                        {
                            isOpenPost &&
                            <div className="">
                                <ul className="p-6 space-y-2">
                                    <li className="" onClick="">
                                        <Link to={"/des"}><button className="text-left">Lattice-based Cryptography</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/des"}><button className="text-left">Multivariate Cryptography</button></Link><hr className="my-2" />
                                    </li>

                                    <li className="" onClick="">
                                        <Link to={"/des"}><button className="text-left">Code-based Cryptography</button></Link>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LeftNav;