var Experience = {
    environment: [
        {
            name: "old-row-maryland",
            id: function(){
                return "main-app-container";
            },
            type: "hyperreal-space",
            class: "environment-container",
            settings: "all",
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                return el;
            }
        }
    ],
    objectsubject: [
      {
            name: "header",
            type: "container",
            class: "banner-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "R O W";
            },
            index: 0,
            children: [

            ],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
        },
      {
            name: "world-stream",
            type: "container",
            class: "stream-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 1,
            children: [
              6,
              7,
              8,
              9,
              10
            ],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
      },
      {
          name: "app-menu",
          type: "button-container",
          class: "button-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 2,
          children: [
          ],
          parent: [],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              return el;
          }
        },
      {
            name: "app-menu",
            type: "container",
            class: "settings-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "";
            },
            index: 3,
            children: [
              11,
              12,
              13
            ],
            parent: [],
            element: function(){
                let self = this;
                let el = document.createElement("div");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                return el;
            }
          },
      {
            name: "login-page",
            type: "container",
              class: "overlay-container",
              id: function(){
                  let self = this;
                  return ""+self.name+"-"+self.class;
              },
              content: function(){
                  return "";
              },
              index: 4,
              children: [
              ],
              parent: [],
              element: function(){
                  let self = this;
                  let el = document.createElement("div");
                  el.setAttribute("id", self.id());
                  el.classList.add(self.class);
                  return el;
              }
            },
      {
        name: "app-selection-page",
        type: "container",
        class: "overlay-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "";
        },
        index: 5,
        children: [
        ],
        parent: [],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "augr",
        type: "button-container",
        class: "preview-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "AugR";
        },
        index: 6,
        children: [
        ],
        parent: [
          1
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            el.classList.add("top-bins");
            return el;
        }
      },
      {
        name: "shoppAIR",
        type: "button-container",
        class: "preview-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "shoppAIR";
        },
        index: 7,
        children: [
        ],
        parent: [
          1
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            el.classList.add("top-bins");
            return el;
        }
      },
      {
        name: "snackshack",
        type: "button-container",
        class: "preview-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "snack shack";
        },
        index: 8,
        children: [
        ],
        parent: [
          1
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "lyoko",
        type: "button-container",
        class: "preview-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "lyoko";
        },
        index: 9,
        children: [
        ],
        parent: [
          1
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "solAR",
        type: "button-container",
        class: "preview-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "solAR";
        },
        index: 10,
        children: [
        ],
        parent: [
          1
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "sort-by-publishing-date",
        type: "menu-button-container",
        class: "menu-button-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "Published";
        },
        index: 11,
        children: [
        ],
        parent: [
          3
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "sort-by-downloads",
        type: "button-container",
        class: "menu-button-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "Downloads";
        },
        index: 12,
        children: [
        ],
        parent: [
          3
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "add-item",
        type: "button-container",
        class: "menu-button-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "Add";
        },
        index: 13,
        children: [
        ],
        parent: [
          3
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "login-header",
        type: "container",
        class: "form-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "Login";
        },
        index: 14,
        children: [
        ],
        parent: [
          4
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "login-instructions",
        type: "instructions-container",
        class: "form-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return `<p>[1] Turn on your device's NFC reader</p><p> [2] Press the <span style="color:aquamarine;">connect</span> button below and tap your cARd with this device</p>`;
        },
        index: 15,
        children: [
        ],
        parent: [
          4
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "submit-login-credentials",
        type: "button-container",
        class: "form-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "connect";
        },
        index: 16,
        children: [
        ],
        parent: [
          4
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "exit-login-form",
        type: "button-container",
        class: "form-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "exit";
        },
        index: 17,
        children: [
        ],
        parent: [
          4
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "tap-to-open-selection",
        type: "button-container",
        class: "selection-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "tap to open";
        },
        index: 18,
        children: [
        ],
        parent: [
          5
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "exit-selection-preview",
        type: "button-container",
        class: "selection-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "exit";
        },
        index: 19,
        children: [
        ],
        parent: [
          5
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "selection-download-count",
        type: "button-container",
        class: "selection-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "download count";
        },
        index: 20,
        children: [
        ],
        parent: [
          5
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "selection-active-user-count",
        type: "button-container",
        class: "selection-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "active user count";
        },
        index: 21,
        children: [
        ],
        parent: [
          5
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "selection-description",
        type: "container",
        class: "selection-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "selection description will go here";
        },
        index: 22,
        children: [
        ],
        parent: [
          5
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      {
        name: "selection-title",
        type: "container",
        class: "selection-component-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "selection title goes here";
        },
        index: 23,
        children: [
        ],
        parent: [
          5
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
      /*{
              name: "card",
              type: "container",
              class: "page-container",
              id: function(){
                  let self = this;
                  return ""+self.name+"-"+self.class;
              },
              content: function(){
                  return "";
              },
              index: 0,
              children: [
                  3,  // preview-video-container
                  4,  // header-title-container
                  5,  // header-subtitle-container
                  9, // purchase-button-container
              ],
              parent: [],
              element: function(){
                  let self = this;
                  let el = document.createElement("div");
                  el.setAttribute("id", self.id());
                  el.classList.add(self.class);
                  return el;
                }
              },*/
    ],
    subjectobject: [],
    effector: [
      {
          view: "flat",
          event: "click",
          accessibility: {
              isMobile: function(){
                  if(window.innerWidth>640){
                      return false;
                  }
                  else{
                      return true;
                  }
              },
              appMenuSettingsContainerVisible: false,
              loginPageOverlayContainerVisible: false,
              previewContainerInFocus: null,
              showAppSelectionPreview: function(target){
                let self = this;
                  self.previewContainerInFocus = target;
                  document.getElementById("world-stream-stream-container").scrollTo({ top: document.getElementById(target).offsetTop, behavior: "smooth"});
                  document.getElementById("app-selection-page-overlay-container").style.display = "block";
                  setTimeout(function(){
                    let selectionComponents = document.getElementById("app-selection-page-overlay-container").children;
                    document.getElementById("app-selection-page-overlay-container").style.height = "100%";
                    document.getElementById("app-selection-page-overlay-container").style.opacity = "1.0";
                    for(var y=0; y<selectionComponents.length; y++){
                      (function(){
                        selectionComponents[y].style.display = "block";
                      })();
                    }
                    let descriptions = {
                      "augr-preview-container": {
                        description: `<p class="description-line">a Dia that turns your webcam into an immersive web broswer.</p>
                        <p class="description-line">Interact with content around you using your hadns and natural senses.</p>
                        <p class="description-bottom-line">Design and share hyperreal spaces to explore ideas and experiences like never before.</p>`,
                        title: "AugR",
                        downloadCount: 0,
                        activeUserCount: 0
                      },
                      "shoppAIR-preview-container": {
                        description: `<p class="description-line">a DIA that offers a complete 21st century retail and grocery solution.</p>
                        <p class="description-line">Find whatever you need to wear, eat, drink, or see. Find it, get it, focus in living, we are there.</p>
                        <p class="description-bottom-line">Airborne. Immersive. Ready in 30! shoppAIR.</p>`,
                        title: "shoppAIR",
                        downloadCount: 0,
                        activeUserCount: 0
                      },
                      "snackshack-preview-container": {
                        description: `<p class="description-line">a DIA for late night convenience.</p>
                        <p class="description-bottom-line">Manage your sreaming, snack, and paper enertainment needs between the hours of 11PM and 6AM.</p>`,
                        title: "SnackShack",
                        downloadCount: 0,
                        activeUserCount: 0
                      },
                      "lyoko-preview-container": {
                        description: `<p class="description-line">a DIA for creating and modifying DIAs usinf narual lanuage programming.</p>
                        <p class="description-bottom-line">Lyoko supports English, French, Kikongo, and Lingala. It can process texts spliced with or wholly written in Javascript and/or Python.</p>`,
                        title: "Lyoko",
                        downloadCount: 0,
                        activeUserCount: 0
                      },
                      "solAR-preview-container": {
                        description: `<p class="description-line">a DIA for aerospace discovery and invention.</p>
                        <p class="description-bottom-line">Explore.</p>`,
                        title: "solAR",
                        downloadCount: 0,
                        activeUserCount: 0
                      }
                    };
                    document.getElementById("selection-description-selection-component-container").innerHTML = `<div style="font-size: 24px;"">${descriptions[target].description}</div>`;
                    document.getElementById("selection-title-selection-component-container").innerHTML = `<div style="font-size: 30px; font-weight: 700;">${descriptions[target].title}</div>`;
                    document.getElementById("selection-download-count-selection-component-container").innerHTML = `<div style="font-weight: 700;">${descriptions[target].downloadCount}</div>`;
                    document.getElementById("selection-active-user-count-selection-component-container").innerHTML = `<div style="font-weight: 700;">${descriptions[target].activeUserCount}</div>`;
                  }, 500);
              }
          },
          fx: function(target){
              let val = target;
              let self = this;

              console.log("------------------------------------");
              console.log(`${val}`);
              console.log("------------------------------------");
              switch(val){
                  case "augr-preview-container":
                      document.getElementById("augr-preview-container").style.width = "100%";
                      document.getElementById("augr-preview-container").style.height = "100%";
                      //document.getElementById("world-stream-stream-container").scrollTo({ top: document.getElementById("augr-preview-container").offsetTop, behavior: "smooth"});
                      //self.accessibility.previewContainerInFocus = "augr-preview-container";

                      self.accessibility.showAppSelectionPreview("augr-preview-container");

                  break;
                  case "shoppAIR-preview-container":
                      document.getElementById("shoppAIR-preview-container").style.width = "100%";
                      document.getElementById("shoppAIR-preview-container").style.height = "100%";
                      //self.accessibility.previewContainerInFocus = "shoppAIR-preview-container";

                      self.accessibility.showAppSelectionPreview("shoppAIR-preview-container");
                  break;
                  case "snackshack-preview-container":
                      document.getElementById("snackshack-preview-container").style.width = "100%";
                      document.getElementById("snackshack-preview-container").style.height = "100%";
                      //self.accessibility.previewContainerInFocus = "snackshack-preview-container";

                      self.accessibility.showAppSelectionPreview("snackshack-preview-container");
                  break;
                  case "lyoko-preview-container":
                      document.getElementById("lyoko-preview-container").style.width = "100%";
                      document.getElementById("lyoko-preview-container").style.height = "100%";
                      //self.accessibility.previewContainerInFocus = "lyoko-preview-container";

                      self.accessibility.showAppSelectionPreview("lyoko-preview-container");
                  break;
                  case "solAR-preview-container":
                      document.getElementById("solAR-preview-container").style.width = "100%";
                      document.getElementById("solAR-preview-container").style.height = "100%";
                      //self.accessibility.previewContainerInFocus = "solAR-preview-container";

                      self.accessibility.showAppSelectionPreview("solAR-preview-container");
                  break;
                  case "exit-selection-preview-selection-component-container":  /* SAME CODE AS ~~111~~~ below */
                      setTimeout(function(){
                        document.getElementById("app-selection-page-overlay-container").style.display = "none";
                        self.accessibility.previewContainerInFocus = null;
                      }, 500);
                      document.getElementById("app-selection-page-overlay-container").style.opacity = "0";
                      document.getElementById("app-selection-page-overlay-container").style.height = "0";
                      document.getElementById(self.accessibility.previewContainerInFocus).style.width = null;//"unset";//"36%";
                      document.getElementById(self.accessibility.previewContainerInFocus).style.height = null;//"unset";//"45%";
                      let selectionComponents = document.getElementById("app-selection-page-overlay-container").children;
                      for(var z=0; z<selectionComponents.length; z++){
                        (function(){
                          selectionComponents[z].style.display = "none";
                        })();
                      }
                  break;
                  case "exit-login-form-form-component-container":  /* SAME CODE AS ~~111~~~ below */
                      setTimeout(function(){
                        document.getElementById("login-page-overlay-container").style.display = "none";
                      }, 500);
                      document.getElementById("login-page-overlay-container").style.opacity = "0";
                      document.getElementById("login-page-overlay-container").style.height = "0";
                      self.accessibility.loginPageOverlayContainerVisible = false;
                  break;
                  case "add-item-menu-button-container":
                      if(self.accessibility.loginPageOverlayContainerVisible){  /* ~~~111~~~ */
                        setTimeout(function(){
                          document.getElementById("login-page-overlay-container").style.display = "none";
                        }, 500);
                        document.getElementById("login-page-overlay-container").style.opacity = "0";
                        document.getElementById("login-page-overlay-container").style.height = "0";
                        self.accessibility.loginPageOverlayContainerVisible = false;
                      }
                      else{
                        document.getElementById("login-page-overlay-container").style.display = "block";
                        setTimeout(function(){
                          document.getElementById("login-page-overlay-container").style.opacity = "1.0";
                          document.getElementById("login-page-overlay-container").style.height = "100%";

                          self.accessibility.loginPageOverlayContainerVisible = true;
                        }, 50);
                      }
                  break;
                  case "app-menu-button-container":
                      console.log("toggle menu settings container");
                      if(self.accessibility.appMenuSettingsContainerVisible){
                          setTimeout(function(){
                            document.getElementById("app-menu-settings-container").style.display = "none";
                          }, 500);
                          document.getElementById("app-menu-settings-container").style.opacity = "0";
                          document.getElementById("app-menu-settings-container").style.height = "0";
                          self.accessibility.appMenuSettingsContainerVisible = false;
                      }
                      else{
                          document.getElementById("app-menu-settings-container").style.display = "block";
                          setTimeout(function(){
                            document.getElementById("app-menu-settings-container").style.opacity = "1.0";
                            if(self.accessibility.isMobile()){
                                document.getElementById("app-menu-settings-container").style.height = "50%";
                            }
                            else{
                                document.getElementById("app-menu-settings-container").style.height = "300px";
                            }
                            self.accessibility.appMenuSettingsContainerVisible = true;
                          }, 50);

                      }
                  break;
                  default:
                      console.log("no specific functionality defined for this target.");
                  break;
              }
              console.log("------------------------------------");
          }
      }
    ],
    selector: []
};
