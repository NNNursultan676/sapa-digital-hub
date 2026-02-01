// modalService.ts - Service for managing modal dialogs

class ModalService {
  private listeners: Array<(isOpen: boolean) => void> = [];
  private dataListeners: Array<(data: string) => void> = [];

  subscribe(listener: (isOpen: boolean) => void) {
    this.listeners.push(listener);
  }

  unsubscribe(listener: (isOpen: boolean) => void) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  subscribeData(listener: (data: string) => void) {
    this.dataListeners.push(listener);
  }

  unsubscribeData(listener: (data: string) => void) {
    this.dataListeners = this.dataListeners.filter((l) => l !== listener);
  }

  openModal(data: string) {
    this.listeners.forEach((listener) => listener(true));
    this.dataListeners.forEach((listener) => listener(data));
  }

  closeModal() {
    this.listeners.forEach((listener) => listener(false));
  }
}

const modalService = new ModalService();
export default modalService;
