export class Behaviour {
  run(method, instance, data) {
    this.instance = instance;
    this.data = data;

    if (!this[method]) {
      throw new Error('Behaviour method not found');
    }

    return this[method]();
  }

  reload() {
    window.location.reload();
  }

  redirect() {
    window.location.href = this.data.url;
  }

  confirmClear() {
    this.instance.processing = false;
    this.instance.inputs = this.instance.clone(this.instance.initial);
    this.instance.addNotification({
      type: 'success',
      message: this.data.message,
    });
  }
}
