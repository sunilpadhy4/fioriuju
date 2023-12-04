sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(Controller){
	return Controller.extend("oft.fiori.controller.BaseController",{
		// reuse functions for all child controllers
		
		
		getAppObject: function(){
			// in XML views, it will automatically apppend view id before the control id
			return sap.ui.getCore().byId("idAppView--myApp"); 
		}
	});	
	
});