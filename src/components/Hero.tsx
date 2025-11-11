
import React from 'react';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


const Hero: React.FC = () => {
    const stats = [
        { value: "R$ 15M+", label: "Resultados em anúncios" },
        { value: "50+", label: "Clientes ativos" },
        { value: "3+", label: "Anos de experiência" }
    ];

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Agência de tráfego pago <span className="text-brand-blue">em Palmas/TO</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                            Descubra como a nossa expertise em tráfego pago pode aumentar suas vendas e transformar seu negócio em uma referência.
                        </p>
                        <div className="mt-8">
                            <a href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors">
                                Entre em contato
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                        <div className="mt-12 flex justify-center lg:justify-start space-x-8 sm:space-x-12">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <p className="text-3xl font-bold text-brand-blue">{stat.value}</p>
                                    <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
                            <div className="relative p-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <img src="https://picsum.photos/seed/agencymanager/400/500" alt="Agency Manager" className="rounded-xl w-full max-w-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
