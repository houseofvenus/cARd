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
              return "set";
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
              return "";
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
          name: "2d-format-settings",
          type: "container",
          class: "manager-container",
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
          name: "3d-0-format-settings",
          type: "container",
          class: "manager-container",
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
          name: "3d-1-format-settings",
          type: "container",
          class: "manager-container",
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
          name: "3d-2-format-settings",
          type: "container",
          class: "manager-container",
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
              return "";
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
              return "";
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
              return "";
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
              return "";
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
              return "";
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
          name: "sensory-settings-park-name",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
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
          name: "sensory-settings-aria-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
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
          name: "sensory-settings-cards-count",
          type: "container",
          class: "settings-component-container",
          id: function(){
              let self = this;
              return ""+self.name+"-"+self.class;
          },
          content: function(){
              return "";
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
