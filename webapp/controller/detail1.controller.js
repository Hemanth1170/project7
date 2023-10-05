sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
        History,
        MessageToast, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.hemanth.apps.project7.controller.detail1", {
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RouteToDetail1").attachMatched(this._onRouteMatched, this);
            },
            _onRouteMatched: function (oEvent) {
                var self = this;
                var oArgs = oEvent.getParameter("arguments");
                //var oView = this.getView();
                var aFilter = [];
                var oFilter = new Filter("ProductID", FilterOperator.EQ, oArgs.productId);
                aFilter.push(oFilter);
                var oModel = this.getOwnerComponent().getModel("model1");
                oModel.read("/ProductSet", {
                    filters: aFilter,
                    success: function(oData){
                        var oProdDetailModel = new sap.ui.model.json.JSONModel(oData.results);
                        self.getView().setModel(oProdDetailModel, "oProdDetailModel");
                        // oModelJson.setData(oData);
                    },
                    error: function(error) {
                        MessageToast(error);
                    }
                });
            }
        });
    });
