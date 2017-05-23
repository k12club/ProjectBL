jQuery("#simulation")
  .on("click", ".m-681cfa72-37b4-4922-b8fb-893c528a7a74 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-681cfa72-Rectangle_StartQuotationBtn")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3886348c-bacb-4f66-9554-fd9a14a5b7d3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-681cfa72-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-681cfa72-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-681cfa72-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-681cfa72-Panel_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-681cfa72-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-681cfa72-Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-681cfa72-Rectangle_3" ],
                    "value": "HEALTH CENTER IN PHRANAKHON ,CHAI PRAKAN HOSPITAL"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-681cfa72-37b4-4922-b8fb-893c528a7a74 #m-681cfa72-Rectangle_3": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Bold',Arial"
                      }
                    }
                  },{
                    "#m-681cfa72-37b4-4922-b8fb-893c528a7a74 #m-681cfa72-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#m-681cfa72-37b4-4922-b8fb-893c528a7a74 #m-681cfa72-Rectangle_3 span": {
                      "attributes": {
                        "color": "#32383D",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Bold',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-681cfa72-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-681cfa72-Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-681cfa72-Rectangle_StartQuotationBtn" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-681cfa72-Rectangle_4" ],
                    "value": "BANKING TRANSFER"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-681cfa72-37b4-4922-b8fb-893c528a7a74 #m-681cfa72-Rectangle_4": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Bold',Arial"
                      }
                    }
                  },{
                    "#m-681cfa72-37b4-4922-b8fb-893c528a7a74 #m-681cfa72-Rectangle_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#m-681cfa72-37b4-4922-b8fb-893c528a7a74 #m-681cfa72-Rectangle_4 span": {
                      "attributes": {
                        "color": "#32383D",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Bold',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });