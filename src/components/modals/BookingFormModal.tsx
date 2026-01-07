import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface BookingFormModalProps {
  showForm: boolean;
  formType: 'module01' | 'module02';
  formData: {
    name: string;
    phone: string;
    role: string;
  };
  agreedToTerms: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onFormDataChange: (data: { name: string; phone: string; role: string }) => void;
  onAgreedToTermsChange: (agreed: boolean) => void;
  onShowOferta: () => void;
  onShowPrivacy: () => void;
}

const BookingFormModal = ({
  showForm,
  formType,
  formData,
  agreedToTerms,
  onClose,
  onSubmit,
  onFormDataChange,
  onAgreedToTermsChange,
  onShowOferta,
  onShowPrivacy,
}: BookingFormModalProps) => {
  if (!showForm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in overflow-y-auto" onClick={onClose}>
      <Card className="w-full max-w-md my-8 neon-border bg-card/95 backdrop-blur-xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <CardContent className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold">
              {formType === 'module01' ? 'HUMAN + AI' : 'VIBE MARKETING'}
            </h3>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
          <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <Input 
                placeholder="ФИО *" 
                required
                value={formData.name}
                onChange={(e) => onFormDataChange({...formData, name: e.target.value})}
                className="bg-muted/50 border-primary/30"
              />
            </div>
            <div>
              <Input 
                type="tel" 
                placeholder="Номер телефона *" 
                required
                value={formData.phone}
                onChange={(e) => onFormDataChange({...formData, phone: e.target.value})}
                className="bg-muted/50 border-primary/30"
              />
            </div>
            <div>
              <Input 
                placeholder="Чем вы занимаетесь? *" 
                required
                value={formData.role}
                onChange={(e) => onFormDataChange({...formData, role: e.target.value})}
                className="bg-muted/50 border-primary/30"
              />
            </div>
            <div className="flex items-start gap-2">
              <input 
                type="checkbox" 
                id="terms"
                required
                checked={agreedToTerms}
                onChange={(e) => onAgreedToTermsChange(e.target.checked)}
                className="mt-1 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs sm:text-sm text-muted-foreground cursor-pointer">
                Я ознакомлен(а) с{' '}
                <button 
                  type="button"
                  onClick={(e) => { e.preventDefault(); onShowOferta(); }}
                  className="text-primary hover:underline"
                >
                  Договором оферты
                </button>
                {' '}и{' '}
                <button 
                  type="button"
                  onClick={(e) => { e.preventDefault(); onShowPrivacy(); }}
                  className="text-primary hover:underline"
                >
                  Политикой конфиденциальности
                </button>
              </label>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={!agreedToTerms}>
              {formType === 'module01' ? 'Забронировать место' : 'Встать в лист ожидания'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingFormModal;
