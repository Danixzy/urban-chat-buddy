
import UrbanBotChat from '../components/UrbanBotChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-4">
      <div className="text-center w-full">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">UrbanBot</h1>
          <p className="text-lg text-gray-600">Assistente Virtual da Prefeitura</p>
          <p className="text-sm text-gray-500 mt-2">Simulação de chat WhatsApp para atendimento público</p>
        </div>
        
        <UrbanBotChat />
        
        <div className="mt-6 text-xs text-gray-500 max-w-md mx-auto">
          <p>💡 Dica: Experimente perguntar sobre serviços como IPTU, alvará, limpeza urbana, saúde, educação ou obras públicas!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
