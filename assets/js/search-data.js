// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-cloud-collecting",
              title: "cloud collecting",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/clouds/";
              },
            },{id: "dropdown-stargazing",
              title: "stargazing",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/stargazing/";
              },
            },];
