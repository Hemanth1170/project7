sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, History, MessageToast, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("com.hemanth.apps.project7.controller.MainView", {

        
        listItemPressed: function(oEvent) {
            var id;
			id = oEvent.getSource().getProperty("title");

			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("RouteToDetail1", {
				productId: id
			});

        }
        
    });
});
