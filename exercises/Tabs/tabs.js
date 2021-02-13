const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels
  console.log(tabPanels);
  tabPanels.forEach(function (panel) {
    // or (panel)=>
    console.log(panel);
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });

  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // find the associated tabPanel and show it
  const { id } = event.currentTarget;

  /**
   * METHOD 1
  console.log(id);
  const tabPanel = tabs.querySelector(`[aria-labelledby=${id}]`);
  tabPanel.hidden = false;
   */

  /**
   * METHOD 2 - find in the array of tabPanels (we would need to convert the tabPanels to array
   * from the nodelist)
   */
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );

  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
