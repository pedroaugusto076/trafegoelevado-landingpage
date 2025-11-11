
import React from 'react';

const icons = {
    dollar: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
        </svg>
    ),
    users: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    clock: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    book: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    )
};

const statCards = [
    { value: "R$ 15M+", label: "Gerenciados em anúncios online", icon: icons.dollar, color: 'blue' },
    { value: "50+", label: "Clientes ativos em diferentes segmentos", icon: icons.users, color: 'green' },
    { value: "10K+", label: "Horas usando os gerenciadores de anúncios", icon: icons.clock, color: 'purple' },
    { value: "R$ 100K+", label: "Investidos em treinamentos e mentorias", icon: icons.book, color: 'orange' },
];

const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
};

const Experience: React.FC = () => {
    return (
        <section id="experiencia" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Autoridade e experiência</h2>
                    <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4 text-gray-600 text-lg">
                        <p>Nosso fundador, <span className="font-bold">Cássio Prado</span> é membro do Mastermind do Pedro Sobral, o maior nome de anúncios online da América Latina, já esteve no TOP 10 por duas vezes entre mais de 1000 gestores no campeonato de tráfego pago e hoje é Professor e Consultor do time Sobral.</p>
                    </div>
                    <div className="relative p-2 bg-white rounded-2xl shadow-xl">
                        <img src="https://picsum.photos/seed/conference/500/350" alt="Conference" className="rounded-xl" />
                        <button className="absolute bottom-4 left-4 bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-dark-blue transition-colors">
                            Com Pedro Sobral
                        </button>
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Alguns números que comprovam nossa experiência:</h3>
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {statCards.map((card, index) => {
                                const colors = colorClasses[card.color as keyof typeof colorClasses];
                                return (
                                    <div key={index} className={`${colors.bg} p-6 rounded-xl flex items-center space-x-4`}>
                                        <div className={`${colors.text}`}>
                                            {card.icon}
                                        </div>
                                        <div>
                                            <p className={`text-2xl font-bold ${colors.text}`}>{card.value}</p>
                                            <p className={`text-sm ${colors.text}`}>{card.label}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
