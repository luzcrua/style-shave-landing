
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  { name: "Corte Masculino", price: "R$40" },
  { name: "Barba", price: "R$30" },
  { name: "Corte + Barba", price: "R$60" },
  { name: "Progressiva Masculina", price: "R$80" },
  { name: "Manicure/Pedicure", price: "R$50" },
];

export function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if required fields are filled
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.service) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Format the WhatsApp message
    const message = `
Olá, gostaria de agendar um horário:
Nome: ${formData.name}
Telefone: ${formData.phone}
Data/Hora: ${formData.date} às ${formData.time}
Serviço: ${formData.service}
Observações: ${formData.notes || "Nenhuma"}
    `.trim();

    // Encode the message for a URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/5500000000000?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      notes: "",
    });
    
    toast.success("Redirecionando para o WhatsApp!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          name="name"
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Telefone</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="(00) 00000-0000"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">Data</Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="time">Horário</Label>
          <Input
            id="time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="service">Serviço</Label>
        <Select onValueChange={handleSelectChange} value={formData.service}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Selecione um serviço" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.name} value={service.name}>
                {service.name} - {service.price}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="notes">Observações (opcional)</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Alguma informação adicional?"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-barber-gold hover:bg-barber-gold/90 text-white"
      >
        Agendar via WhatsApp
      </Button>
    </form>
  );
}
