import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import modalService from '@/services/modalService';
import { toast } from 'sonner';

export function DemoModal() {
  const [open, setOpen] = useState(false);
  const [demoTitle, setDemoTitle] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleOpen = (isOpen: boolean) => {
      setOpen(isOpen);
      if (!isOpen) {
        // Reset form when closing
        setFormData({ name: '', companyName: '', phone: '' });
      }
    };

    const handleData = (data: string) => {
      setDemoTitle(data);
    };

    modalService.subscribe(handleOpen);
    modalService.subscribeData(handleData);

    return () => {
      modalService.unsubscribe(handleOpen);
      modalService.unsubscribeData(handleData);
    };
  }, []);

  const handleClose = () => {
    modalService.closeModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.companyName.trim() || !formData.phone.trim()) {
      toast.error(t('demoModal.validation.required') || 'Пожалуйста, заполните все поля');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/send-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: demoTitle,
          name: formData.name,
          company: formData.companyName,
          phone: formData.phone,
        }),
      });

      if (response.ok) {
        toast.success(t('demoModal.alerts.success') || 'Заявка успешно отправлена!');
        handleClose();
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast.error(t('demoModal.alerts.error') || 'Ошибка при отправке заявки. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhone = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as +7 (XXX) XXX-XX-XX
    if (digits.length === 0) return '';
    if (digits.length <= 1) return `+7 (${digits}`;
    if (digits.length <= 4) return `+7 (${digits.slice(1)}`;
    if (digits.length <= 7) return `+7 (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 9) return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {demoTitle || t('hero.cta') || 'Запросить демо'}
          </DialogTitle>
          <DialogDescription>
            {t('demoModal.header') || 'Заполните форму, и мы свяжемся с вами в ближайшее время'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              {t('demoModal.form.name') || 'Имя'}
            </Label>
            <Input
              id="name"
              placeholder={t('demoModal.form.name') || 'Ваше имя'}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">
              {t('demoModal.form.companyName') || 'Название компании'}
            </Label>
            <Input
              id="companyName"
              placeholder={t('demoModal.form.companyName') || 'Название компании'}
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">
              {t('demoModal.form.phone') || 'Телефон'}
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (7XX) XXX-XX-XX"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              {t('demoModal.buttons.close') || 'Отмена'}
            </Button>
            <Button
              type="submit"
              className="btn-accent"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t('demoModal.buttons.submitting') || 'Отправка...'
                : t('demoModal.buttons.submit') || 'Отправить'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
