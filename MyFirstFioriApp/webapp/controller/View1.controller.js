sap.ui.define([
	"oft/fiori/controller/BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("oft.fiori.controller.View1", {

		 


		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oft.fiori.view.View1
		 */
		//	onInit: function() {
		//
		//	},

		onNext: function(){
			var oApp = this.getAppObject();
			oApp.to("idView2");
		},
		
	onSearch: function(oEvent){
                    var queryString = oEvent.getparameter("query");
                    var oFilter = new sap.ui.model.Filter("EmployeeID",
                                                           sap.ui.model.FilterOperator.Contains,
                                                            queryString);
                                                            
                    var aFilter = [oFilter];
                    var oList = this.getView().byId("list0");
                    oList.getBinding("items").filter(aFilter);
                    
                }
	

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf oft.fiori.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oft.fiori.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oft.fiori.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});