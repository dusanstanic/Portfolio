export const scrollIntoView = (hash: string) => {
  const element = document.getElementById(hash.split("#")[1]);
  if (!element) return;
  const y = element.getBoundingClientRect().top + window.scrollY - 54;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
