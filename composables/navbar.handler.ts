export const useNavbarObserver = () => {
  const observer = useState<IntersectionObserver>("useNavbarObserver.observer");
  const elems = useState<Element[]>("useNavbarObserver.elems", () => []);
  const navbarClasses = ["navbar-primary", "navbar-secondary", "navbar-dark"];

  const observerHandler = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const navbar = document.querySelector("#navbar");
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbarClasses.forEach((cssClass) => {
          navbar?.classList.remove(cssClass);
        });
        navbar?.classList.add(
          entry.target.getAttribute("data-navbarClass") || ""
        );
      }
    });
  };

  const addElements = (elements: Element[]) => {
    elems.value = elements;
  };

  const observeElems = () => {
    observer.value = new IntersectionObserver(observerHandler, {
      threshold: 0.5,
    });
    elems.value.forEach((elem) => {
      observer.value.observe(elem);
    });
  };

  const unObserverElems = () => {
    elems.value.forEach((elem) => {
      observer.value.unobserve(elem);
    });
  };

  return {
    observeElems,
    addElements,
    unObserverElems,
  };
};
