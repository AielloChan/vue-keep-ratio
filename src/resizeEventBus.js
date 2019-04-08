export default class ResizeEventBus {
  constructor() {
    this.useResizeObserver = false;
    this.id = 0;
    this.Store = new Map();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", () => {
        for (let cb of this.Store.values()) {
          cb && cb();
        }
      });
    } else {
      this.useResizeObserver = true;
    }
  }
  getResizeEventId(el) {
    const resizeEventId = el.dataset.resizeEventId;
    if (resizeEventId === undefined) {
      el.dataset.resizeEventId = this.idx;
      return this.idx++;
    } else {
      return resizeEventId;
    }
  }
  add(el, cb) {
    const id = this.getResizeEventId(el);
    if (this.useResizeObserver) {
      const resizeObserver = new ResizeObserver(cb);
      resizeObserver.observe(el);
      this.Store.set(id, resizeObserver);
    } else {
      this.Store.set(id, cb);
    }
  }
  remove(el) {
    const id = this.getResizeEventId(el);
    if (this.useResizeObserver) {
      this.Store.get(id).unobserve(el);
    }
    this.Store.delete(id);
  }
}
