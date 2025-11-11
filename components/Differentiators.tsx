
import React from 'react';

const icons = {
    focus: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    shield: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 23l9-2.083A12.02 12.02 0 0021 8.984z" /></svg>,
    chart: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    location: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    heart: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    lightbulb: <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
};

const differentiatorsData = [
    { title: "Foco total em tráfego pago", description: "Mantemos o nosso foco em fazer tráfego pago para que você tenha o melhor retorno.", icon: icons.focus, color: "blue" },
    { title: "Especialistas em contingência e nichos sensíveis", description: "Fazemos anúncios chegarem onde outros não conseguem.", icon: icons.shield, color: "green" },
    { title: "Gestão transparente", description: "Acesso a dashboards em tempo real com os resultados das campanhas.", icon: icons.chart, color: "purple" },
    { title: "Negócios locais", description: "Experiência comprovada em melhorar os resultados de negócios locais.", icon: icons.location, color: "orange" },
    { title: "Relacionamento próximo", description: "Atendimento direto, reuniões, feedbacks e suporte ágil.", icon: icons.heart, color: "red" },
    { title: "Metodologia própria", description: "Através da nossa metodologia, você terá uma visão clara do seu projeto.", icon: icons.lightbulb, color: "blue" },
];

const colorClasses = {
    blue: { bg: 'bg-brand-light-blue', text: 'text-brand-blue' },
    green: { bg: 'bg-brand-light-green', text: 'text-brand-green' },
    purple: { bg: 'bg-brand-light-purple', text: 'text-brand-purple' },
    orange: { bg: 'bg-brand-light-orange', text: 'text-brand-orange' },
    red: { bg: 'bg-brand-light-red', text: 'text-brand-red' },
};

const DifferentiatorCard: React.FC<{ title: string; description: string; icon: React.ReactNode; color: keyof typeof colorClasses }> = ({ title, description, icon, color }) => {
    const colors = colorClasses[color];
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${colors.bg} ${colors.text}`}>
                {icon}
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
};

const Differentiators: React.FC = () => {
    return (
        <section id="diferenciais" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Nossos diferenciais</h2>
                    <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto"></div>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">O que nos torna únicos no mercado de tráfego pago</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentiatorsData.map((item, index) => (
                        <DifferentiatorCard key={index} {...item} color={item.color as keyof typeof colorClasses} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
