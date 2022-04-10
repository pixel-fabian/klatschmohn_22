class Menu {
  constructor(menuClassName: string, menuButtonId: string) {
    // open submenu on focus

    const menuLinks = document.querySelectorAll(
      `${menuClassName} .menu-item-has-children a`,
    );
    this.addFocusClass(menuLinks, 'expanded');

    // open menu on button press (mobile)
    const menuButton: HTMLElement = document.querySelector(menuButtonId);
    const menu = document.querySelector(menuClassName);
    console.log('menuButton', menuButton);
    console.log('menu', menu);

    menuButton.addEventListener('click', () => {
      menu.classList.toggle('visible');
    });
  }

  /**
   * Add and remove a class on focus to open 2nd level of navigation on keyboard only usage
   *
   * @param nodes List of links
   * @param className Name of the class to add
   */
  private addFocusClass(nodes: NodeList, className: string) {
    nodes.forEach((node) => {
      // typeCast node -> HTMLElement
      if (node.nodeType == Node.ELEMENT_NODE) {
        const link = node as HTMLElement;
        // add class on focus
        link.addEventListener('focus', () => {
          link.parentElement.classList.add(className);
          link.setAttribute('aria-expanded', 'true');
        });

        // remove class on leaving last item in submenu
        if (link.nextElementSibling) {
          const subMenu = link.nextElementSibling;
          const subMenuLinks = subMenu.querySelectorAll('a');
          const lastLinkIndex = subMenuLinks.length - 1;
          const lastLink = subMenuLinks[lastLinkIndex];

          //@TODO fix bug if you move backwards
          lastLink.addEventListener('blur', () => {
            link.parentElement.classList.remove(className);
            link.setAttribute('aria-expanded', 'false');
          });
        }
      }
    });
  }
}

export default Menu;
