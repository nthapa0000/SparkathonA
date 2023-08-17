// this is the array of the links and we willl use it to map and do it in such a way instead of doing it singly

export const sidebarLinks = [
    {
      imgURL: "/assets/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/assets/search.svg",
      route: "/search",
      label: "Search",
    },
    {
      imgURL: "/assets/chart.svg",
      route: "/activity",
      label: "Graphs and Statistics",
    },
    {
      imgURL: "/assets/create.svg",
      route: "/create-thread",
      label: "Enter/Edit new Product",
    },
    {
      imgURL: "/assets/community.svg",
      route: "/communities",
      label: "Alerts and Notifications",
    },
    {
      imgURL: "/assets/user.svg",
      route: "/profile",
      label: "Profile",
    },
  ];
  
  export const profileTabs = [
    { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
    { value: "replies", label: "Replies", icon: "/assets/members.svg" },
    { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
  ];
  
  export const communityTabs = [
    { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
    { value: "members", label: "Members", icon: "/assets/members.svg" },
    { value: "requests", label: "Requests", icon: "/assets/request.svg" },
  ];