(function() {
    const widget = {
        id: "integerDisplayWidget",
        name: "Integer Display",
        init: function() {
            this.container = document.createElement("div");
            this.container.style.fontSize = "48px";
            this.container.style.textAlign = "center";
            this.container.innerText = "Loading...";
            this.addChild(this.container);

            this.fetchData();
        },
        fetchData: function() {
            fetch("https://api.eu.signavio.cloud.sap/pi/signal/odata/v1/P2F_T1")
                .then(response => response.json())
                .then(data => {
                    const value = data.integer; // Adjust based on API response
                    this.container.innerText = value;
                })
                .catch(error => {
                    this.container.innerText = "Error loading data";
                    console.error(error);
                });
        }
    };

    // Register widget
    window.sap.custom.widgets.register(widget);
})();