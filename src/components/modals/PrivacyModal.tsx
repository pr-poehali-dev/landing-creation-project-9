import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PrivacyModalProps {
  showPrivacy: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ showPrivacy, onClose }: PrivacyModalProps) => {
  if (!showPrivacy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <Card className="w-full max-w-2xl neon-border bg-card/95 backdrop-blur-xl animate-scale-in max-h-[80vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Политика конфиденциальности</h3>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
          <div className="overflow-y-auto max-h-[60vh] text-sm text-muted-foreground space-y-4">
            <p>
              Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всех персональных данных, которые могут быть получены от посетителей сайта в процессе использования сайта и его сервисов.
            </p>
            <p>
              Использование сервисов сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональных данных. В случае несогласия с этими условиями Пользователь должен воздержаться от использования сервисов.
            </p>
            <h4 className="font-semibold text-foreground mt-4">1. Персональные данные, которые собираются</h4>
            <p>
              Для регистрации на мероприятие мы можем запрашивать следующие персональные данные:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Фамилия, имя, отчество</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Информация о роде деятельности</li>
            </ul>
            <h4 className="font-semibold text-foreground mt-4">2. Цели сбора персональных данных</h4>
            <p>
              Персональные данные Пользователя используются исключительно в следующих целях:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Регистрация участника на мероприятие</li>
              <li>Связь с участниками по вопросам организации мероприятия</li>
              <li>Предоставление информации о мероприятии</li>
              <li>Улучшение качества услуг</li>
            </ul>
            <h4 className="font-semibold text-foreground mt-4">3. Защита персональных данных</h4>
            <p>
              Администрация сайта принимает все необходимые меры для защиты персональных данных Пользователя от неправомерного доступа, изменения, раскрытия или уничтожения.
            </p>
            <h4 className="font-semibold text-foreground mt-4">4. Изменение Политики конфиденциальности</h4>
            <p>
              Администрация сайта имеет право в любое время вносить изменения в настоящую Политику конфиденциальности. При внесении изменений в заголовке Политики указывается дата последнего обновления.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyModal;
