import CoverBanner from "../../../Components/CoverBanner/CoverBanner";

const ImportedBrands = () => {
    return (
        <div>
            <CoverBanner
                img={"https://i.ibb.co/jgGWgz9/Home-Banner-Medicine.jpg"}
                title={"Our Partner"}
                from={"Home"}
                to={"Partner"}
            />

            <div className='mx-3 lg:w-[75%] lg:mx-auto mt-20 mb-10'>
                <div>
                    <div className="overflow-x-auto">
                        <table className="hidden md:table">
                            {/* head */}
                            <thead>
                                <tr className="text-center">
                                    <th>Brand</th>
                                    <th>Company</th>
                                    <th>Country</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="text-center">
                                    <td>
                                        <div className="flex justify-center items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-36 h-12">
                                                    <img src="https://i.ibb.co/Jyk902N/bionike-logo.png" alt="Loading..." />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        ICIM International S.r.l
                                        <br />
                                        <span className=''>An Italian pharmaceutical company founded in Milan in the 1930s</span>
                                    </td>
                                    <td>Italy</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center md:hidden">
                        <div className="flex justify-center items-center gap-3">
                            <div className="avatar">
                                <div className="w-36 h-12 mb-3">
                                    <img src="https://i.ibb.co/Jyk902N/bionike-logo.png" alt="Loading..." />
                                </div>
                            </div>
                        </div>
                        <p>
                            ICIM International S.r.l
                            <br />
                            <span >An Italian pharmaceutical company founded in Milan in the 1930s</span>
                        </p>
                        <p>Italy</p>
                    </div>
                    <div className="my-10">
                        <div className="text-center">
                            <p className='text-xl font-sans font-extralight'>
                                KNOW MORE ABOUT
                            </p>
                            <p className='text-2xl text-[#0B5F82] font-serif font-extrabold'>
                                BIONIKE
                            </p>
                            <div className="flex justify-center items-center">
                                <hr className='mt-3 w-36 border-2 border-[#FB923C] rounded' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-justify">
                            BioNike is the brand of <b>ICIM International</b>, an Italian pharmaceutical company founded in Milan in the 1930s, today the <b>No. 1 in Italy of dermocosmetics in pharmacies and parapharmacies..</b> <br /> <br />

                            Since 2017 BioNike has been part of Sodalis Group, an Italian group leader in the Health, Beauty & Personal Care market. <br /> <br />

                            <b>BioNike is a word that originates from two Greek words -
                                <i>Bios = life e Nike = victory.</i></b> <br /> <br />

                            FROM AN INTUITION TO THE GLOBAL MARKET <br /> <br />

                            Our brand was created thanks to the the intuition of a forward-looking entrepreneur and pharmacist who, in the 1960s, realised that cosmetics could be useful not only to complement, but also to support treatments prescribed by dermatologists. <br /> <br />

                            In those years, not many dermatologists were keen on being involved with cosmetics, yet contact allergies, especially triggered by heavy metals in cosmetic formulations, were spreading already in the population.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportedBrands;