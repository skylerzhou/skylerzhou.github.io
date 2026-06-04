// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "dropdown-cloud-collecting",
              title: "Cloud collecting",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/clouds/";
              },
            },{id: "dropdown-stargazing",
              title: "Stargazing",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/stargazing/";
              },
            },];
