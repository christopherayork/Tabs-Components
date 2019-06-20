class Tabs {
  constructor() {
    this.tabs = [...document.querySelectorAll('.tabs-link')].map(current => new TabLink(current));
    console.log(this.tabs);
    this.selectedTab = this.tabs.reduce((total, current) => current.element.classList.contains('tabs-link-selected') ? current : total);

  }
}


class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select());

  };

  select() {
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    tabs.selectedTab.deselect();

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
    tabs.selectedTab = this;

  }
  deselect() {
    this.element.classList.remove('tabs-link-selected');
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
    TweenMax.to(this.element, 1, {opacity: 1});
  }
  deselect() {
    this.element.classList.remove('tabs-item-selected');
    TweenMax.to(this.element, 1, {opacity: 0});
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const tabs = new Tabs();
