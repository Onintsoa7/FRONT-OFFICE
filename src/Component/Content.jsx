import React from 'react'
import { SiAudi,SiPorsche, SiToyota, SiMercedes, SiBmw   } from "react-icons/si";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
function Content() {
    const social_media = [
        <SiMercedes />,
        <SiAudi />,
        <SiToyota />,
        <SiMercedes />,
        <SiAudi />
    ];
    return (
        <section
            id="home"
            className="min-h-screen flex py-10 md:flex-row flex-col items-center"
        >
            <div className="flex-1 flex items-center justify-center h-full">
                <img src={'./logo.png'} alt="" className="md:w-11/12 h-full object-cover" />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-black font-extrabold">
                        <span className="text-gray-500 md:text-6xl text-5xl">
                            Bienvenue 
                            <br />
                        </span>
                        dans <span>REPR' IZY</span>
                    </h1>
                    <RiDoubleQuotesL className='text-black' />
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-black">
                    Trouvez la voiture de vos rêves chez nous,
                    </h4>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-black">
                    où la qualité et l'élégance se rencontrent.
                    </h4> 
                    <br />
                    <RiDoubleQuotesR className='text-black'/>
                    <button className="btn-primary mt-8 bg-pink-400">Contactez-nous</button>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-black">
                    Avec nos fidèles partenaires:
                    </h4> 
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                        {social_media?.map((icon) => (
                            <div
                                key={icon}
                                className="hover:text-white cursor-pointer "
                            >
                                <ion-icon name={icon}></ion-icon>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content