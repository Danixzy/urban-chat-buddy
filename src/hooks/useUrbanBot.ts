
import { useState, useCallback } from 'react';

export interface ChatMessage {
  id: string;
  message: string;
  isBot: boolean;
  timestamp: string;
}

const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Saudações
  if (message.includes('oi') || message.includes('olá') || message.includes('bom dia') || 
      message.includes('boa tarde') || message.includes('boa noite')) {
    return "Olá! Sou o UrbanBot, assistente virtual da prefeitura. Como posso ajudá-lo hoje? 😊";
  }
  
  // Serviços específicos
  if (message.includes('alvará') || message.includes('licença')) {
    return "Entendi que você precisa de informações sobre alvarás e licenças. Vou encaminhar sua solicitação para o setor responsável. Em breve você receberá um retorno! 📋";
  }
  
  if (message.includes('iptu') || message.includes('imposto')) {
    return "Sobre questões de IPTU e impostos, vou encaminhar sua solicitação para o setor de tributação. Eles entrarão em contato com você em breve! 💰";
  }
  
  if (message.includes('água') || message.includes('esgoto') || message.includes('saneamento')) {
    return "Para questões de água, esgoto e saneamento, vou encaminhar sua solicitação para o departamento de saneamento básico. Aguarde o retorno! 💧";
  }
  
  if (message.includes('lixo') || message.includes('coleta') || message.includes('limpeza')) {
    return "Sobre coleta de lixo e limpeza urbana, vou encaminhar sua solicitação para o setor de limpeza pública. Em breve você terá uma resposta! 🗑️";
  }
  
  if (message.includes('saúde') || message.includes('posto') || message.includes('hospital')) {
    return "Para questões de saúde pública, vou encaminhar sua solicitação para a Secretaria de Saúde. Eles irão te atender adequadamente! 🏥";
  }
  
  if (message.includes('educação') || message.includes('escola') || message.includes('creche')) {
    return "Sobre educação e escolas municipais, vou encaminhar sua solicitação para a Secretaria de Educação. Aguarde o contato deles! 🏫";
  }
  
  if (message.includes('obra') || message.includes('rua') || message.includes('asfalto') || message.includes('buraco')) {
    return "Para questões de obras públicas e manutenção de ruas, vou encaminhar sua solicitação para o departamento de obras. Eles verificarão a situação! 🚧";
  }
  
  // Agradecimentos
  if (message.includes('obrigad') || message.includes('valeu')) {
    return "Por nada! Fico feliz em poder ajudar. Se precisar de mais alguma coisa, estarei aqui! 😊";
  }
  
  // Despedidas
  if (message.includes('tchau') || message.includes('até') || message.includes('bye')) {
    return "Até logo! Tenha um ótimo dia e conte sempre conosco! 👋";
  }
  
  // Resposta padrão
  return "Entendi sua solicitação! Vou encaminhar para o setor responsável e você receberá um retorno em breve. Se tiver outras dúvidas, fique à vontade para perguntar! 😊";
};

export const useUrbanBot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      message: "Olá! Bem-vindo ao atendimento da prefeitura! 🏛️\n\nSou o UrbanBot, seu assistente virtual. Como posso ajudá-lo hoje?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback((userMessage: string) => {
    const timestamp = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    // Adiciona mensagem do usuário
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      message: userMessage,
      isBot: false,
      timestamp
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    
    // Simula tempo de resposta do bot
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: botResponse,
        isBot: true,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // 1-3 segundos de delay
  }, []);

  return {
    messages,
    isTyping,
    sendMessage
  };
};
