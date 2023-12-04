sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("oft.fiori.controller.App", {

	onInit: function() {
		
		var oApp = this.getView().byId("myApp");
		
		var oView1 = new sap.ui.view({
			id:"idView1",
			viewName:"oft.fiori.view.View1",
			type: sap.ui.core.mvc.ViewType.XML
		});
		
		var oView2 = new sap.ui.view({
			id:"idView2",
			viewName:"oft.fiori.view.View2",
			type: sap.ui.core.mvc.ViewType.XML
		});
		
		//adding these views as part of app control
	oApp.addMasterPage(oView1);
		oApp.addDetailPage(oView2);
		//oApp.setInitialPage(oView2);
		
		
	}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf oft.fiori.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oft.fiori.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oft.fiori.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});