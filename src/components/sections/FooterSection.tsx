
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";

export function FooterSection() {
  return (
    <>
      <footer className="bg-barber-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 playfair">StyleShave</h3>
              <p className="text-gray-300 mb-4">
                Proporcionando estilo e cuidado para homens que valorizam qualidade.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-barber-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-barber-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-barber-gold transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 playfair">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-barber-gold transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-barber-gold transition-colors">Sobre</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-barber-gold transition-colors">Serviços</a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-300 hover:text-barber-gold transition-colors">Galeria</a>
                </li>
                <li>
                  <a href="#booking" className="text-gray-300 hover:text-barber-gold transition-colors">Agendamento</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 playfair">Contato</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2 text-barber-gold" />
                  Rua Exemplo, 123 - Centro, São Paulo
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-barber-gold"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  (11) 9999-9999
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-barber-gold"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path>
                  </svg>
                  contato@styleshave.com
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} StyleShave Barbearia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      
      {/* Credits Footer */}
      <div className="bg-barber-dark text-gray-400 py-3 text-center text-xs">
        <div className="container mx-auto">
          IDEALIZADO POR <a 
            href="https://instagram.com/arinelsonsantos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-barber-gold hover:underline transition-all"
          >
            ARINELSON SANTOS
          </a>
        </div>
      </div>
    </>
  );
}
