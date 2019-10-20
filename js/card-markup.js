var Experience = {
    environment: [
        {
            name: "creative-Augmented-Reality-desktop",
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
            name: "profile",
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
                1,
                2,
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
          name: "profile-photo",
          type: "container",
          class: "image-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 1,
          children: [],
          parent: [
            0
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
          name: "social-media",
          type: "container",
          class: "banner-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 2,
          children: [
            3,
            4,
            5,
            6
          ],
          parent: [
            0
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
          name: "youtube",
          type: "button-container",
          class: "portal-button-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 3,
          children: [],
          parent: [
            2
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
          name: "instagram",
          type: "button-container",
          class: "portal-button-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 4,
          children: [],
          parent: [
            2
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
          name: "linkedin",
          type: "button-container",
          class: "portal-button-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 5,
          children: [],
          parent: [
            2
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
          name: "whatsapp",
          type: "button-container",
          class: "portal-button-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 6,
          children: [],
          parent: [
            2
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
          name: "settings",
          type: "container",
          class: "options-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 7,
          children: [
            8,
            9,
            10
          ],
          parent: [
            0
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
          name: "profile-manager",
          type: "button-container",
          class: "option-button-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "PROFILE";
          },
          index: 8,
          children: [],
          parent: [
            7
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
          name: "augr-settings",
          type: "button-container",
          class: "option-button-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "AUGR";
          },
          index: 9,
          children: [],
          parent: [
            7
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
          name: "orm",
          type: "button-container",
          class: "option-button-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "ROW";
          },
          index: 10,
          children: [],
          parent: [
            7
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
          name: "profile-manager",
          type: "container",
          class: "page-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 11,
          children: [
            12,
            17,
            22,
            27,
            32
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
          name: "youtube-settings",
          type: "container",
          class: "settings-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 12,
          children: [],
          parent: [
            11
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
          name: "youtube-icon",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return ".";
          },
          index: 13,
          children: [],
          parent: [
            12
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("icon-settings-component");
              return el;
          }
      },
      {
          name: "youtube-views-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "views";
          },
          index: 14,
          children: [],
          parent: [
            12
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("first-metric-component");
              return el;
          }
      },
      {
          name: "youtube-subscriber-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "subs";
          },
          index: 15,
          children: [],
          parent: [
            12
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("second-metric-component");
              return el;
          }
      },
      {
          name: "youtube-edit-button",
          type: "button-container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "set";
          },
          index: 16,
          children: [],
          parent: [
            12
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("edit-settings-button-component");
              return el;
          }
      },
      {
          name: "instagram-settings",
          type: "container",
          class: "settings-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 17,
          children: [],
          parent: [
            11
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
          name: "instagram-icon",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return ".";
          },
          index: 18,
          children: [],
          parent: [
            17
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("icon-settings-component");
              return el;
          }
      },
      {
          name: "instagram-likes-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "likes";
          },
          index: 19,
          children: [],
          parent: [
            17
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("first-metric-component");
              return el;
          }
      },
      {
          name: "instagram-follower-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "followers";
          },
          index: 20,
          children: [],
          parent: [
            17
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("second-metric-component");
              return el;
          }
      },
      {
          name: "instagram-edit-button",
          type: "button-container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "set";
          },
          index: 21,
          children: [],
          parent: [
            17
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("edit-settings-button-component");
              return el;
          }
      },
      {
          name: "linkedin-settings",
          type: "container",
          class: "settings-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 22,
          children: [],
          parent: [
            11
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
          name: "linkedin-icon",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return ".";
          },
          index: 23,
          children: [],
          parent: [
            22
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("icon-settings-component");
              return el;
          }
      },
      {
          name: "linkedin-views-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "profile views";
          },
          index: 24,
          children: [],
          parent: [
            22
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("first-metric-component");
              return el;
          }
      },
      {
          name: "linkedin-connection-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "conns";
          },
          index: 25,
          children: [],
          parent: [
            22
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("second-metric-component");
              return el;
          }
      },
      {
          name: "linkedin-edit-button",
          type: "button-container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "set";
          },
          index: 26,
          children: [],
          parent: [
            22
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("edit-settings-button-component");
              return el;
          }
      },
      {
          name: "whatsapp-settings",
          type: "container",
          class: "settings-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 27,
          children: [],
          parent: [
            11
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
          name: "whatsapp-icon",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return ".";
          },
          index: 28,
          children: [],
          parent: [
            27
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("icon-settings-component");
              return el;
          }
      },
      {
          name: "whatsapp-new-messages-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "views";
          },
          index: 29,
          children: [],
          parent: [
            27
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("first-metric-component");
              return el;
          }
      },
      {
          name: "whatsapp-missed-call-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "calls";
          },
          index: 30,
          children: [],
          parent: [
            27
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("second-metric-component");
              return el;
          }
      },
      {
          name: "whatsapp-edit-button",
          type: "button-container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "set";
          },
          index: 31,
          children: [],
          parent: [
            27
          ],
          element: function(){
              let self = this;
              let el = document.createElement("div");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("edit-settings-button-component");
              return el;
          }
      },
      {
          name: "user-life",
          type: "button-container",
          class: "stream-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 32,
          children: [],
          parent: [
            11
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
          name: "augr-settings",
          type: "container",
          class: "page-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 33,
          children: [],
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
          name: "augr-settings-header",
          type: "container",
          class: "title-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "AugR Settings";
          },
          index: 34,
          children: [],
          parent: [
            33
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
          name: "2d-format",
          type: "container",
          class: "settings-manager-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 35,
          children: [],
          parent: [
            33
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
          name: "3d-0-format",
          type: "container",
          class: "settings-manager-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 36,
          children: [],
          parent: [
            33
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
          name: "3d-1-format",
          type: "container",
          class: "settings-manager-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 37,
          children: [],
          parent: [
            33
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
          name: "3d-2-format",
          type: "container",
          class: "settings-manager-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 38,
          children: [],
          parent: [
            33
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
          name: "network-sensory-settings",
          type: "container",
          class: "manager-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 39,
          children: [],
          parent: [
            33
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
          name: "network-settings",
          type: "container",
          class: "manager-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 40,
          children: [],
          parent: [
            39
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
          name: "network-settings-title",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "NETWORK";
          },
          index: 41,
          children: [],
          parent: [
            40
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
          name: "network-settings-park-name",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "pARk";
          },
          index: 42,
          children: [],
          parent: [
            40
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
          name: "network-settings-aria-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "ARias";
          },
          index: 43,
          children: [],
          parent: [
            40
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
          name: "network-settings-cards-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "cARds";
          },
          index: 44,
          children: [],
          parent: [
            40
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
          name: "sensory-settings",
          type: "container",
          class: "manager-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 45,
          children: [],
          parent: [
            39
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
          name: "sensory-settings-title",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "SENSORS";
          },
          index: 46,
          children: [],
          parent: [
            45
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
          name: "sensory-settings-vision",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "vision";
          },
          index: 47,
          children: [],
          parent: [
            45
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
          name: "sensory-settings-touch",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "touch";
          },
          index: 48,
          children: [],
          parent: [
            45
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
          name: "sensory-settings-hearing",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "hearing";
          },
          index: 49,
          children: [],
          parent: [
            45
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
          name: "2d-format-title",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "2D flat";
          },
          index: 50,
          children: [],
          parent: [
            35
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
          name: "2d-format-checkbox",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 51,
          children: [],
          parent: [
            35
          ],
          element: function(){
              let self = this;
              let el = document.createElement("input");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("format-checkbox");
              el.setAttribute("type","checkbox");
              el.setAttribute("name","2dformat");
              el.setAttribute("value","0");
              return el;
          }
      },
      {
          name: "2d-format-pop-title",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return `"Traditional"`;
          },
          index: 52,
          children: [],
          parent: [
            35
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
          name: "3d-0-format-title",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "3D";
          },
          index: 53,
          children: [],
          parent: [
            36
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
          name: "3d-0-format-checkbox",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 54,
          children: [],
          parent: [
            36
          ],
          element: function(){
              let self = this;
              let el = document.createElement("input");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("format-checkbox");
              el.setAttribute("type","checkbox");
              el.setAttribute("name","3d0format");
              el.setAttribute("value","1");
              return el;
          }
      },
      {
          name: "3d-0-format-pop-title",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return `"VR"`;
          },
          index: 55,
          children: [],
          parent: [
            36
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
          name: "3d-1-format-title",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "camera";
          },
          index: 56,
          children: [],
          parent: [
            37
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
          name: "3d-1-format-checkbox",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 57,
          children: [],
          parent: [
            37
          ],
          element: function(){
              let self = this;
              let el = document.createElement("input");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("format-checkbox");
              el.setAttribute("type","checkbox");
              el.setAttribute("name","3d1format");
              el.setAttribute("value","1");
              return el;
          }
      },
      {
          name: "3d-1-format-pop-title",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return `"AR"`;
          },
          index: 58,
          children: [],
          parent: [
            37
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
          name: "3d-2-format-title",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "multisensory";
          },
          index: 59,
          children: [],
          parent: [
            38
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
          name: "3d-2-format-checkbox",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 60,
          children: [],
          parent: [
            38
          ],
          element: function(){
              let self = this;
              let el = document.createElement("input");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.classList.add("format-checkbox");
              el.setAttribute("type","checkbox");
              el.setAttribute("name","3d2format");
              el.setAttribute("value","2");
              return el;
          }
      },
      {
          name: "3d-2-format-pop-title",
          type: "container",
          class: "settings-manager-component",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return `"Immersive"`;
          },
          index: 61,
          children: [],
          parent: [
            38
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
          name: "old-row",
          type: "container",
          class: "world-stream-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
          },
          index: 62,
          children: [],
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
            index: 63,
            children: [],
            parent: [
              62
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
        index: 64,
        children: [
        ],
        parent: [
          62
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
        index: 65,
        children: [
        ],
        parent: [
          62
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
        name: "exit-profile-manager",
        type: "button-container",
        class: "exit-button-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "back";
        },
        index: 66,
        children: [
        ],
        parent: [
          11
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
        name: "exit-augr-settings",
        type: "button-container",
        class: "exit-button-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "back";
        },
        index: 67,
        children: [
        ],
        parent: [
          33
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
        name: "exit-world-stream",
        type: "button-container",
        class: "exit-button-container",
        id: function(){
            let self = this;
            return ""+self.name+"-"+self.class;
        },
        content: function(){
            return "exit";
        },
        index: 68,
        children: [
        ],
        parent: [
          62
        ],
        element: function(){
            let self = this;
            let el = document.createElement("div");
            el.setAttribute("id", self.id());
            el.classList.add(self.class);
            return el;
        }
      },
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
              augrSettingsContainerVisible: false,
              profilePageManagerContainerVisible: false,
              oldRowStreamContainerVisible: false,
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
              },
              toggleProfileManagerContainer: function(){
                let self = this;
                if(self.profilePageManagerContainerVisible){
                  document.getElementById("profile-manager-page-container").style.height = 0;
                  document.getElementById("profile-manager-page-container").style.opacity = 0;
                  setTimeout(function(){
                      document.getElementById("profile-manager-page-container").style.display = "none";
                      self.profilePageManagerContainerVisible = false;
                  }, 500);
                }
                else{
                  document.getElementById("profile-manager-page-container").style.display = "block";
                  setTimeout(function(){
                    document.getElementById("profile-manager-page-container").style.height = "100%";
                    document.getElementById("profile-manager-page-container").style.opacity = 1.0;
                  }, 100);
                  self.profilePageManagerContainerVisible = true;
                }
              },
              toggleAugRSettingsContainer: function(){
                if(self.augrSettingsContainerVisible){
                  document.getElementById("augr-settings-page-container").style.height = 0;
                  document.getElementById("augr-settings-page-container").style.opacity = 0;
                  setTimeout(function(){
                      document.getElementById("augr-settings-page-container").style.display = "none";
                      self.augrSettingsContainerVisible = false;
                  }, 500);
                }
                else{
                  document.getElementById("augr-settings-page-container").style.display = "block";
                  setTimeout(function(){
                    document.getElementById("augr-settings-page-container").style.height = "100%";
                    document.getElementById("augr-settings-page-container").style.opacity = 1.0;
                  }, 100);
                  self.augrSettingsContainerVisible = true;
                }
              },
              toggleWorldStreamVisibility: function(){
                if(self.oldRowStreamContainerVisible){
                  document.getElementById("old-row-world-stream-container").style.height = 0;
                  document.getElementById("old-row-world-stream-container").style.opacity = 0;
                  setTimeout(function(){
                      document.getElementById("old-row-world-stream-container").style.display = "none";
                      self.oldRowStreamContainerVisible = false;
                  }, 500);
                }
                else{
                  document.getElementById("old-row-world-stream-container").style.display = "block";
                  setTimeout(function(){
                    document.getElementById("old-row-world-stream-container").style.height = "100%";
                    document.getElementById("old-row-world-stream-container").style.opacity = 1.0;
                  }, 100);
                  self.oldRowStreamContainerVisible = true;
                }
              }
          },
          fx: function(target){
              let val = target;
              let self = this;

            //  console.log("------------------------------------");
              console.log(`${val}`);
            //  console.log("------------------------------------");
              switch(val){
                  case "exit-profile-manager-exit-button-container":
                  case "profile-manager-option-button-container":
                      self.accessibility.toggleProfileManagerContainer();
                  break;
                  case "exit-augr-settings-exit-button-container":
                  case "augr-settings-option-button-container":
                      self.accessibility.toggleAugRSettingsContainer();
                  break;
                  case "exit-world-stream-exit-button-container":
                  case "orm-option-button-container":
                      self.accessibility.toggleWorldStreamVisibility();
                  break;
                  case "youtube-portal-button-container":
                      console.log("no default setting \n server result ! youtube");
                  break;
                  case "instagram-portal-button-container":
                      console.log("no default setting \n server result ! instagram");
                  break;
                  case "linkedin-portal-button-container":
                      console.log("no default setting \n server result ! linkedin");
                  break;
                  case "whatsapp-portal-button-container":
                      console.log("no default setting \n server result ! whatsapp");
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
