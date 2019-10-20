var Experience = {
    environment: [
        {
            name: "administrative-login",
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
            name: "login",
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
                3,
                4,
                5
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
            name: "login-header-title",
            type: "container",
            class: "title-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "LOGIN";
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
            name: "login-user-name",
            type: "container",
            class: "label-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "username";
            },
            index: 2,
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
            name: "login-user-name",
            type: "container",
            class: "input-container",
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
              0
            ],
            element: function(){
              let self = this;
              let el = document.createElement("input");
              el.setAttribute("id", self.id());
              el.classList.add(self.class);
              el.setAttribute("type", "text");
              return el;
            }
        },
        {
            name: "login-password",
            type: "container",
            class: "label-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "password";
            },
            index: 4,
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
            name: "login-password",
            type: "container",
            class: "input-container",
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
              0
            ],
            element: function(){
                let self = this;
                let el = document.createElement("input");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                el.setAttribute("type", "password");
                return el;
            }
        },
        {
            name: "login-connect",
            type: "button-container",
            class: "button-container",
            id: function(){
                let self = this;
                return ""+self.name+"-"+self.class;
            },
            content: function(){
                return "connect";
            },
            index: 4,
            children: [],
            parent: [
              0
            ],
            element: function(){
                let self = this;
                let el = document.createElement("input");
                el.setAttribute("id", self.id());
                el.classList.add(self.class);
                el.setAttribute("type", "button");
                el.setAttribute("value", "connect");

                return el;
            }
        },
        {
            name: "link-to-hov",
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
          },
          fx: function(target){
              let val = target;
              let self = this;

            //  console.log("------------------------------------");
              console.log(`${val}`);
            //  console.log("------------------------------------");
              switch(val){
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
