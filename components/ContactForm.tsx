
import React, { useState } from 'react';

const PaperAirplaneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);


const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        objective: '',
        hasTeam: '',
        instagram: '',
        site: '',
        billing: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, hasTeam: e.target.value }));
    };

    return (
        <section id="contato" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Transforme seu Investimento em Resultados Reais</h2>
                    <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600">Preencha o formulário abaixo e receba uma análise personalizada para o seu negócio. Quanto mais informações você fornecer, melhor poderemos te ajudar.</p>
                </div>
                
                <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-2xl">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome*</label>
                            <input type="text" name="name" id="name" placeholder="Digite seu nome" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Sua empresa*</label>
                            <input type="text" name="company" id="company" placeholder="Digite o nome da sua empresa" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp*</label>
                            <input type="tel" name="phone" id="phone" placeholder="(99) 99999-9999" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" />
                        </div>
                         <div>
                            <label htmlFor="objective" className="block text-sm font-medium text-gray-700 mb-1">Qual seu objetivo com tráfego pago?*</label>
                            <select id="objective" name="objective" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue bg-white">
                                <option>Selecione uma opção</option>
                                <option>Aumentar vendas</option>
                                <option>Gerar leads</option>
                                <option>Aumentar visibilidade</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Você tem equipe?*</label>
                            <div className="flex items-center space-x-6">
                                <label className="flex items-center">
                                    <input type="radio" name="hasTeam" value="sim" className="h-4 w-4 text-brand-blue border-gray-300 focus:ring-brand-blue" />
                                    <span className="ml-2 text-gray-700">Sim</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="hasTeam" value="nao" className="h-4 w-4 text-brand-blue border-gray-300 focus:ring-brand-blue" />
                                    <span className="ml-2 text-gray-700">Não</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">Qual o instagram a ser anunciado?*</label>
                            <input type="text" name="instagram" id="instagram" placeholder="@seuinstagram" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" />
                        </div>
                        <div>
                            <label htmlFor="site" className="block text-sm font-medium text-gray-700 mb-1">Possui site?</label>
                            <input type="text" name="site" id="site" placeholder="www.seusite.com.br (opcional)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" />
                        </div>
                        <div>
                            <label htmlFor="billing" className="block text-sm font-medium text-gray-700 mb-1">Qual seu faturamento médio mensal?*</label>
                            <select id="billing" name="billing" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue bg-white">
                                <option>Selecione uma faixa</option>
                                <option>Até R$10.000</option>
                                <option>R$10.001 - R$50.000</option>
                                <option>R$50.001 - R$100.000</option>
                                <option>Acima de R$100.000</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full flex items-center justify-center px-6 py-4 text-base font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors">
                            Enviar e receber análise
                            <PaperAirplaneIcon />
                        </button>
                        <p className="text-center text-xs text-gray-500">Seus dados estão seguros e serão usados apenas para contato comercial.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
