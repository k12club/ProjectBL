function initData() {
  jimData.variables["Status"] = "online";
  jimData.variables["Payment"] = "Payment";
  jimData.variables["Address"] = "Shipping address";
  jimData.datamasters["Employee"] = [
    {
      "id": 1,
      "datamaster": "Employee",
      "userdata": {
        "email": "berlin@berlin.com"
      }
    }
  ];

  jimData.isInitialized = true;
}