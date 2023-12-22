class HNListElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const view = this.getAttribute('view') || 'list';
        const items = this.parseItemsAttribute(this.getAttribute('items')) || [];

        const listContainer = document.createElement('div');
        listContainer.classList.add('hn-list', `hn-list-${view}`);

        if (view === 'table') {
            // Table view
            const table = document.createElement('div');
            table.classList.add('hn-list-table');
        
            items.forEach(item => {
                const tableRow = document.createElement('div');
                tableRow.classList.add('hn-list-item');
        
                if (typeof item === 'object' && item !== null) {
                    // Handle object items in table view
                    for (const key in item) {
                        const tableCell = document.createElement('div');
                        tableCell.textContent = `${key}: ${item[key]}`;
                        tableRow.appendChild(tableCell);
                    }
                } else {
                    // Handle other types in table view
                    const tableCell = document.createElement('div');
                    tableCell.textContent = String(item);
                    tableRow.appendChild(tableCell);
                }
        
                table.appendChild(tableRow);
            });
        
            listContainer.appendChild(table); // Add the table container to listContainer
        } else {
            // Other views (list, grid, card, compact, thumbnail, timeline)
            items.forEach(item => {
                const listItem = document.createElement('div');

                if (typeof item === 'string') {
                    // Handle string items
                    listItem.textContent = item;
                } else if (typeof item === 'object' && item !== null) {
                    // Handle object items (e.g., for thumbnail view)
                    const title = item.title || '';
                    const image = item.image || '';
                    listItem.innerHTML = `<strong>${title}</strong><br><img src="${image}" alt="${title}">`;
                } else {
                    // Handle other types or null values
                    listItem.textContent = String(item);
                }

                listItem.classList.add('hn-list-item');
                listContainer.appendChild(listItem);
            });
        }

        this.shadowRoot.innerHTML = `
            <style>
                :host{
                    display: inline-block;
                }
                /* Basic styling for the list container */
                .hn-list {
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                }

                /* Styling for list items */
                .hn-list-item {
                    border: 1px solid #ccc;
                    padding: 10px;
                    margin-bottom: 10px;
                }

                /* Grid View */
                .hn-list-grid .hn-list-item {
                    display: inline-block;
                    box-sizing: border-box;
                    width: calc(33.33% - 10px);
                    margin-right: 10px;
                    margin-bottom: 10px;
                    padding: 10px;
                    background-color: #f5f5f5;
                }

                /* Remove right margin for the last item in the grid view */
                .hn-list-grid .hn-list-item:nth-child(3n) {
                    margin-right: 0;
                    width: calc(33.33%);
                }

                /* Card View */
                .hn-list-card .hn-list-item {
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                /* Compact View */
                .hn-list-compact .hn-list-item {
                    padding: 5px;
                    background-color: #fff;
                }

                /* Thumbnail View */
                .hn-list-thumbnail .hn-list-item {
                    display: flex;
                    align-items: center;
                }

                .hn-list-thumbnail .hn-list-item img {
                    margin-right: 10px;
                    max-width: 50px;
                    max-height: 50px;
                    border-radius: 50%;
                }

                .hn-list-table .hn-list-item div{
                    display: table-row;
                    padding: 10px;
                }

                .hn-list-table .hn-list-item div {
                    display: table-cell;
                    border-bottom: 1px solid #ddd;
                }

                /* Timeline View */
                .hn-list-timeline .hn-list-item {
                    position: relative;
                    padding-left: 20px;
                    border-left: 2px solid #3498db;
                }
            </style>
        `;

        this.shadowRoot.appendChild(listContainer);
    }

    parseItemsAttribute(itemsAttribute) {
        try {
            const parsedItems = JSON.parse(itemsAttribute);
    
            if (Array.isArray(parsedItems)) {
                // If it's an array, return the parsed items
                return parsedItems;
            } else {
                // If it's not an array, wrap it in an array
                return [parsedItems];
            }
        } catch (error) {
            console.error('Error parsing items attribute:', error);
            return null;
        }
    }
}

customElements.define('hn-list', HNListElement);
